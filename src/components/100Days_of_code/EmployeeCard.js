import React from 'react'

const EmployeeCard = ({employeesDetails}) => {
    const whoIsLevel2 = (level) => {if(level===2) return "red"};
    const borderForPresident = (designation) => {if(designation==="President") return "solid 2px black"};
    
  return (
    <div>
      <h1>Employee Details</h1>
      {employeesDetails.map(({ name, level, dept, designation, salary }) =>
        <li style={{color: whoIsLevel2(level), border: borderForPresident(designation)}}>name: {name} , Level: {level}, Department: {dept}, Designation: {designation} & Salary: {salary}</li> )}
        <h3>Total company expense for salary: {employeesDetails.reduce((acc, {salary}) => acc+salary ,0)}</h3>
    </div>
  )
}

export default EmployeeCard;
