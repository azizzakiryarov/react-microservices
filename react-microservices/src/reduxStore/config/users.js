const initialState = {
    users: [],
};

// ACTIONS
const ADD_USER = 'ADD_USER';

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return [...state, action.data];
        }
        default:
            return state;
    }
};

// ACTION CREATORS
const internalAddUsers = (firstName, lastName, userName, password) => ({
    type: ADD_USER,
    data: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
    },
});

const addUsers = (firstName, lastName, userName, password) => (dispatch) => {
    dispatch(internalAddUsers((firstName, lastName, userName, password)));
};

export { addUsers };
export default reducer;