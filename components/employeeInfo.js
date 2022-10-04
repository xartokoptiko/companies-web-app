import Employee from "./employee";
import Info from "./info";
import { FaArrowLeft } from "react-icons/fa";

const back = (setComp, setCompanyData, prev, company) => {
  if(prev === "company"){
    setComp("company")
    setCompanyData(company)
  }else if(prev === "employees"){
    setComp("employees")
  }else{
    setComp("dev")
  }
}

const EmployeeInfo = ({ employee, setComp, setCompanyData, prev, company }) => {
  console.log(company);
  var emails = Object.values(employee[10]);
  var phones = Object.values(employee[9]);

  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex justify-start items-center mb-5">
        <FaArrowLeft
          onClick={() => back(setComp,setCompanyData, prev, company)}
          className="text-3xl"
        />
        <p className="font-bold text-2xl ml-4">{employee[3]}</p>
      </div>
      <div className="border-2 w-full border-gray-200 inline-block mb-2 rounded-2xl"></div>

      <div className="w-full p-5 justify-center items-start flex flex-col">
        <div className="flex bg-gray-300 rounded-xl  shadow-xl mb-4">
          <p className="rounded-tl-xl rounded-bl-xl bg-gray-200 p-2">Proffesion</p>
          <p className="p-2 justify-center">{employee[6]}</p>
        </div>

        <div className="flex bg-gray-300 mb-2 rounded-xl  shadow-xl">
          <p className="rounded-tl-xl rounded-bl-xl bg-gray-200 p-2">Working Status</p>
          <p className="p-2 justify-center">{employee[5]}</p>
        </div>
      </div>

      <div className="w-full flex  p-5">
        <div className="flex flex-col w-1/2 justify-center items-center mr-3">
          <p className="mb-5">Phones</p>
          {/*Phones division number [8]*/}
          <div className="h-56 w-full bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            {phones.map((phone, idx) => (
              <Info info={phone.number} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">
          <p className="mb-5">Emails</p>
          {/*emails division number [9]*/}
          <div className="h-56 w-full bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            {emails.map((email, idx) => (
              <Info info={email.email} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeInfo;