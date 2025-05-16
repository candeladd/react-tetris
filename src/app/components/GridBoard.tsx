import "../globals.css";
import Square from "./square";
import styles from "./styles.module.css";

interface gridBoardProps {
  rows: number ;
  cols: number ;
  class: string;
}

export default function GridBoard(props: gridBoardProps) {
  const boardArray: React.ReactNode[][] = []
  for(let row =0; row< props.rows ; row++){
    const rowArray: React.ReactNode[] = []
    for(let col=0; col< props.cols; col++){
      rowArray.push(<Square key={`${row}${col}`} color={Math.floor(Math.random() * 8)}/>)
    }
    boardArray.push(rowArray)
  }
  const gridClass = styles['grid-board']
  return (
    <div className={props.class}>
      { boardArray}
    </div>
  )
}