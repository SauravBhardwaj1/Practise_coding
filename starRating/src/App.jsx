import StarRating from "./components/StarRating"

function App() {

  return (
    <>
     <StarRating maxStars={5} initialStars={3} callback={(rating)=>console.log(`New rating is ${rating}`)} />
    </>
  )
}

export default App
