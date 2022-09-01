import React from "react";
import { useEffect, useState } from "react";
// import Drop from "./Drop";
// import Selecteds from "./Selecteds";
import Select from "react-select";

const File = () => {
  const [option, setSelect] = useState([]);
  const [label, setLabel] = useState(null);
  const [id, setId] = useState(null);

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
          setSelect(res);
        }
      });
  };

  const options = option.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const selectedValue = (selectedOption) => {
    setLabel(selectedOption);
  };
  const selectedInput = (selectedOption) => {
    setId(selectedOption);
  };

  return (
    <div>
      <Select options={options} onChange={selectedValue} />

      <p>
        you have <strong>{label && label.label}</strong> whose id is{" "}
        <strong>{label && label.value}</strong>{" "}
      </p>

      <Select options={options} onChange={selectedInput} isMulti />
      <strong>{id&& id.map((id)=>id.label)}</strong>
    </div>
  );
};
export default File;

{
  /* <p>
        you have <strong>{id && id.label}</strong> whose id is{" "}
        <strong>{id && id.value}</strong>{" "}
      </p> 
      <Selecteds/>

       <Drop isMulti /> */
}

// <select placeholder="select..." onChange={value=>{setOutput((value.target.value))} } >
// {data.map((datas)=> <option key={datas.id}  value={JSON.stringify(datas)} >{datas.name}</option>

// )}

// </select>
// <hr />
// <p>You have selected <strong>{output &&JSON.parse(output).name} </strong>whose id is {output &&JSON.parse(output).id}</p>
