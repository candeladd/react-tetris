//import styles from './ScoreBoard.module.css';
'use client'
import React from 'react';
import { useState } from 'react';
import styles from './ScoreBoard.module.css';

export default function ScoreBoard() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(1000);
//className={styles['score-board']}
  return (
    <div >
      <div className={styles['score-board']}>
        <h2>Score: {score}</h2>
        <h2>Level: {level}</h2>
        <h2>Lines: {lines}</h2>
        <h2>High Score: {highScore}</h2>
        <h2>Game Over: {gameOver ? 'Yes' : 'No'}</h2>
        <h2>Game Paused: {gamePaused ? 'Yes' : 'No'}</h2>
        <h2>Game Started: {gameStarted ? 'Yes' : 'No'}</h2>
        <h2>Game Time: {gameTime} seconds</h2>
        <h2>Game Speed: {gameSpeed} ms</h2>
      </div>
      <div>
        <button 
        className={styles['score-board-button']} 
        onClick={(() => setGameStarted(!gameStarted))}
        >
          {gameStarted ? 'End' : 'Start'}
        </button>
        { gameStarted && 
          <button 
          className={styles['score-board-button']} 
          onClick={(() => setGamePaused(!gamePaused))}
          >
          {gamePaused ? 'Resume' : 'Pause'}
          </button>
        }
        { gameStarted && gameOver && <button onClick={(() => {setGameOver(!gameOver)})}>
          {'Restart'}
        </button>
        }
        { gameStarted && 
          <button 
          className={styles['score-board-button']}
          onClick={(() => setGameSpeed(gameSpeed + 1))}>
          Increase Speed
        </button>
  }
      </div>
    </div>
  )
}