import Input_1 from "@/app/componentResources/inputs/Input_1";

const InputLayout = () => {
    return (
        <div className="max-w-[60vw] mx-auto">
            <div className=" my-12">
            <h1 className="text-3xl text-gray-700 font-bold">Text Input</h1>
            <span className="text-gray-600">Text Input is a simple input field.</span>
            </div>
            <Input_1></Input_1>
        </div >
    );
};

export default InputLayout;