import "../globals.css";
import Square from "./square";
import styles from "./styles.module.css";

export default function GridBoard() {
  const boardArray: React.ReactNode[][] = []
  for(let row =0; row< 18 ; row++){
    const rowArray: React.ReactNode[] = []
    for(let col=0; col< 10; col++){
      rowArray.push(<Square key={`${row}${col}`} color={Math.floor(Math.random() * 8)}/>)
    }
    boardArray.push(rowArray)
  }
  const gridClass = styles['grid-board']
  return (
    <div className={gridClass}>
      { boardArray}
    </div>
  )
}