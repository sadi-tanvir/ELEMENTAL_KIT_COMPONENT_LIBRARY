'use client'
import CodeBlock from "@/app/componentResources/CodeBlock";
import { useState } from "react";


const Text_Input_1 = () => {


    const codeString = `
    <div className="grid grid-cols-2 gap-y-8 gap-x-5">
        {/* input 1 */}
        <div className="relative w-full h-11 rounded-md bg-white border shadow">
            <p className="px-2 absolute top-3 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </p>
            <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
        </div>
        
        {/* input 2 */}
        <div className="relative w-full h-11 rounded-md bg-white border shadow-md">
            <p className="px-2 absolute top-3 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </p>
            <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
        </div>
    
        {/* input 3 */}
        <div className="relative w-full h-11 rounded-md bg-white border-2 border-gray-400 shadow-md">
            <p className="px-2 absolute top-2 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </p>
            <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
        </div>
    
        {/* input 4 */}
        <div className="relative w-full h-11 rounded-md bg-white border-2 border-dashed border-gray-400 shadow-md">
            <p className="px-2 absolute top-2 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </p>
            <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
        </div>
    </div>
    `;


    return (
        <div className="w-full py-5">

            <CodeBlock
                wrapLines={false}
                codeString={codeString}
            >
                <div className="grid grid-cols-2 gap-y-8 gap-x-5">
                    {/* input 1 */}
                    <div className="relative w-full h-11 rounded-md bg-white border shadow">
                        <p className="px-2 absolute top-3 left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </p>
                        <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
                    </div>

                    {/* input 2 */}
                    <div className="relative w-full h-11 rounded-md bg-white border shadow-md">
                        <p className="px-2 absolute top-3 left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </p>
                        <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
                    </div>

                    {/* input 3 */}
                    <div className="relative w-full h-11 rounded-md bg-white border-2 border-gray-400 shadow-md">
                        <p className="px-2 absolute top-2 left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </p>
                        <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
                    </div>

                    {/* input 4 */}
                    <div className="relative w-full h-11 rounded-md bg-white border-2 border-dashed border-gray-400 shadow-md">
                        <p className="px-2 absolute top-2 left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </p>
                        <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
                    </div>
                </div>
            </CodeBlock>
        </div >
    );
};

export default Text_Input_1;