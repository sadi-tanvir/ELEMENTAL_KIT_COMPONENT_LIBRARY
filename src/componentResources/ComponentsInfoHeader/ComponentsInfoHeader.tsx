'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

const ComponentsInfoHeader = () => {
    // redux
    const dispatch = useAppDispatch()
    const { isSidebarOpen } = useAppSelector(state => state.globalReducer);

    return (
        <div className='w-screen bg-red-500 py-5'>
            <button onClick={() => dispatch({ type: 'toggleSidebar' })} className="">
                <FiAlignJustify className="text-gray-800 text-3xl" />
            </button>
        </div>
    );
};

export default ComponentsInfoHeader;