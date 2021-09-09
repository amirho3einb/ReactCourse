import React, { Component, useState } from 'react';
const HookObject = () => {
    const[user, setUser] = useState({
        firstName : "",
        lastName : "",
    });
    const firstNameHandler = (e) =>{
        setUser({ ...user, firstName: e.target.value });
    }
    const lastNameHandler = (e) =>{
        setUser({ ...user, lastName: e.target.value });
    }
    return ( 
        <div>
            <input type="text" value={user.firstName} onChange={firstNameHandler}/>
            <input type="text" value={user.lastName} onChange={lastNameHandler}/>
            <div>FirstName: {user.firstName} -- lastName: {user.lastName}</div>
        </div>
    );
}
 
export default HookObject;