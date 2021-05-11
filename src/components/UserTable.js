import React from 'react';

const UserTable = ({users}) => {
    console.log(users)
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
                users.map((user, index) =>
                    <tr key={index}>
                        <td>
                            <img src={user.avatar} alt="Avatar"/>
                        </td>
                        <td> {user.name}</td>
                        <td> {user.age}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
};

export default UserTable;

