import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

function App() {

    const usersData = [
        {id: uuidv4(), name: 'Paula', age: 22, avatar: 'https://via.placeholder.com/48'},
        {id: uuidv4(), name: 'Jose', age: 35, avatar: 'https://via.placeholder.com/48'},
        {id: uuidv4(), name: 'Andrea', age: 25, avatar: 'https://via.placeholder.com/48'}
    ]

    // Como queremos que la tabla tenga valores ya por defecto, necesito añadirlo al estado inicial
    const [users, setUsers] = useState(usersData)

    const addUser = (newUser) => { // Como en las listas
        newUser.id = uuidv4();
        setUsers([
            ...users,
            newUser
        ])
    }

    const deleteUser = (id) => {
        let remainUsers = users.filter(usr => usr.id !== id);
        setUsers(remainUsers);
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add user</h2>
                    {/*Los componentes pueden enviar funciones en sus props, pero no deben llevar los paréntesis*/}
                    <UserForm addUser={addUser}/>
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    );
}

export default App;
