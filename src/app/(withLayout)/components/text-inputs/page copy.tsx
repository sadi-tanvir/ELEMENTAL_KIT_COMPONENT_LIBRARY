'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // or any other style you prefer

const Components = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accordions = [{ title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.', }, { title: "What is your return policy?", description: "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.", }, { title: "Can I change my shipping address?", description: "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", },];
    const toggle = (idx: any) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    const codeString = `
        <div className="relative w-full h-11 rounded-md bg-white border shadow">
            <p className="px-2 absolute top-2 left-0"><CiSearch className="text-2xl text-gray-600" /></p>
            <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
        </div>
    `;


    return (
        <div>
            <SyntaxHighlighter language="jsx" style={darcula}>
                {codeString}
            </SyntaxHighlighter>
            <div className={`relative w-full h-11 rounded-md bg-white border shadow`}>
                <p className="px-2 absolute top-2 left-0"><CiSearch className="text-2xl text-gray-600" /></p>
                <input className="w-full h-full rounded-md pl-10 pr-2" placeholder="Quick search" type="text" />
            </div>
        </div >
    );
};

export default Components;