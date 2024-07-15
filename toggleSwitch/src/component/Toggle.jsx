import React, { useEffect, useState } from 'react'
import './Toggle.css'

const ToggleSwitch = ({initialState, label, callback}) => {

    const [isOn, setIsOn] = useState(initialState);

    const handleToggle = ()=>{
       setIsOn(!isOn)
       callback(!isOn)
    }

  return (
    <div className='toggle'>
        <label className='label'>{label}</label>
        <button className={`switch ${isOn ? 'on':'off'}`} onClick={handleToggle}>Toggle switch</button>
    </div>
  )
}

export default ToggleSwitch