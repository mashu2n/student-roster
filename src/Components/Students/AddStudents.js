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
    // validation
    if (
      enteredStudentFirstName.trim().length === 0 ||
      enteredStudentLastName.trim().length === 0 ||
      enteredStudentAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredStudentAge < 1) {
      return;
    }
    console.log(
      enteredStudentFirstName,
      enteredStudentLastName,
      enteredStudentAge
    );
    // resetting
    setEnteredStudentFirstName("");
    setEnteredStudentLastName("");
    setEnteredStudentAge("");
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
          value={enteredStudentFirstName}
          onChange={studentFirstNameChangeHandler}
        />
        <label htmlFor="last name">Last Name</label>
        <input
          id="last name"
          type="text"
          value={enteredStudentLastName}
          onChange={studentLastNameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredStudentAge}
          onChange={studentAgeChangeHandler}
        />
        <Button type="submit">Add Student</Button>
      </form>
    </Card>
  );
};

export default AddStudents;
