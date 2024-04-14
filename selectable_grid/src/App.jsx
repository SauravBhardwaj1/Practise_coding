
import './App.css'
import SelectableGrid from './components/SelectableGrid'

function App() {


  return (
    <>
      
        <div>
          <h1>Selectable Grid app</h1>
          <SelectableGrid rows={10} columns={10} />
        </div>
    </>
  )
}

export default App
