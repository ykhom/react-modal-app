import { useState } from 'react';
import UserList from './Components/UsersList/UserList';
import logo from './logo.svg';
import NewUserForm from './Components/NewUser/NewUserForm';




function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newUser) => {
    const newUserList = [newUser, ...userList];
    setUserList(newUserList);
  }

  return (
    <div className="App">
      <NewUserForm onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
