import { useRef } from "react"

export const useThrottle = (func, delay)=>{

    var {current: wait} = useRef(false)

    return()=>{
        if(wait)
            return func()
            wait = true
        
        setTimeout(()=>{
            wait = false
        },delay)
    }
}