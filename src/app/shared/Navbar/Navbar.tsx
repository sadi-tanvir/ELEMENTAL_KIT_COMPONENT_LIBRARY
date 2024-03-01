'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
    // navigation
    const pathname = usePathname();

    // redux
    const dispatch = useAppDispatch()
    const { isSidebarOpen } = useAppSelector(state => state.globalReducer);

    const navItems = [
        { id: 1, title: "Docs", path: "/docs" },
        { id: 2, title: "Components", path: "/components" },
        { id: 3, title: "Blogs", path: "/blogs" },
    ]

    return (
        <header className="w-full py-5 px-5  shadow-md">
            <nav className="flex justify-between">
                <Link href={"/"}>
                    <div className="flex flex-col sm:flex-row  space-x-2">
                        <div className="flex items-end space-x-2">
                            <Image
                                src={Logo}
                                alt="logo"
                                className="w-10"
                            />
                            <span className="sm:hidden text-lg font-bold uppercase text-[#ef5777]">Elemental Kit</span>
                        </div>

                        <div className="flex flex-col items-start translate-y-2">
                            <span className="hidden sm:block text-lg font-bold uppercase text-[#ef5777]">Elemental Kit</span>
                            <span className="text-gray-500 text-sm">React x Tailwind Component Library</span>
                        </div>

                    </div>
                </Link>

                <div className="flex space-x-10 items-center">
                    <ul className="flex flex-row space-x-7">

                        {
                            navItems.map((nav) => (
                                <Link className={`${pathname.split("/").includes(nav.path.split("/")[1]) ? "text-[#ef5777]" : "text-gray-700"}`} key={nav.id} href={nav.path}>
                                    <li>{nav.title}</li>
                                </Link>
                            ))
                        }
                    </ul>

                    <div className="">
                        <a target='_blank' href="https://github.com/sadi-tanvir">
                            <FaGithub
                                color='white'
                                className='bg-slate-500 rounded-full w-8 h-8 xl:w-10 xl:h-10'
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar