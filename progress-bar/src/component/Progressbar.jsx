import { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Progress.css'

const Progressbar = ({progress, direction, callback}) => {

    useEffect(()=>{
        if(progress >= 100){
            callback()
        }
    },[progress, callback])

    const progressStyle = {
        width: direction === 'horizontal' ? `${progress}%` : '100%',
        height: direction === 'vertical' ? `${progress}%` : '100%'
    }

  return (
    <div className={`progress-bar-container ${direction}`}>
        <div className='progress-bar' style={progressStyle}></div>
    </div>
  )
}

Progressbar.propTypes ={
    progress : PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    callback : PropTypes.func.isRequired
}   

export default Progressbar