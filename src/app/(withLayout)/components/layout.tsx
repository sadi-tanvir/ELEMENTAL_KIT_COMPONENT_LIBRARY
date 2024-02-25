'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Logo from "@/../public/logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaBookOpenReader } from "react-icons/fa6";
import { RxComponent2 } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useState } from "react";
import SidebarNav from "@/app/componentResources/SidebarNav/SidebarNav";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
    // navigation
    const pathname = usePathname();

    const [openComponentMenu, setOpenComponentMenu] = useState(true)

    // redux
    const dispatch = useAppDispatch();
    const { isSidebarOpen } = useAppSelector(state => state.globalReducer);


    const componentsName = [
        { id: 1, name: "button", path: "#" },
        { id: 2, name: "inputs", path: "#" },
        { id: 3, name: "Accordion", path: "#" },
    ]

    return (
        <div className="min-h-screen flex">
            <SidebarNav></SidebarNav>
            <div className="col-span-3 w-full">
                {children}
            </div>
        </div>
    );
};

export default ComponentsLayout;