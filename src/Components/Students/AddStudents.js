import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddStudents.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

//fetching students data
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
    props.onAddStudent(
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
    <div>
      {<ErrorModal title="An error occured." message="Something went wrong." />}
      <Card className={classes.input}>
        <form onSubmit={addStudentHandler}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={enteredStudentFirstName}
            onChange={studentFirstNameChangeHandler}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
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
    </div>
  );
};

export default AddStudents;
