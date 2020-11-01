
import {REGISTER_FAIL, REGISTER_SUCCESS} from "../types"

const authReducer= (state, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload

            }
            case REGISTER_FAIL:
                return{
                    ...state,
                    user:null,
                    error:action.payload
                }
                default:
                return state
        }
}
export default authReducer