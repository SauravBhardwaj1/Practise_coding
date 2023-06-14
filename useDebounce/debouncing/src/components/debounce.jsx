
import { useDebounce } from '../hooks/useDebounce'

const Debounce = () => {

    const clickme = ()=>{
        console.log("Network request made")
    }

    const debounce = useDebounce(clickme,2000)
  return (
    <div>
        <button onClick={debounce}>Click me with debounce</button>
    </div>
  )
}

export default Debounce