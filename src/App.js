import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState,
        {
          id: Math.random().toString(),
          name: uName,
          age: uAge
        }
      ]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
