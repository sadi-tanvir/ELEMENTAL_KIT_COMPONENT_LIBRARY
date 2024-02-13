'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
const SidebarNav = () => {
    // redux
    const dispatch = useAppDispatch()
    const { isSidebarOpen } = useAppSelector(state => state.globalReducer);

    return (
        <aside className={`absolute top-0 left-0 bg-green-100   w-2/6 ${isSidebarOpen ? "block transition-all ease-linear duration-500" : "hidden transition-all ease-linear duration-500 overflow-scroll"}`}>
            <nav className="min-h-full flex flex-col bg-white border-r-4  shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://img.logoipsum.com/331.svg"
                        alt="logo"
                        className="w-20"
                    />
                    <button onClick={() => dispatch({ type: 'closeSidebar' })} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <BsArrowLeftSquareFill className="text-3xl text-red-500" />
                    </button>
                </div>

                <ul className="flex-1 bg-red-200 px-3">
                    <li>sadi</li>
                </ul>

                <div className={`flex justify-between items-center`}>
                    <div className="">
                        <h4 className="font-semibold">Tanvir Hossain</h4>
                        <span className="text-xs text-gray-600">sadi@gmail.com</span>
                    </div>
                </div>

            </nav>
        </aside>
    )
}

export default SidebarNav