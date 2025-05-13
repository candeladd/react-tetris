import react from 'react';
import "../globals.css";
import styles from "./styles.module.css";
interface SquareProps {
    color: number ;
}
export default function square(props: SquareProps){
    
    const colorClass = styles[`color-${props.color}`]
    const gridClass = styles['grid-square']
    
    const classes = `${colorClass} ${gridClass} `;
    return (<div className={classes}/ >)
}