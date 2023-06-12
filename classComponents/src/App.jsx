
import './App.css'
import ClassComp from './components/ClassComp'
import FunctionalComp from './components/FunctionalComp'
import StatefulComponent from './components/StatefullComp'


function App() {

  return (
    <>
      <FunctionalComp />
      <ClassComp />
      <StatefulComponent name={"saurav"} />
    </>
  )
}

export default App
