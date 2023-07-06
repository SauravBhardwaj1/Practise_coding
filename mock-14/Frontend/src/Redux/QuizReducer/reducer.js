import { QUIZ_FAIL,QUIZ_REQUEST,QUIZ_SUCCESS } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    quiz:[]
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case QUIZ_REQUEST:
            return {...state,isLoading:true}
            case QUIZ_SUCCESS:
                return {...state,isLoading:false,quiz:payload}
            
                case QUIZ_FAIL:
                    return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}