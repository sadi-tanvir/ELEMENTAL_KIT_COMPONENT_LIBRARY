import Form_1 from "@/app/componentResources/forms/Form_1";

const FormsLayout = () => {
    return (
        <div className="max-w-[80vw] mx-auto px-10">
            <div className=" my-12">
                <h1 className="text-3xl text-gray-600 font-bold">User Authentication Forms</h1>
                <span className="text-gray-600">Explore our collection of simple login, register, and other user authentication forms.</span>
            </div>

            <Form_1></Form_1>
        </div >
    );
};

export default FormsLayout;