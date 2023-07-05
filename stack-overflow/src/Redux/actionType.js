import axios from "axios"
import { BaseUrl } from "../Assest/BaseUrl"

export const loginRequest = "LOGIN_REQUEST"
export const loginSucess =  "LOGIN_SUCCESS"
export const loginFaliure = "LOGIN_FALIURE"




export const getLogin = (dispatch) =>{
    dispatch(loginRequest)
   return axios.get(`${BaseUrl}/users`)
}