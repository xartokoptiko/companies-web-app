import { FaUser } from "react-icons/fa";

const Account = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <p className="justify-start items-center font-bold w-full mb-3">
        Account Info
      </p>
      <div className="border-2 w-full border-gray-200 inline-block mb-2 rounded-2xl"></div>
      <div className="h-[60vh] flex justify-center items-center font-bold">
        <div className="justify-center w-fit items-center bg-gray-200 shadow-2xl rounded-2xl p-5 h-fit">
          <FaUser className="text-6xl w-full items-center mb-2 text-gray-600" />

          <div className="border-2 w-full border-gray-600 inline-block mb-2 rounded-2xl"></div>

          <div className="flex">
            <p>Username : </p>
            <p> User_name</p>
          </div>

          <div className="flex">
            <p>Role : </p>
            <p> User_role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
