import { loginFaliure, loginRequest, loginSucess, postRegisterRequest, postRegisterSucess } from "../actionType"


const initialState = {
    isAuth:false,
    credential:[]
}


 export const loginReducer = (state=initialState,{type,payload}) =>{
   switch (type) {
      case loginRequest:{
        return {...state,isAuth:false}
      }
      case loginSucess:{
        return {...state,isAuth:true}
      }
      case loginFaliure:{
        return  {...state,isAuth:false}
      }
      default: {
        return state
      }
   } 
}
