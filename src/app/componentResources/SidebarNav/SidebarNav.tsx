'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBookOpenReader } from "react-icons/fa6";
import { RxComponent2 } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useState } from "react";
import UpAngle from "@/app/shared/Icons";
import Link from "next/link";
const SidebarNav = () => {
    // navigation
    const pathname = usePathname();

    const [openComponentMenu, setOpenComponentMenu] = useState(true)

    // redux
    const dispatch = useAppDispatch()
    const { isSidebarOpen } = useAppSelector(state => state.globalReducer);


    const componentsName = [
        { id: 1, name: "Buttons", path: "/components/buttons" },
        { id: 2, name: "Text Inputs", path: "/components/text-inputs" },
        { id: 3, name: "Forms", path: "/components/forms" },
        { id: 4, name: "Accordion", path: "/components/accordion" },
    ]

    return (
        <aside className={`min-h-screen ${isSidebarOpen ? "w-[350px] xl:w-[500px]" : "w-[60px]"}  transition-all duration-200 overflow-hidden shadow border`}>
            <nav className="flex flex-col h-full">
                <div className="flex justify-between items-center px-2 mt-4">
                    <div className={`${isSidebarOpen ? "block" : "hidden"} relative w-3/4 h-11 rounded-md bg-white border shadow`}>
                        <p className="px-2 absolute top-2 left-0"><CiSearch className="text-2xl text-gray-600" /></p>
                        <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
                    </div>
                    <button onClick={() => dispatch({ type: 'toggleSidebar' })} className="p-1.5 rounded-lg  hover:bg-gray-100">
                        {
                            isSidebarOpen ?
                                <BsArrowLeftSquareFill className="text-3xl text-[#ef5777]" /> :
                                <BsArrowRightSquareFill className="text-3xl text-[#ef5777]" />
                        }
                    </button>
                </div>

                <div className="flex-1 px-2 mt-10 space-y-5">
                    <div className={`flex w-[320px] xl:w-[480px] justify-start space-x-5 ${pathname === "/docs" && isSidebarOpen ? 'text-[#34e7e4] bg-[#e2fdfc]' : 'text-gray-600'}   py-3 px-3 rounded-lg`}>
                        <FaBookOpenReader className="text-2xl" />
                        <span className="text-xl xl:text-2xl font-semibold">Docs</span>
                    </div>



                    {/* components link area */}
                    <ul className={` w-[320px] xl:w-[480px] text-gray-600  py-3 px-3 rounded-lg overflow-hidden`}>
                        <Link href={"/components"}>
                            <li onClick={() => setOpenComponentMenu(!openComponentMenu)} className={` ${pathname.split("/").includes("components") ? "text-[#ef5777]" : "text-gray-700"} flex justify-start space-x-5 transition-all duration-300 ease-in-out  cursor-pointer`}>
                                <p className={`${!isSidebarOpen ? "text-[#ef5777]" : ""}`}>
                                    <RxComponent2 className="text-2xl" />
                                </p>
                                <span className="text-xl xl:text-2xl font-semibold">Components</span>
                                <UpAngle
                                    openComponentMenu={openComponentMenu}
                                />
                            </li>
                        </Link>
                        <li>
                            <ul className={`ml-10  transition-all duration-300 ease-in-out`}>
                                {
                                    componentsName.map((item) => (
                                        <Link className="" key={item.id} href={item.path}>
                                            <li className={`relative grid overflow-hidden ${pathname === item.path ? "text-[#ef5777]" : "text-gray-600"}  transition-all duration-300 ease-in-out ${openComponentMenu ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden">{item.name}</div>
                                                {
                                                    pathname === item.path && <p className="absolute -left-8 top-8 w-1 h-1 bg-[#ef5777]"></p>
                                                }
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside >
    )
}

export default SidebarNav