import { GET_USERS } from '../constants/action-types';

const initialState = {
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state };
        default:
            return state;
    }
}
export default rootReducer;