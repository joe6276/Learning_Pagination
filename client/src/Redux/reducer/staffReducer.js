import {USERS} from '../types'
const initialState = {
    users:{},
    error: "",
    message: ""
}
const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS.REQUEST:
            return { ...state, loading: true, error: "", users: [], message: "" }
        case USERS.SUCCESS:
            return { ...state, loading: false, error: "", users: action.users, message:action.message }
        case USERS.FAIL:
            return { ...state, loading: false, error: action.error, users: []}
        
        default:
                return { ...state };

    }

}

export default staffReducer;