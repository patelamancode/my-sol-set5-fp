import React from 'react';

//  Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.(Show only those whose attendance is greater than 90)

const students = [
  {id:1, name:"Ram", grade: "A", attendance: 99},
  {id:2, name:"Ramesh", grade: "B", attendance: 90},
  {id:3, name:"Ramu", grade: "C", attendance: 83}

]

function ClassStudents() {
  return (
    <>
     <h1 style = {{color : 'green'}}>Classroom</h1> 
     <ol>
      {students.map(el => (el.attendance >= 90) ?
      <li>{el.name} with grade {el.grade}</li> : <></>)}
     </ol>
    </>
  )
}

export default ClassStudents
