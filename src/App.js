import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";

function App() {
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
}

export default App;
