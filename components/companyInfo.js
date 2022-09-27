import Employee from "./employee";
import Info from "./info";

const CompanyInfo = () => {
  return (
    <div className="flex flex-col w-full p-5">
      <p className="justify-start items-start font-bold mb-5">Company Name</p>
      <div className="border-2 w-full border-gray-200 inline-block mb-2 rounded-2xl"></div>

      <div className="w-full flex justify-between p-5">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Phones</p>
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Locations</p>
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="mb-5">Emails</p>
          <div className="h-56 w-56 bg-gray-200 rounded-2xl shadow-1xl flex flex-col overflow-y-scroll p-3 shadow-lg">
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
            <Info/>
          </div>
        </div>
      </div>

      <div className="w-full p-5 justify-center items-center flex flex-col">
        <p className="mb-5">Employees</p>

        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
      </div>
    </div>
  );
};
export default CompanyInfo;
