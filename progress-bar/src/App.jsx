
// import './App.css'
import Progressbar from './component/Progressbar'

function App() {


  return (
    <>

      <div>
        <h2>Horizontal Progress Bar</h2>
          <Progressbar progress={90} direction={'horizontal'} callback={()=>console.log('Horizontal Progress completed')} />
      </div>
      <div>
        <h2>Vertical Progress Bar</h2>
        <Progressbar progress={90} direction={'vertical'} callback={()=>console.log('Vertical Progress completed')} />
      </div>

      
    </>
  )
}

export default App
