import React from "react";

import Card from "../UI/Card";
import classes from "./StudentsList.module.css";

// outputting students data
const StudentsList = (props) => {
  return (
    <Card className={classes.students}>
      <ul>
        {props.students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} ({student.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default StudentsList;
