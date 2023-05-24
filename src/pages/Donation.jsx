import React, { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import apiUrl from '../../api';

const Donation = () => {
    initMercadoPago("TEST-91e1404f-680a-4d36-be08-9236755ac2a1");

    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleDonation = async (amount) => {
        try {
            const response = await axios.post(`${apiUrl}donation`, {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);

            setAmount(amount)
        } catch (error) {
            console.error(error);
        }
    };

    const customization = {
        visual: {
            buttonBackground: 'blue',
            borderRadius: '2rem',
            valuePropColor: "white",
        },
    }

    return (
        <>
            {preferenceId === false ?
                <div className='text-white h-screen flex flex-col justify-center items-center bg-[url(images/donate-image.png)] bg-no-repeat bg-cover'>
                    <h1 className='text-[2rem] mb-[10%] pr-[2%] font-extrabold drop-shadow-lg'>
                        Donation page
                    </h1>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                        <div
                            class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                            <div class="flex flex-col justify-center items-center p-6">
                                <h5
                                    class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                    Donation of $1000
                                </h5>
                                <button className='w-[80%] transition duration-300 ease-in-out bg-[#138bfb] hover:bg-[#1351fb] text-white font-bold py-2 px-4 rounded-[1rem]'
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
                                <button className='w-[80%] transition duration-300 ease-in-out bg-[#138bfb] hover:bg-[#1351fb] text-white font-bold py-2 px-4 rounded-[1rem]'
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
                                <button className='w-[80%] transition duration-300 ease-in-out bg-[#138bfb] hover:bg-[#1351fb] text-white font-bold py-2 px-4 rounded-[1rem]'
                                    onClick={() => handleDonation(10000)}>
                                    Donate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : (
                    <div className=" flex flex-col text-black h-screen justify-center items-center bg-[url(images/donate-image2.png)] bg-no-repeat bg-cover">
                        <div className='bg-neutral-700 bg-no-repeat bg-cover drop-shadow-md min-h-[50%] rounded-[2rem] flex flex-col justify-center items-center mx-4'>
                            <div className='flex flex-col items-center'>
                                <p className='text-center font-extrabold text-white text-[2rem] m-4'>
                                    Want to donate ${amount}?
                                </p>
                                <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} customization={customization} />
                                <button className='transition duration-300 ease-in-out bg-[#fb1316] hover:bg-[#ae0d0f] text-white font-bold py-2 px-4 rounded-[1rem] ' onClick={() => setPreferenceId(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};
export default Donation;
