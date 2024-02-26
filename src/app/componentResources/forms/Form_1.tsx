'use client'
import React, { useState } from 'react';
import CodeBlock from '../CodeBlock';

const Form_1 = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const codeString = `
import React, { useState } from 'react'
const Form = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className='w-full h-full flex justify-center items-center bg-[#FFEADD] py-5'>
            <div className='w-4/6 xl:w-5/6 grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl'>
                <div className='w-full hidden md:block'>
                    <img
                        src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='Login'
                        className='w-fit h-full rounded-l-3xl'
                    />
                </div>
                <div className='flex flex-col justify-center items-start w-full px-5 sm:px-8  xl:px-16 space-y-6 py-10 md:py-5 lg:py-5'>
                    <div className='my-5 flex items-center space-x-2'>
                        <img
                            src="https://img.logoipsum.com/298.svg"
                            className='w-6'
                            alt=""
                        />
                        <p className='text-xl text-gray-600 uppercase font-bold translate-y-1'>Studio</p>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-md md:text-lg xl:text-3xl font-bold text-gray-600'>Welcome to</h1>
                        <h1 className='text-md md:text-lg xl:text-3xl font-bold text-gray-600'>Studio 6/6 Dashboard</h1>
                    </div>

                    <form action="" className='space-y-5'>
                        <label className="relative">
                            <input
                                type="text"
                                placeholder='info@example.com'
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-1 text-sm outline-none duration-200 hover:border-gray-600 focus:border-orange-500 mb-6"
                            />
                            <span className="pointer-events-none absolute -top-3 left-4 bg-white px-1 text-xs uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.5rem] peer-focus:text-orange-500">Email</span>
                        </label>

                        <label className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 pb-1 pt-1.5 text-sm outline-none duration-200 hover:border-gray-600 focus:border-orange-500"
                                placeholder='***********'
                            />
                            <span
                                className="pointer-events-none absolute -top-3 left-4 bg-white px-1 text-xs uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.5rem] peer-focus:text-orange-500"
                            >
                                password
                            </span>
                            <svg onClick={() => setPasswordVisible(!passwordVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={\`absolute right-4 bottom-0 \${passwordVisible ? "text-orange-500" : "text-gray-700"} cursor-pointer w-4 h-4\`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </label>

                        <p className='text-orange-500 text-xs font-semibold'>Forgot password?</p>

                        <button className='bg-orange-500 text-white w-full rounded-xl py-1'>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Form;
    `;


    return (
        <>
            <div className="w-full py-5">
                <h1 className="text-gray-600 font-bold text-2xl uppercase mb-3">Form #1</h1>
                <CodeBlock
                    wrapLines={false}
                    codeString={codeString}
                >
                    <div className='w-full h-full flex justify-center items-center bg-[#FFEADD] py-5'>
                        <div className='w-4/6 xl:w-5/6 grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl'>
                            <div className='w-full hidden md:block'>
                                <img
                                    src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    alt='Login'
                                    className='w-fit h-full rounded-l-3xl'
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start w-full px-5 sm:px-8  xl:px-16 space-y-6 py-10 md:py-5 lg:py-5'>
                                <div className='my-5 flex items-center space-x-2'>
                                    <img
                                        src="https://img.logoipsum.com/298.svg"
                                        className='w-6'
                                        alt=""
                                    />
                                    <p className='text-xl text-gray-600 uppercase font-bold translate-y-1'>Studio</p>
                                </div>

                                <div className='space-y-2'>
                                    <h1 className='text-md md:text-lg xl:text-3xl font-bold text-gray-600'>Welcome to</h1>
                                    <h1 className='text-md md:text-lg xl:text-3xl font-bold text-gray-600'>Studio 6/6 Dashboard</h1>
                                </div>

                                <form action="" className='space-y-5'>
                                    <label className="relative">
                                        <input
                                            type="text"
                                            placeholder='info@example.com'
                                            className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-1 text-sm outline-none duration-200 hover:border-gray-600 focus:border-orange-500 mb-6"
                                        />
                                        <span className="pointer-events-none absolute -top-3 left-4 bg-white px-1 text-xs uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.5rem] peer-focus:text-orange-500">Email</span>
                                    </label>

                                    <label className="relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 pb-1 pt-1.5 text-sm outline-none duration-200 hover:border-gray-600 focus:border-orange-500"
                                            placeholder='***********'
                                        />
                                        <span
                                            className="pointer-events-none absolute -top-3 left-4 bg-white px-1 text-xs uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.5rem] peer-focus:text-orange-500"
                                        >
                                            password
                                        </span>
                                        <svg onClick={() => setPasswordVisible(!passwordVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute right-4 bottom-0 ${passwordVisible ? "text-orange-500" : "text-gray-700"} cursor-pointer w-4 h-4`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                    </label>

                                    <p className='text-orange-500 text-xs font-semibold'>Forgot password?</p>

                                    <button className='bg-orange-500 text-white w-full rounded-xl py-1'>Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </CodeBlock>
            </div >
        </>
    )
}

export default Form_1;