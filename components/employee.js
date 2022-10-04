import { FaPen, FaClipboardList, FaTrash, FaSitemap } from "react-icons/fa";
import Cookies from "universal-cookie";

async function deleteEmployee(employee_id){
  const cookies = new Cookies();
  const token = cookies.get("Token_cookie");

  let url = "http://localhost:8080/employee/" + employee_id;

  let options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer " + token, 
    },
  };

  const response = await fetch(url, options)
  const status = response.status
  if(status === 200){
    alert("Employee deleted succesfully")
  }else if(status === 404){
    alert("Employee with id["+employee_id+"] wasnt found")
  }else{
    alert("an error occured....")
  }
};

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
          <FaTrash onClick={() => {deleteEmployee(employee[0])}} className="text-red-600 flex h-2/6 mb-1" />
          <FaPen
            onClick={() => {
              setComp("dev");
            }}
            className="text-gray-600 flex h-2/6 mb-1"
          />
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
