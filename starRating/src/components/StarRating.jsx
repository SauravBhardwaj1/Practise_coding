import { useState } from "react";
import './StarRating.css'


const StarRating = ({maxStars, initialStars, callback}) => {

  const [rating, setRating] = useState(initialStars)

  const handleSubmit = (index)=>{
    const newRating = index + 1
    setRating(newRating)
    callback(newRating)
  }
  return (
    <div className="star-rating">
      {Array.from({length: maxStars}, (_, index)=>(
        <span
          key={index}
          className={`star ${index < rating ? 'selected': ''}`}
          onClick={()=> handleSubmit(index)}
        >
          *
        </span>
      ))}
    </div>
  )
}

export default StarRating