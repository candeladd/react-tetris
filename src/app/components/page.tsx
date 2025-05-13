import React from "react";
import "../globals.css";
import styles from "./styles.module.css";
import Square from "./square";
export default function Page() {
  const classes = styles['color-0']
  console.log('classes ', classes);
  return (
    <div>
    <h1 className={classes}>Hello Next.js!</h1>
    <Square color={0} />
    </div>
  )
}

