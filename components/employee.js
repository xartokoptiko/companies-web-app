import { FaPen, FaClipboardList, FaTrash, FaSitemap } from "react-icons/fa";

const Employee = () => {
  return (
    <div className="flex w-full justify-between shadow-xl rounded-2xl font-bold m-3 ">
      <p className="bg-gray-300 w-1/12 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl">
        1
      </p>

      <div className="bg-gray-200 flex w-11/12 justify-between p-3 rounded-tr-2xl rounded-br-2xl">
        <div className="flex flex-col ">
          <p className="h-2/6 text-cyan-600">Full Name</p>
          <p className="h-2/6">Proffesion</p>
        </div>

        <div className="flex flex-col">
          <p className="h-2/6">Working status</p>
          <p className="h-2/6">first email</p>
          <p className="h-2/6">first phone</p>
        </div>

        <div>
          <FaTrash className="text-red-600 flex h-2/6 " />
          <FaPen className="text-gray-600 flex h-2/6 " />
          <FaClipboardList className="text-gray-800 h-2/6 " />
        </div>
      </div>
    </div>
  );
};
export default Employee;
