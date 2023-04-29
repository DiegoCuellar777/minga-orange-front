import React, { useState, useEffect } from 'react';

export default function AuthForm() {
    const [currentDate, setCurrentDate] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [cityCountry, setCityCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        const inputDate = document.querySelector('#date-input');
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        setCurrentDate(new Date().toLocaleDateString('en-GB', options));
        inputDate.value = currentDate;
    }, []);

    const handleProfileImageChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    const capitalizeWord = (word) => {
        if (word.length > 2 || (word.length === 1 && word.match(/[a-zA-Z]/))) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word.toLowerCase();
        }
    };
    const handleInputChange = (setState) => (event) => {
        const value = event.target.value;
        const words = value.split(' ');
        const capitalizedWords = words.map((word) => capitalizeWord(word));
        const capitalizedValue = capitalizedWords.join(' ');
        setState(capitalizedValue);
    };

    return (
        <div className='h-screen bg-black flex flex-col items-center justify-center'>
            <img
                className="rounded-full object-cover object-center	 h-16 w-16"
                src={profileImageUrl || 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'}
                alt="user avatar"
            />
            <div className='flex flex-col justify-center w-[70%] text-white font-montserrat font-normal	text-base'>
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert name" value={firstName} onChange={handleInputChange(setFirstName)} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="Insert last name" value={lastName} onChange={handleInputChange(setLastName)} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder="City, country" value={cityCountry} onChange={handleInputChange(setCityCountry)} />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="text" placeholder={currentDate} readOnly id="date-input" />
                <input className='bg-transparent border-b-2 border-white my-4 px-2' type="url" placeholder="URL profile image" onChange={handleProfileImageChange} />
                <button className=" p-2 mb-4 bg-white text-black rounded-md font-bold text-2xl my-4" type="submit">Send</button>
            </div>
        </div>
    );
}
