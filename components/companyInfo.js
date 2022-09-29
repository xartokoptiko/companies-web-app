import Employee from "./employee";
import Info from "./info";
import { FaArrowLeft } from "react-icons/fa";

const backToCompanies = (setComp) => {
  setComp("companies");
};

const CompanyInfo = ({ company, setComp, setEmployeePrev, setEmployee }) => {
  console.log(company);
  var locations = Object.values(company[7]);
  var emails = Object.values(company[9]);
  var phones = Object.values(company[8]);
  var employees = Object.values(company[6]);

  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex justify-start items-center mb-5">
        <FaArrowLeft
          onClick={() => backToCompanies(setComp)}
          className="text-3xl"
        />
        <p className="font-bold text-2xl ml-4">{company[2]}</p>
      </div>
      <div className="border-2 w-full border-gray-200 inline-block mb-2 rounded-2xl"></div>

      <div className="w-full p-5 justify-center items-start flex flex-col">
        <div className="flex bg-gray-300 rounded-xl  shadow-xl mb-4">
          <p className="rounded-tl-xl rounded-bl-xl bg-gray-200 p-2">Owner</p>
          <p className="p-2 justify-center">{company[1]}</p>
        </div>

        <div className="flex bg-gray-300 mb-2 rounded-xl  shadow-xl">
          <p className="rounded-tl-xl rounded-bl-xl bg-gray-200 p-2">Site</p>
          <p className="p-2 justify-center">{company[3]}</p>
        </div>
      </div>

      <div className="w-full flex justify-between p-5">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Phones</p>
          {/*Phones division number [8]*/}
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            {phones.map((phone, idx) => (
              <Info info={phone.number} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Locations</p>
          {/*Locations division number [7]*/}
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            {locations.map((location, idx) => (
              <Info info={location.address} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Emails</p>
          {/*emails division number [9]*/}
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            {emails.map((email, idx) => (
              <Info info={email.email} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full p-5 justify-center items-center flex flex-col">
        <p className="mb-5">Employees</p>
        {employees.map((employee, idx) => (
          <Employee
            setComp={setComp}
            prev={"company"}
            setEmployee={setEmployee}
            setEmployeePrev={setEmployeePrev}
            employee={Object.values(employee)}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
export default CompanyInfo;
