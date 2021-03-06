import React from 'react';

const UserTable = ({users, deleteUser, editUser}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                users.length > 0 ?
                    users.map((user) =>
                        <tr key={user.id}>
                            <td>
                                <img src={user.avatar} alt="Avatar"/>
                            </td>
                            <td> {user.name}</td>
                            <td> {user.age}</td>
                            <td>
                                <button className="button muted-button"
                                        onClick={() => editUser(user)}>
                                    Edit
                                </button>
                                {/*Cuidado!! Es importante pasar la función delete user como función de flecha porque si
                                no, se ejecuta de inmediato y se borran todos los usuarios al inicio*/}
                                <button className="button muted-button"
                                        onClick={() => deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ) :
                    <tr>
                        <td colSpan={3}> No users</td>
                    </tr>
            }
            </tbody>
        </table>
    );
};

export default UserTable;

