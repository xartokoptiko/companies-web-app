import { FaPen, FaClipboardList, FaTrash, FaSitemap } from "react-icons/fa";
import Cookies from "universal-cookie";

async function deleteCompany(company_id){
  const cookies = new Cookies();
  const token = cookies.get("Token_cookie");

  let url = "http://localhost:8080/company/" + company_id;

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
    alert("Company deleted succesfully")
  }else if(status === 404){
    alert("Company with id["+employee_id+"] wasnt found")
  }else{
    alert("an error occured....")
  }
};

const showCompanyInfo = (setComp, setData, company) =>{
  setComp("company")
  setData(company)
}

const Company = ({company, setComp, setData}) => {
  console.log("FROM COMPANY"+ company)
  var locations = Object.values(company[7])
  var emails = Object.values(company[9])
  var phones = Object.values(company[8])

  return (
    <div className="flex w-full justify-between shadow-xl rounded-2xl font-bold m-3 ">
      <p className="bg-gray-300 w-1/12 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl">1</p>

      <div className="bg-gray-200 flex w-11/12 justify-between p-3 rounded-tr-2xl rounded-br-2xl">
        <div className="flex flex-col ">
          <p className="h-2/6 text-cyan-600">{company[2]}</p>
          <p className="h-2/6">{company[1]}</p>
          <p className="h-2/6">{company[3]}</p>
        </div>

        <div className="flex flex-col">
          <p className="h-2/6">{locations[0].address}</p>
          <p className="h-2/6">{emails[0].email}</p>
          <p className="h-2/6">{phones[0].number}</p>
        </div>

        <div>
          <FaTrash onClick={() => {deleteCompany(company[0])}} className="text-red-600 flex h-2/6 " />
          <FaPen onClick={() => {setComp("dev")}} className="text-gray-600 flex h-2/6 " />
          <FaClipboardList onClick={() => showCompanyInfo(setComp, setData, company)} className="text-gray-800 h-2/6 " />
        </div>
      </div>
    </div>
  );
};

export default Company;
