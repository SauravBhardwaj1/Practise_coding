import {useRef} from "react"

export const useDebounce = (func, delay)=>{
    var {current:id} =  useRef()

    return ()=>{
        id && clearInterval(id)

        id = setTimeout(()=>{
            func()
        },delay)
    }
}