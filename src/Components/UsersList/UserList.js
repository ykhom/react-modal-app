import { useState } from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.users);
  return (
    <Card className={styles.users}>
      <ul className={styles.users}>
        {props.users.map((userEl) => (
          <UserItem user={userEl} key={userEl.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
