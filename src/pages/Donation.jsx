import React, { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Donation = () => {
    initMercadoPago("TEST-d58e27ec-efd5-43ef-8dde-58ec0557696f");

    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleDonation = async (amount) => {
        try {
            const response = await axios.post('http://localhost:8000/donation', {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);
            setAmount(amount)
        } catch (error) {
            console.error(error);
            // Manejar cualquier error de manera apropiada
        }
    };

    const customization = {
        visual: {
            buttonBackground: 'white',
            borderRadius: '2rem',
        },
    }

    return (
        <>
            <div className='bg-[url(/src/assets/image/donate.jpg)] bg-cover bg-no-repeat '>
                {preferenceId === false ?
                    <div className='text-white h-screen flex flex-col justify-center items-center'>
                        <h1 className='text-[2rem] mb-[10%] pr-[2%] font-extrabold drop-shadow-lg'>
                            Donation page
                        </h1>
                        <div className='flex justify-center items-center gap-4'>
                            <div
                                class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                <div class="flex flex-col justify-center items-center p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                        Donation of $1000
                                    </h5>
                                    <button className='w-[80%] transition duration-300 ease-in-out bg-[#fb1316] hover:bg-[#ae0d0f] text-white font-bold py-2 px-4 rounded-[1rem]'
                                        onClick={() => handleDonation(1000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                <div class="flex flex-col justify-center items-center p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                        Donation of $5000
                                    </h5>
                                    <button className='w-[80%] transition duration-300 ease-in-out bg-[#fb1316] hover:bg-[#ae0d0f] text-white font-bold py-2 px-4 rounded-[1rem]'
                                        onClick={() => handleDonation(5000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                <div class="flex flex-col justify-center items-center p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                        Donation of $10000
                                    </h5>
                                    <button className='w-[80%] transition duration-300 ease-in-out bg-[#fb1316] hover:bg-[#ae0d0f] text-white font-bold py-2 px-4 rounded-[1rem]'
                                        onClick={() => handleDonation(10000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : (
                        <div className=" flex flex-col text-black h-screen justify-center items-center">
                            <div className='bg-[url(https://tuwebanime.com/wp-content/uploads/2020/06/neon-genesis-evangelion-portada-anime-web.jpg)] bg-no-repeat bg-cover drop-shadow-md w-[60%] min-h-[50%] rounded-[2rem] border-2 border-gray-300 bg-gray-300 flex flex-col justify-center items-end pr-[1%] '>
                                <div className='flex flex-col items-center'>
                                    <p className='w-[25vw] font-extrabold text-white text-[2rem]'>Want to donate ${amount}?</p>
                                    <Wallet initialization={{ preferenceId: preferenceId }} customization={customization} />
                                    <button className='transition duration-300 ease-in-out bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-[1rem] w-[10vw] ' onClick={() => setPreferenceId(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
};
export default Donation;
