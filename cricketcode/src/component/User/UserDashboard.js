import React, { useState } from 'react'
import Search from './Search';

import UserList from './UserList'
import UserNavbar from './UserNavbar'

function UserDashboard() {

    const [inputText, setInputText] = useState("");

    const inputHandler = (input) => {
      setInputText(input);
    };
    return (
        <>
            <UserNavbar />
            <Search inputHandler={inputHandler}  />

            <UserList input={inputText}  />
        
        </>
    )
}

export default UserDashboard