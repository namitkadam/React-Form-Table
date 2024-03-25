import { useState } from "react";
import "./App.css";

import Input from "./Components/Input/InputFile";
import Button from "./Components/Button/Button";
import Table from "./Components/Table/Table";

function App() {
  const [table, setTable] = useState([]);
  const [fromDtat, setFromDtat] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
  });

  function onChangeValue(event) {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });

    setFromDtat(value);
  }
  function formSubmit(e) {
    e.preventDefault();
    const checkVal = !Object.values(fromDtat).every((res) => res === "");
    console.log(checkVal);
    if (checkVal) {
      const dataObj = (data) => [...data, fromDtat];
      setTable(dataObj);
      const isEmpty = { name: "", phone: "", email: "", age: "" };
      setFromDtat(isEmpty);
    }
    if (fromDtat.name === "" || fromDtat.email === "") {
      return checkVal;
    }
  }
  return (
    <div>
      <form className="form">
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder={"Name"}
          value={fromDtat.name}
          onChangeValue={onChangeValue}
          required="required"
        />
        <Input
          label="Phone"
          type="text"
          name="phone"
          placeholder={"Phone"}
          value={fromDtat.phone}
          required="required"
          onChangeValue={onChangeValue}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder={"Email"}
          value={fromDtat.email}
          required="required"
          onChangeValue={onChangeValue}
        />
        <Input
          label="Age"
          type="text"
          name="age"
          placeholder={"Age"}
          value={fromDtat.age}
          onChangeValue={onChangeValue}
          required="required"
        />

        <Button fromSubmit={formSubmit} />
      </form>
      <Table tableData={table} />
    </div>
  );
}

export default App;
