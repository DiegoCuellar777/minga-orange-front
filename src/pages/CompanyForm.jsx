import axios from 'axios';
import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import apiUrl from '../../api'
import { useNavigate } from 'react-router-dom';

export default function CompanyForm() {
    let user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate();
    const [$photo, setProfileImageUrl] = useState('');
    const name = useRef();
    const website = useRef();
    const logo = useRef();
    const description = useRef();

    const handleProfileImageChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    function handleForm(e) {
        e.preventDefault();
        let data = {
            name: name.current.value,
            website: website.current.value,
            logo: $photo,
            description: description.current.value,
            /* user_id: user.id, */
        };
        let token = localStorage.getItem("token")
        let headers = { headers: { "Authorization": `Bearer ${token}` } }
        axios.post(`${apiUrl}api/companies`, data, headers)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: 'Company successfully created',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to homepage',
                    allowOutsideClick: false,
                }).then(() => {
                    navigate('/');
                });
            })
            .catch(err => {
                const joi = err.response.data.message
                console.log(err.response.data.message)
                Swal.fire(`${joi}`)
            })
        console.log(data);
    }

    return (
        <form onSubmit={handleForm} className='h-screen bg-black flex flex-col items-center justify-center'>
            <img
                className="rounded-full object-cover object-center h-16 w-16"
                src={$photo || user.photo}
                alt="user avatar"
            />
            <div className='flex flex-col justify-center w-[50%] sm:w-[30%] text-white font-montserrat font-normal	text-base'>
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Name" ref={name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="Website" ref={website} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="URL Profile Image" onChange={handleProfileImageChange} ref={logo} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Description" ref={description} />
                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </form>
    );

}
