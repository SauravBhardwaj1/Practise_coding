import { useThrottle } from '../hooks/useThrottle'

const Throttle = () => {
    const clickme = ()=>{
        console.log("Network request made with throttle")
    }

    const throttle = useThrottle(clickme, 2000)
  return (
    <div>
        <button onClick={throttle}>Click me debounce</button>
    </div>
  )
}

export default Throttle