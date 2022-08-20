import { useState } from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modals/Modal";
import Button from "../UI/Buttons/Button";
import styles from "./NewUserForm.module.css"

const NewUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length && enteredAge.trim().length && +enteredAge > 1) {
      props.onAddUser({
        name: enteredName, 
        age: enteredAge,
        id: Math.random(),
      });
      setEnteredName('');
      setEnteredAge('');
    } else {
      setOpenModal(true);
    }
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitFormHandler}>
        {openModal && <Modal setOpenModal={setOpenModal} title='Invalid data' message='Please enter valid name and age (cannot be empty)'/>}
        <div>
          <label className={styles.input} htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //className={styles.input}
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          min="10"
          step="1"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
