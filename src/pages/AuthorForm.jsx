import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import apiUrl from '../../api'

export default function AuthorForm() {
    const [$cityCountry, setCityCountry] = useState('');
    const [$name, setFirstName] = useState('');
    const [$last_name, setLastName] = useState('');
    const [$currentDate, setCurrentDate] = useState('');
    const [$photo, setProfileImageUrl] = useState('');
    const name = useRef();
    const last_name = useRef();
    const cityCountry = useRef();
    const date = useRef();
    const photo = useRef();
    console.log(apiUrl)
    useEffect(() => {
        const inputDate = document.querySelector('#date-input');
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        setCurrentDate(new Date().toLocaleDateString('en-GB', options));
        inputDate.value = $currentDate;
    }, []);

    const handleProfileImageChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    function handleForm(e) {
        e.preventDefault();
        const cityCountryValue = cityCountry.current.value;
        const [city, country] = cityCountryValue.includes(",") ? cityCountryValue.split(",").map(value => value.trim()) : ["", ""];
        if (!city && !country) {
            Swal.fire('City and country required \n Example: Jujuy,Argentina');
            return;
        }
        let data = {
            name: name.current.value,
            last_name: last_name.current.value,
            city: city.trim(),
            country: country.trim(),
            photo: $photo,
        };
        axios.post("http://localhost:8000/api/authors", data)
            .then((res) => {
                console.log(res.data)
                Swal.fire('Author successfully created')
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
                src={$photo || 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'}
                alt="user avatar"
            />
            <div className='flex flex-col justify-center w-[50%] sm:w-[30%] text-white font-montserrat font-normal	text-base'>
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert name" defaultValue={$name} ref={name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert last name" defaultValue={$last_name} ref={last_name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="City, country" defaultValue={$cityCountry} ref={cityCountry} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder={$currentDate} readOnly id="date-input" ref={date} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="URL profile image" onChange={handleProfileImageChange} ref={photo} />
                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </form>
    );

}
