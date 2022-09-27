import { FaPencilRuler } from "react-icons/fa";

const UnderDevelopment = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center" >

            <div className="justify-center items-center flex flex-col">
                <FaPencilRuler className="text-[120px] text-gray-600 mb-5"/>
                <p className="text-5xl font-bold">Under Development</p>

            </div>

        </div>
    );
};
export default UnderDevelopment;