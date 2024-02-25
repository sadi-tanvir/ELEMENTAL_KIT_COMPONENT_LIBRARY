'use client'
import CodeBlock from "@/app/componentResources/CodeBlock";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";


const Text_Input_2 = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const codeString = `
    {/* text-input 1 */}
    <div>
        <label className="relative">
            <input
                type="text"
                placeholder='info@example.com'
                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-2 text-lg outline-none duration-200 hover:border-gray-600 focus:border-primary mb-6"
            />
            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary">Enter Your Email</span>
        </label>
    </div>

    {/* text-input 2 */}
    <div>
        <label className="relative">
            <input
                type={passwordVisible ? "text" : "password"}
                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-2 text-lg outline-none duration-200 hover:border-gray-600"
                placeholder='***********'
            />
            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary">
                password
            </span>
            <RiEyeCloseLine
                onClick={() => setPasswordVisible(!passwordVisible)}
                className={\`absolute right-4 bottom-1 \${passwordVisible ? "text-primary" : "text-gray-700"} cursor-pointer\`}
            />
        </label>
    </div>

    {/* text-input 3 */}
    <div>
        <label className="relative">
            <input
                type="text"
                placeholder='info@example.com'
                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-orange-500 px-4 py-2 text-lg outline-none duration-200  focus:border-primary mb-6"
            />
            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-orange-500">Enter Your Email</span>
        </label>
    </div>

    {/* text-input 4 */}
    <div>
        <label className="relative">
            <input
                type={passwordVisible ? "text" : "password"}
                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-red-500 px-4 py-2 text-lg outline-none duration-200"
                placeholder='***********'
            />
            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-red-500 duration-200 peer-focus:text-[.7rem] peer-focus:text-red-500">
                password
            </span>
            <RiEyeCloseLine
                onClick={() => setPasswordVisible(!passwordVisible)}
                className={\`absolute right-4 bottom-1 \${passwordVisible ? "text-primary" : "text-gray-700"} cursor-pointer\`}
            />
        </label>
    </div>
    `;



    return (
        <div className="w-full py-5 mt-10">

            <CodeBlock
                wrapLines={false}
                codeString={codeString}
            >
                <div className="grid grid-cols-2 gap-5">
                    {/* text-input 1 */}
                    <div>
                        <label className="relative">
                            <input
                                type="text"
                                placeholder='info@example.com'
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-2 text-lg outline-none duration-200 hover:border-gray-600 focus:border-primary mb-6"
                            />
                            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary">Enter Your Email</span>
                        </label>
                    </div>

                    {/* text-input 2 */}
                    <div>
                        <label className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-2 text-lg outline-none duration-200 hover:border-gray-600"
                                placeholder='***********'
                            />
                            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary">
                                password
                            </span>
                            <RiEyeCloseLine
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className={`absolute right-4 bottom-1 ${passwordVisible ? "text-primary" : "text-gray-700"} cursor-pointer`}
                            />
                        </label>
                    </div>

                    {/* text-input 3 */}
                    <div>
                        <label className="relative">
                            <input
                                type="text"
                                placeholder='info@example.com'
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-orange-500 px-4 py-2 text-lg outline-none duration-200  focus:border-primary mb-6"
                            />
                            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-orange-500">Enter Your Email</span>
                        </label>
                    </div>

                    {/* text-input 4 */}
                    <div>
                        <label className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-red-500 px-4 py-2 text-lg outline-none duration-200"
                                placeholder='***********'
                            />
                            <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-red-500 duration-200 peer-focus:text-[.7rem] peer-focus:text-red-500">
                                password
                            </span>
                            <RiEyeCloseLine
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className={`absolute right-4 bottom-1 ${passwordVisible ? "text-primary" : "text-gray-700"} cursor-pointer`}
                            />
                        </label>
                    </div>
                </div >
                {/* <p className='text-primary font-semibold'>Forgot password?</p> */}

                {/* <button className='bg-primary text-white w-full rounded-xl py-3'>Sign in</button> */}
                {/* </form> */}
            </CodeBlock>
        </div >
    );
};

export default Text_Input_2;