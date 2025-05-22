import React from "react";
import "../globals.css";
import styles from "./styles.module.css";
import GridBoard from "./GridBoard";
import ScoreBoard from "./ScoreBoard";
export default function Page() {
  const classes = styles['color-4']
  console.log('classes ', classes);
  return (
    <div className="app">
      <div className="app-header"> REact Tetris!</div>
        <ScoreBoard/>
        <GridBoard rows={18} cols={10} class={styles['grid-board']}/>
        <GridBoard rows={4} cols={4} class={styles['next-block']}/>
    </div>
  )
}

