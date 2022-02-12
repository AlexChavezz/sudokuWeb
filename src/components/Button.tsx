import styles from '../styles/InitialScreen.module.css';
import { Link } from 'react-router-dom';
import star from '../assets/star.png';

interface ButtonProps {
    value: number,
}

export const Button = ({ value }: ButtonProps) =>
    <Link to={ `sudoku/${value}` }>
        <button
            className={styles.level}
        >
            {value}
        </button>
    </Link>    