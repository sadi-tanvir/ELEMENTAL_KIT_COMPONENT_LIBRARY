'use client'
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegPaste } from "react-icons/fa6";

const CodeBlock = ({ wrapLines = true, codeString, children }: { wrapLines?: boolean; codeString: any, children: any }) => {
    const [copy, setCopy] = useState(false);
    const [showCode, setShowCode] = useState(false)

    // copy code
    const copyCode = () => {
        navigator.clipboard.writeText(codeString);
        setCopy(true);
    };

    // manage setTimeOut
    useEffect(() => {
        let timeOutId: NodeJS.Timeout;
        if (copy) {
            timeOutId = setTimeout(() => {
                setCopy(false);
            }, 2000)
        }
        return () => clearTimeout(timeOutId);
    }, [copy])

    return (
        <>
            <div className="mx-auto border-2 border-gray-200 shadow rounded-2xl px-8 pb-8">
                <div className="flex py-1 bg-[#fdcfd9] w-fit rounded-full px-2 my-3 shadow after:border-b-2">
                    <button onClick={() => setShowCode(false)} className={`px-7 py-2 rounded-full ${!showCode ? "bg-[#ef5777] shadow text-white" : "text-gray-600"} `}>Preview</button>
                    <button onClick={() => setShowCode(true)} className={`px-10 py-2 rounded-full ${showCode ? "bg-[#ef5777] shadow text-white" : "text-gray-600"} `}>JSX</button>
                </div>

                <div className="border-t pt-10">
                    {
                        showCode ?
                            // code block
                            <div className="bg-[#282c34]  rounded-3xl p-4">
                                <div className="flex justify-between py-2 px-3">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    {
                                        copy ?
                                            <button className="text-white uppercase">
                                                copied
                                            </button> :
                                            <button title="copy" onClick={copyCode} className="text-white">
                                                <FaRegPaste className="text-xl" />
                                            </button>
                                    }
                                </div>
                                <SyntaxHighlighter language="jsx" style={vscDarkPlus} customStyle={{ padding: '20px'}} wrapLongLines={wrapLines}>
                                    {codeString}
                                </SyntaxHighlighter>
                            </div>
                            :
                            // preview design
                            children
                    }
                </div>
            </div>
        </>
    );
};

export default CodeBlock;