import { useCallback } from "react";
import { useState } from "react";


const SelectableGrid = ({rows, columns}) => {

    const [isMouseDown, setIsMouseDown]= useState(false);
    const [selectedBox, setSelectedBox]= useState([]);

    const handleMouseUp = ()=>{
        setIsMouseDown(false)
    }

    const handleMouseDown = (boxNumber)=>{
        setIsMouseDown(true)
        setSelectedBox([boxNumber])
    }

    const handleMouseEnter = useCallback((boxNumber)=>{

        if(isMouseDown){
            const startBox = selectedBox[0]
            const endBox = boxNumber

            const startRow = Math.floor((startBox-1) / columns) // Math.floor(45-1)/10
            const startCol = (startBox-1) % columns
            const endRow = Math.floor((endBox-1) / columns) 
            const endCol = (endBox-1) % columns

            const minRow = Math.min(startRow, endRow)
            const maxRow = Math.max(startRow, endRow)
            const minCol = Math.min(startCol, endCol)
            const maxCol = Math.max(startCol, endCol)

            const selected = []

            for(let row = minRow; row<= maxRow; row++) {
                for(let col = minCol; col<= maxCol; col++) {
                    selected.push(row*columns+col+1)

                }
            }

            console.log(selected);
            setSelectedBox(selected)
        }
    },[isMouseDown])

  return (
    <div className="grid" style={{"--rows":rows, "--cols": columns}} onMouseUp={handleMouseUp}>
        {[...Array(rows * columns).keys().map((_,index)=>(
             <div className={`box ${selectedBox.includes(index+1)? "selected":""}`}
                  key={index}
                  onMouseDown={()=>handleMouseDown(index+1)}
                  onMouseEnter={()=>handleMouseEnter(index+1)}
                >
                {index + 1}
            </div>
        ))]}
    </div>
  )
}

export default SelectableGrid