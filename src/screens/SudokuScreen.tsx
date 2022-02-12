import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SudokuItem } from "../components/SudokuItem";
import { sudoku } from "../helpers/sudoku";
import styles from '../styles/sudokuStyles.module.css';

export const SudokuScreen = () => {

    const { level } = useParams();
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [ activeNumber, setActiveNumber ] = useState<number>( 1 );
    // const [ sudoku, setSudoku ] = useState();
    // -> Havcer una funcion que resiva un numero y me retorene un sudoku

    useEffect(() => {
        console.log(Number(level))
    }, [])
    
    const {
        sudokuOne
    } = sudoku;
    return (
        <section className={styles.sudokuScreenContainer}>
            <aside className={ styles.numbers }>
                {
                    numbers.map(number => <Numbers number={number} key={number} setActiveNumber={setActiveNumber}/>)
                }
            </aside>
            <article className={styles.itemsContainer}>
                {
                    sudokuOne.map((array) => array.map(number => <SudokuItem number={number} activeNumber={activeNumber} key={Math.random().toString(36).slice(2)} />))
                }
            </article>
        </section>
    );
}

interface NumbersProps {
    number: number,
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
}

const Numbers = ({ number, setActiveNumber }: NumbersProps) => {
    const changeActiveNumber = () => {
        setActiveNumber(number);
    }
    return (
        <div 
            className={ number === setActiveNumber? styles.active : styles.numbersItem }    
            onClick={changeActiveNumber}
        >
            { number }
        </div>
    )
}