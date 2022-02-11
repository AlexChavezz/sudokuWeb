import styles from '../styles/InitialScreen.module.css';
import star from '../assets/star.png';
interface ButtonProps {
    value: number,
}

export const Button = ({ value }: ButtonProps) =>
    <button className={styles.level}>
        {value}
        <span className={ styles.levelStatus }>
            <img src={ star } alt="star" className={ styles.levelStatusStar }/>
            <img src={ star } alt="star" className={ styles.levelStatusStar }/>
            <img src={ star } alt="star" className={ styles.levelStatusStar }/>
        </span>

    </button>