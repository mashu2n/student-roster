import React, { useState } from "react";

import Wrapper from "./Components/Helper/Wrapper";
import AddStudents from "./Components/Students/AddStudents";
import StudentsList from "./Components/Students/StudentsList";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  const addStudentHandler = (studentFirstName, studentLastName, studentAge) => {
    setStudentsList((prevStudentsList) => {
      return [
        ...prevStudentsList,
        {
          firstName: studentFirstName,
          lastName: studentLastName,
          age: studentAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Wrapper>
      <AddStudents onAddStudent={addStudentHandler} />
      <StudentsList students={studentsList} />
    </Wrapper>
  );
}

export default App;
