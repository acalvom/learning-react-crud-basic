import React, {useState} from "react";
import UserTable from "./components/UserTable";

function App() {

    const usersData = [
        {id: 1, name: 'Paula', age: 22, avatar: 'https://via.placeholder.com/48'},
        {id: 2, name: 'Jose', age: 35, avatar: 'https://via.placeholder.com/48'},
        {id: 3, name: 'Andrea', age: 25, avatar: 'https://via.placeholder.com/48'}
    ]

    // Como queremos que la tabla tenga valores ya por defecto, necesito añadirlo al estado inicial
    const [users, setUsers] = useState(usersData)

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add user</h2>
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users}/>
                </div>
            </div>
        </div>
    );
}

export default App;
