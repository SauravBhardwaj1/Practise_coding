
import ToggleSwitch from './component/Toggle'

function App() {

  return (
    <>
      <div>
        <h2>Toggle Switch</h2>
        <ToggleSwitch initialState={false} label={'Switch 1'} callback={(state)=> console.log(`Switch 1 is now ${state ? 'ON' : 'OFF'}`)} />

        <ToggleSwitch initialState={true} label={'Switch 2'} callback={(state)=> console.log(`Switch 1 is now ${state ? 'ON' : 'OFF'}`)} />
      </div>
    </>
  )
}

export default App
