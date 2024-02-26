import Text_Input_1 from "@/app/componentResources/text-input/Text_Input_1";
import Text_Input_2 from "@/app/componentResources/text-input/Text_Input_2";

const InputLayout = () => {
    return (
        <div className="max-w-[60vw] mx-auto">
            <div className=" my-12">
            <h1 className="text-3xl text-gray-600 font-bold">Text Input</h1>
            <span className="text-gray-600">Text Input is a simple input field.</span>
            </div>
            <Text_Input_1></Text_Input_1>
            <Text_Input_2></Text_Input_2>
        </div >
    );
};

export default InputLayout;