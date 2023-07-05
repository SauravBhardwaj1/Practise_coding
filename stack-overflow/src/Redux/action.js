import { postRegisterRequest, postRegisterSucess, postRegisterFaliure, loginRequest, loginSucess, loginFaliure } from "./actionType"



export const loginRequestObj = ()=>{
    return {type:loginRequest}
}

export const loginSuccessObj = (payload)=>{
    return {type:loginSucess,payload}
}

export const loginFaliureObj = ()=>{
    return {type:loginFaliure}
}