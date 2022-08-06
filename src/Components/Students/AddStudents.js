import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddStudent.module.css";
import Button from "../UI/Button";

const AddStudents = (props) => {
  const [enteredStudentFirstName, setEnteredStudentFirstName] = useState("");
  const [enteredStudentLastName, setEnteredStudentLastName] = useState("");
  const [enteredStudentAge, setEnteredStudentAge] = useState("");

  const addStudentHandler = (event) => {
    event.preventDefault();
    console.log(
      enteredStudentFirstName,
      enteredStudentLastName,
      enteredStudentAge
    );
  };

  const studentFirstNameChangeHandler = (event) => {
    setEnteredStudentFirstName(event.target.value);
  };

  const studentLastNameChangeHandler = (event) => {
    setEnteredStudentLastName(event.target.value);
  };

  const studentAgeChangeHandler = (event) => {
    setEnteredStudentAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addStudentHandler}>
        <label htmlFor="first name">First Name</label>
        <input
          id="first name"
          type="text"
          onChange={studentFirstNameChangeHandler}
        />
        <label htmlFor="last name">Last Name</label>
        <input
          id="last name"
          type="text"
          onChange={studentLastNameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={studentAgeChangeHandler} />
        <Button type="submit">Add Student</Button>
      </form>
    </Card>
  );
};

export default AddStudents;
