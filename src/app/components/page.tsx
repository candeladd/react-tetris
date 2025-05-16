import React from "react";
import "../globals.css";
import styles from "./styles.module.css";
import GridBoard from "./GridBoard";

export default function Page() {
  const classes = styles['color-4']
  console.log('classes ', classes);
  return (
    <div>
    <h1 className={classes}>Tetris React!</h1>
    <GridBoard rows={4} cols={4} class={styles['next-block']}/>
    <div style={{height: "10px"}}></div>
    <GridBoard rows={18} cols={10} class={styles['grid-board']}/>
    </div>
  )
}

