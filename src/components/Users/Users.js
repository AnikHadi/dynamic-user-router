import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => setUsers(data.results));
    } , [])

    const userDetailsHandler = uuid => {
        return uuid;
    }


    return (
        <div>
            <h2>Total user: {users.length}</h2>
            <div className='user-parent'>
                {
                    users.map(user => <User 
                        user={user} 
                        key={user.login.uuid}
                        userDetailsHandler={userDetailsHandler}
                        ></User>)
                }
            </div>
        </div>
    );
};

export default Users;