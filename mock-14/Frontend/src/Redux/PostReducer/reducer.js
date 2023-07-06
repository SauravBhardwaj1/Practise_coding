import { LOGIN_FAILUER,LOGIN_SUCCESS,LOGIN_REQUEST ,LOGIN_SUCCESS_POST} from "./actionTypes";

const initialState={
    isLoading:false,        
    isError:false,  
    token:"",     
    isAuth:false
}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case LOGIN_REQUEST:
        return {...state,isLoading:true,isAuth:false}
        case LOGIN_SUCCESS:
            return {...state,isLoading:false,isAuth:true,token:payload}
        case LOGIN_SUCCESS_POST:
            return {...state,isLoading:false,isAuth:false}
            case LOGIN_FAILUER:
                return {...state,isLoading:false,isError:true,isAuth:false}
    default:
        return state
}

}           