'use client'
import CodeBlock from "@/app/componentResources/CodeBlock";
import { useState } from "react";


const Button_1 = () => {
    const codeString = `
    {/* button 1 */}
    <button
        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#4bcc01] text-white"
        style={{ boxShadow: "0 5px 0 0 #35af00" }}
    >
        Click Here
    </button>

    {/* button 2 */}
    <button
        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#ef4444] text-white"
        style={{ boxShadow: "0 5px 0 0 #dc2626" }}
    >
        Click Here
    </button>

    {/* button 3 */}
    <button
        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#f97316] text-white"
        style={{ boxShadow: "0 5px 0 0 #ea580c" }}
    >
        Click Here
    </button>

    {/* button 4 */}
    <button
        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#d946ef] text-white"
        style={{ boxShadow: "0 5px 0 0 #c026d3" }}
    >
        Click Here
    </button>
    `;


    return (
        <div className="w-full py-5">
            <h1 className="text-gray-600 font-bold text-2xl uppercase mb-3">Category #1</h1>
            <CodeBlock
                wrapLines={false}
                codeString={codeString}
            >
                <div className="grid grid-cols-2 gap-y-8 gap-x-5">
                    {/* button 1 */}
                    <button
                        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#4bcc01] text-white"
                        style={{ boxShadow: "0 5px 0 0 #35af00" }}
                    >
                        Click Here
                    </button>

                    {/* button 2 */}
                    <button
                        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#ef4444] text-white"
                        style={{ boxShadow: "0 5px 0 0 #dc2626" }}
                    >
                        Click Here
                    </button>

                    {/* button 3 */}
                    <button
                        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#f97316] text-white"
                        style={{ boxShadow: "0 5px 0 0 #ea580c" }}
                    >
                        Click Here
                    </button>

                    {/* button 4 */}
                    <button
                        className="min-h-[40px] rounded-lg font-bold border-none cursor-pointer active:scale-90 active:translate-x-2 active:translate-y-2 transition-all duration-[70ms] bg-[#d946ef] text-white"
                        style={{ boxShadow: "0 5px 0 0 #c026d3" }}
                    >
                        Click Here
                    </button>
                </div>
            </CodeBlock>
        </div >
    );
};

export default Button_1;