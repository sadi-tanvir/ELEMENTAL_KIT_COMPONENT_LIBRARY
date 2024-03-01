import Button_1 from "@/app/componentResources/button/button_1";
import Button_2 from "@/app/componentResources/button/button_2";

const ButtonLayout = () => {
    return (
        <div className="max-w-[60vw] mx-auto">
            <div className=" my-12">
            <h1 className="text-3xl text-gray-600 font-bold">Buttons</h1>
            <span className="text-gray-600">Simple Clickable Buttons.</span>
            </div>

            <Button_1></Button_1>
            <Button_2></Button_2>
        </div >
    );
};

export default ButtonLayout;