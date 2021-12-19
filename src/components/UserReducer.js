
const UserReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            const newUserList = state.users.map((user) => {
                if (user.id === action.id) {
                    return { ...user, enabled: !user.enabled };
                } else {
                    return user
                }
            });

            return { ...state, users: newUserList }

        case "ADD":
            return {
                users: [...state.users,
                action.user]
            };
        case "REMOVE":
            const updatedUsers = state.users.filter((user) => action.id !== user.id);
            return { ...state, users: updatedUsers }
        default:
            return state;
    }
}

export default UserReducer;