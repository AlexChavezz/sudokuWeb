import styles from '../styles/InitialScreen.module.css';

interface ButtonProps {
    value: number,
}

export const Button = ({value}:ButtonProps) => 
<button className={ styles.level }>
    {value}
</button>