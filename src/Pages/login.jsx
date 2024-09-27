import React, { useState } from "react";
import front from '../assets/front.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [formData,setFormData] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:8000/auth/api/login',formData)
        console.log(response)
        if(response.status == 200){
            localStorage.setItem('authTokens',response.data)
            if(formData.username = 'admin') {
                navigate('/admin')
            }else{
                navigate('/')  
            }
            alert('Login Successful')

        }else{
            alert('Invalid Login Credentials!')
        }
    }

    return (
        <div className="font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:max-w-md w-full px-4 py-4">
                <form onSubmit={handleSubmit} method="POST">
                <div className="mb-12">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
 
                </div>

                <div>
                    <label className="text-gray-800 text-xs block mb-2" htmlFor="username">
                    Username
                    </label>
                    <div className="relative flex items-center">
                    <input
                        name="username"
                        type="text"
                        onChange={handleChange}
                        // autoComplete='off'
                        required
                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Enter Username"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                    >
                        <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" />
                        </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        />
                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                        </g>
                    </svg>
                    </div>
                </div>

                <div className="mt-8">
                    <label className="text-gray-800 text-xs block mb-2" htmlFor="password">
                    Password
                    </label>
                    <div className="relative flex items-center">
                    <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        required
                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Enter password"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        viewBox="0 0 128 128"
                    >
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    </svg>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                        Remember me
                    </label>
                    </div>
                    <div>
                    <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                        Forgot Password?
                    </a>
                    </div>
                </div>

                <div className="mt-12">
                    <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                    Sign in
                    </button>
                </div>

                <div className="space-x-6 flex justify-center mt-6">
                    <button type="button" className="border-none outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" className="inline" viewBox="0 0 512 512">
                        <path
                        fill="#fbbd00"
                        d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                        />
                        <path
                        fill="#0f9d58"
                        d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                        />
                        <path
                        fill="#31aa52"
                        d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                        />
                        <path
                        fill="#3c79e6"
                        d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                        />
                        <path
                        fill="#cf2d48"
                        d="M256 120c29.121 0 55.929 8.883 78.461 24.15l86.216-86.216C364.101 22.568 310.126 0 256 0l-60 60z"
                        />
                        <path
                        fill="#eb4132"
                        d="M325.477 139.131A135.632 135.632 0 0 1 256 120V0c-68.38 0-132.667 26.629-180.735 74.777l86.216 86.216C162.883 175.929 189.691 167 256 167c18.226 0 35.303 3.984 51.884 10.523l46.377-32.392z"
                        />
                    </svg>
                    </button>
                    <button type="button" className="border-none outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28px"
                        className="inline"
                        viewBox="0 0 24 24"
                        fill="#4267B2"
                    >
                        <path
                        d="M15.117 8.644H12.76V7.136c0-.493.325-.607.555-.607h1.773V3.006l-2.448-.01c-2.718 0-3.321 2.03-3.321 3.33v2.318H6.87v3.134h2.449v7.907h3.44V11.78h2.414l.347-3.136z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                </form>
            </div>

            <div className="max-w-md w-full p-4">
                <img
                className="rounded-lg w-full h-full object-cover"
                src={front}
                alt="Login Illustration"
                />
            </div>
            </div>
        </div>
        </div>

    );
};

export default Login;
