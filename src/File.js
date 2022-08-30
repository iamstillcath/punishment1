import React from "react";
import { useEffect, useState } from "react";
import Drop from "./Drop";
import Selecteds from "./Selecteds";

const File = () => {
  const [data, setSelect] = useState([]);
  const [output,setOutput]=useState(null);
  const [id,setId]=useState("")
  console.log("this is uut==>",output)
  useEffect(() => {
    handleSelect();
  }, []);
  const handleSelect = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
            console.log(res)
            setSelect(res)
        }
      });
  };
 


  return (
    <div>
      {/* <select placeholder="select..." onChange={value=>{setOutput((value.target.value))} } >
           {data.map((datas)=> <option key={datas.id}  value={JSON.stringify(datas)} >{datas.name}</option> 

           )}
        
      </select>
      <hr />
      <p>You have selected <strong>{output &&JSON.parse(output).name} </strong>whose id is {output &&JSON.parse(output).id}</p> */}

       <Selecteds/>

      <Drop isMulti />
    </div>

  );
};

export default File;
