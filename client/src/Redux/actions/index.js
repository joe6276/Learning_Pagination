import axios from "axios"
import {USERS} from '../types'
export const getStaffs = () => async dispatch => {
    dispatch({
        type: USERS.REQUEST
    })

    try {
        const { data } = await axios.get("http://localhost:5000/staff")
      
        dispatch({
            type: USERS.SUCCESS,
            users: data,
            message:"sucessfully"
        })



    }
    catch (error) {
        console.log({ error });
        dispatch({
            type: USERS.FAIL,
            error: "an error occured"
        })

    }
}
