import "../globals.css";
import Square from "./square";

export default function GridBoard() {
  const boardArray: number[][] = []
  for(let i =0; i< 18 ; i++){
    const rowArray: number[] = []
    for(let j=0; j< 10; j++){
      rowArray.push(Math.floor(Math.random() * 11))
    }
    boardArray.push(rowArray)
  }
  return (
    <div>
      { boardArray.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-10 ">
          {row.map((square, colIndex) => (
            <Square key={colIndex} color={boardArray[rowIndex][colIndex]} />
            
          ))}
        </div>
      ))}
    </div>
  )
}