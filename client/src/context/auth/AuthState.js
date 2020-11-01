import React , {useReducer} from "react"
import axios from "axios"
import AuthContext from "./AuthContext"
import authReducer from "./AuthReducer"
import {REGISTER_FAIL, REGISTER_SUCCESS} from "../types"

const AuthState = (props) => {
    const initialState= {
        user:null,
        error:null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    //Register User
    const register= async(formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const res= await axios.post ("api/auth/register", formData, config)
            dispatch({
                type:REGISTER_SUCCESS,
                payload: res.data
            })
        }catch(err){
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }
    return (
        <AuthContext.Provider value={{user:state.user, error:state.error, register}}>
         {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState