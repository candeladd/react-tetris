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
    <GridBoard />
    </div>
  )
}

