export const SET_USER_INFO = 'SET_USER_DATA';

const authReducer = (state,action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
                user: {
                    name: action.payload.name,
                }
            }
        }
        default:
            return state;
    }
};

export default authReducer;
