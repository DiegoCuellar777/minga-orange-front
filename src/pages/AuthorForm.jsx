import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

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

    useEffect(() => {
        const inputDate = document.querySelector('#date-input');
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        setCurrentDate(new Date().toLocaleDateString('en-GB', options));
        inputDate.value = $currentDate;
    }, []);

    const handleProfileImageChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (c) => c.toUpperCase());
    };

    const handleInputChange = (setState) => (event) => {
        const value = event.target.value;
        setState(capitalizeWords(value));
    };

    function handleForm(e) {
        e.preventDefault();
        const [city, country] = cityCountry.current.value.split(",");
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
                alert("Author created successfully")
            })
            .catch(err => {
                console.log(err.response.data.message)
                alert(err.response.data.message)
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
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert name" value={$name} onChange={handleInputChange(setFirstName)} ref={name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert last name" value={$last_name} onChange={handleInputChange(setLastName)} ref={last_name} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="City, country" value={$cityCountry} onChange={handleInputChange(setCityCountry)} ref={cityCountry} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder={$currentDate} readOnly id="date-input" ref={date} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="URL profile image" onChange={handleProfileImageChange} ref={photo} />
                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </form>
    );

}
