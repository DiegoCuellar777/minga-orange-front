import React from "react"
import { Link as Anchor } from "react-router-dom"
import { useRef } from "react";

export default function Register() {
    return (
        <div className="flex">
            <div className="bg-white w-[30%] flex flex-col justify-center items-center">
                <img src="/public/images/Logo 2 1.png" className="h-[4rem] mb-[2rem]" alt="" />
                <div className="flex flex-col items-center  mt-6">
                    <h2 className="font-bold text-center text-3xl/[39px]">Welcome!</h2>
                    <span className="text-center text-xs px-10 py-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</span>
                    <form action="" className="flex flex-col w-[75%]">
                        <label htmlFor="email" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Email</label>
                        <input type="email" name="email" id="email" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2"/>
                        <label htmlFor="password" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Password</label>
                        <input type="password" name="password" id="password" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2"/>
                        <input type="submit" value="Sign In" className="bg-gradient-to-r from-[#434343]  to-black  text-white rounded-lg py-3 text-sm my-3"/>
                    </form>
                    <button className="flex border w-[75%] py-3 rounded-lg border-[#1f1f1f78] justify-center ">
                        <img src="/public/images/Google.png" alt="" /><span>Sign in with Google</span>
                    </button>
                    <span className="w-[75%] text-xs mt-4">you don't have an account yet? <Anchor to="/Register" className="text-red-600 font-bold">Sign up</Anchor></span>
                </div>
            </div>
            <img src="/public/images/pexels-aleksandar-pasaric-2339009 2.png" className="w-[70%] h-screen object-cover" alt="" />
        </div>
    )
}
