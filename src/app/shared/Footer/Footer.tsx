'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import linkedin from "@/../public/linkedin.png";
import { FaRegCopyright } from "react-icons/fa6";
import ME from "@/../public/me.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "@/../public/logo.png";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    const toTop = useRef();

    const scrollToTop = (elemRef: any) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handlerScroll = (event: any) => {
            if (window.scrollY > 500) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        }
        window.addEventListener("scroll", handlerScroll)
        return () => window.removeEventListener("scroll", handlerScroll)
    }, [])

    return (
        <div className='w-full py-10 text-gray-300 bg-gray-800'>
            <div className='container mx-auto flex'>

                <div className='space-y-5 mt-12 md:mt-0 mx-auto sm:col-span-2 md:col-span-1'>
                    <div className='flex justify-center items-center'>
                        <p>
                            Designed & Developed by 
                            <a className='text-blue-400 underline mr-4 ml-2' target='_blank' href="https://www.linkedin.com/in/tanvir-hossain-sadi">
                                Tanvir Hossain Sadi
                            </a>
                        </p>
                        <p className='flex'>
                            <FaRegCopyright className='mr-1 mt-[3px]' />
                            2024, All Rights Reserved.
                        </p>
                    </div>
                    <p className='text-center text-[#2ed573]'>Thank you for visiting.</p>
                </div>
            </div>
            {
                showTopBtn && <p
                    onClick={() => scrollToTop(toTop)}
                    className='animate-pulse duration-1000 ease-in-out  text-white fixed right-10 bottom-14 text-4xl cursor-pointer'
                ><BsArrowUpSquareFill />
                </p>
            }

        </div>
    );
};

export default Footer;