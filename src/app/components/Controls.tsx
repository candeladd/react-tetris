'use client'
import styles from './Controls.module.css'
import { useState } from 'react'

export default function Controls(props: Readonly<{}>) {
  const [location, moveLocation] = useState(0)
  return ( 
    <div className={styles['controls-container']}>
      <button
       className={styles['controls-button']}
       onClick={() => {moveLocation(location-1)}}
      >
        Left
      </button>
      <button 
        className={styles['controls-button']}
        onClick={() => {moveLocation(location+1)}}
      >
        Right
      </button>
      <button 
        className={styles['controls-button']}
      >
        Rotate
      </button>
      <button 
        className={styles['controls-button']}
      >
        Down
      </button>
    </div>
  )
}