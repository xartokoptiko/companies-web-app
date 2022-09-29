import { FaPen, FaClipboardList, FaTrash, FaSitemap } from "react-icons/fa";

const showEmployeeInfo = (
  setComp,
  prev,
  setEmployeePrev,
  setEmployee,
  employee
) => {
  setComp("employee");
  setEmployeePrev(prev);
  setEmployee(employee);
};

const Employee = ({
  employee,
  setComp,
  prev,
  setEmployeePrev,
  setEmployee,
}) => {
  var emails = Object.values(employee[10]);
  var phones = Object.values(employee[9]);

  return (
    <div className="flex w-full justify-between shadow-xl rounded-2xl font-bold m-3 ">
      <p className="bg-gray-300 w-1/12 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl">
        1
      </p>

      <div className="bg-gray-200 flex w-11/12 justify-between p-3 rounded-tr-2xl rounded-br-2xl">
        <div className="flex flex-col ">
          <p className="h-3/6 text-cyan-600">{employee[3]}</p>
          <p className="h-3/6">{employee[6]}</p>
        </div>

        <div className="flex flex-col">
          <p className="h-2/6">{employee[5]}</p>
          <p className="h-2/6">{emails[0].email}</p>
          <p className="h-2/6">{phones[0].number}</p>
        </div>

        <div className="flex flex-col p-1">
          <FaTrash className="text-red-600 flex h-2/6 mb-1" />
          <FaPen className="text-gray-600 flex h-2/6 mb-1" />
          <FaClipboardList
            onClick={() =>
              showEmployeeInfo(
                setComp,
                prev,
                setEmployeePrev,
                setEmployee,
                employee
              )
            }
            className="text-gray-800 h-2/6 mb-1"
          />
        </div>
      </div>
    </div>
  );
};
export default Employee;
