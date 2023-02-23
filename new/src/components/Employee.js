import React, { useRef, useState } from "react";
import EmployeeList from "./EmployeeList";

const Employee = () => {
  const selectRef = useRef();
  const [empName, setEmpName] = useState(0);

  const selectEmployeeHandler = (e) => {
    debugger;
    setEmpName(e.target.value);
  };
  return (
    <React.Fragment>
      <select onChange={selectEmployeeHandler}>
        <option id="1">Emp1</option>
        <option id="2">Emp2</option>
        <option id="3">Emp3</option>
        <option id="4">Emp4</option>
      </select>
      <EmployeeList empName={empName}></EmployeeList>
    </React.Fragment>
  );
};

export default Employee;
