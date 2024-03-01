'use client'
import CodeBlock from "@/app/componentResources/CodeBlock";
import { useState } from "react";


const Button_2 = () => {


    const codeString = `
    {/* button 1 */}
    <button className='bg-orange-500 text-white w-full rounded-xl py-2'>Click Here</button>

    {/* button 2 */}
    <button className='bg-cyan-500 text-white w-full rounded-xl py-2'>Click Here</button>

    {/* button 3 */}
    <button className='bg-pink-500 text-white w-full rounded-xl py-2'>Click Here</button>

    {/* button 4 */}
    <button className='bg-emerald-500 text-white w-full rounded-xl py-2'>Click Here</button>
    `;


    return (
        <div className="w-full py-5">
            <h1 className="text-gray-600 font-bold text-2xl uppercase mb-3">Category #2</h1>
            <CodeBlock
                wrapLines={false}
                codeString={codeString}
            >
                <div className="grid grid-cols-2 gap-y-8 gap-x-5">
                    {/* button 1 */}
                    <button className='bg-orange-500 text-white w-full rounded-xl py-2'>Click Here</button>

                    {/* button 2 */}
                    <button className='bg-cyan-500 text-white w-full rounded-xl py-2'>Click Here</button>

                    {/* button 3 */}
                    <button className='bg-pink-500 text-white w-full rounded-xl py-2'>Click Here</button>

                    {/* button 4 */}
                    <button className='bg-emerald-500 text-white w-full rounded-xl py-2'>Click Here</button>
                </div>
            </CodeBlock>
        </div >
    );
};

export default Button_2;