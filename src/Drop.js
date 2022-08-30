import React from "react";
import Select from "react-select";
import { useState } from "react";
const Drop = () => {
  const [id, setId] = useState([]);

  const options = [
    { value: 1, label: "Leanne Graham" },
    { value: 2, label: "Ervin Howell" },
    { value: 3, label: "Clementine Bauch" },
    { value: 4, label: "Patricia Lebsack" },
    { value: 5, label: "Chelsey Dietrich" },
    { value: 6, label: "Mrs. Dennis Schulist" },
    { value: 7, label: "Kurtis Weissnat" },
    { value: 8, label: "Nicholas Runolfsdottir V" },
    { value: 9, label: "Glenna Reichert" },
    { value: 10, label: "Clementina DuBuque" },
  ];

  const handleSelect = (selectedOption) => {
  
    setId(selectedOption);
    console.log("this is selected==>",selectedOption)
  };

  return (
    <div>
      <Select options={options} onChange={handleSelect} isMulti/>

    <strong>{id.map((id)=>id.label)}</strong> 
    </div>
  );
};

export default Drop;
