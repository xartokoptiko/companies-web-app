import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Company from "../components/company";
import RefreshToken from "../lib/refreshToken";

const getAllCompanies = (token, page, size) => {
  const http = require("http");

  const options = {
    method: "GET",
    hostname: "localhost",
    port: "8080",
    path: "/company?page="+page+"&size="+size,
    headers: {
      "Content-Length": "0",
      Authorization:
        "Bearer " + token ,
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
        if(res.statusCode == 200){
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        }else{
            RefreshToken()
        }
      
    });
  });

  req.end();
};

const Companies = ({token}) => {
    const router = useRouter()

    useEffect(()=>{
        if(token == "null" || token == null){
            router.push("/")
        }
    })

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="flex flex-row justify-center items-center mb-5">
        <div className=" flex justify-center items-center mr-9">
          <p className="font-bold mr-3">Search company by name </p>
          <div className=" p-3 bg-gray-200 flex rounded-2xl items-center ">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              name="name"
              type="text"
              placeholder="ex. Novidea"
              className=" bg-gray-200 
                            outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-200 rounded-full p-3">
          <p className="mr-3 font-bold">&lt; </p>
          <p>1</p>
          <p className="font-bold ml-3"> &gt;</p>
        </div>
      </div>

      <div className="border-2 w-full border-gray-200 inline-block mb-2 rounded-2xl"></div>

      {getAllCompanies(token, 0, 3)}

      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
    </div>
  );
};

export default Companies;
