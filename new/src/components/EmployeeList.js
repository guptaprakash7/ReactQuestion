import React, { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = (props) => {
  const { empName } = props;
  const DUMMY_EMP = [
    {
      id: 1,
      name: "Emp1",
    },
    {
      id: 2,
      name: "Emp2",
    },
    {
      id: 3,
      name: "Emp3",
    },
    {
      id: 4,
      name: "Emp4",
    },
  ];

  const DUMMY_EMPFilter = DUMMY_EMP.filter((emp) => emp.name == empName);
  return (
    <div>
      {DUMMY_EMPFilter &&
        DUMMY_EMPFilter.map((emp) => (
          <EmployeeItem key={emp.id} name={emp.name}></EmployeeItem>
        ))}
    </div>
  );
};

export default EmployeeList;
