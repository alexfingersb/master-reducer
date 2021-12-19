import React, { useReducer } from 'react';
import UserReducer from './UserReducer'

const initialUsers = {
    users: [
        { id: 1, name: "Alexandre", enabled: true },
        { id: 2, name: "Steve Jobs", enabled: false },
        { id: 3, name: "Bill Gates", enabled: true }
    ]
}

const User = () => {
    const [userState, dispatch] = useReducer(UserReducer, initialUsers);

    const handleEnabled = (user) => {
        dispatch({ type: "TOGGLE", id: user.id });
    }

    const handleAddUser = () => {
        const newUser = {
            id: userState.users.length + 1,
            name: "Elon Musk",
            enabled: true
        };

        dispatch({ type: "ADD", user: newUser });
    }

    const handleRemoveUser = (user) => {
        dispatch({ type: "REMOVE", id: user.id})
    }

    return (
        <>
            <button onClick={handleAddUser}>ADD USER</button>
            {
                userState.users.map((user) => (
                    <div key={user.id}>
                        <label>
                            <input type="checkbox"
                                checked={user.enabled}
                                onChange={() => handleEnabled(user)}
                            />
                            {user.id} {' '} {user.name}
                            <button onClick={() => handleRemoveUser(user)}>Remove</button>
                        </label>
                    </div>
                ))
            }
        </>
    );
};

export default User;