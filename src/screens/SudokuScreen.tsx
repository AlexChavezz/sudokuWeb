import { SudokuItem } from "../components/SudokuItem";
import { sudoku } from "../helpers/sudoku";
import styles from '../styles/sudokuStyles.module.css';

export const SudokuScreen = () => {

    const {
        sudokuOne
    } = sudoku;

    return (
        <section className={styles.itemsContainer}>

            {
                sudokuOne.map((array) => array.map(number => <SudokuItem number={number} />))
            }
        </section>
    );
}

