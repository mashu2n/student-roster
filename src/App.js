import React from "react";

import AddStudents from "./Components/Students/AddStudents";
import StudentsList from "./Components/Students/StudentsList";

function App() {
  return (
    <div>
      <AddStudents />
      <StudentsList students={[]} />
    </div>
  );
}

export default App;
