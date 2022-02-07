import { Button } from '../components/Button';
import styles from '../styles/InitialScreen.module.css';

export const InitialScreen = () => {
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]; 
    return (
        <main className={ styles.levelsContainer }>
            {
                numbers.map( level => <Button value={level}/>)
            }
        </main>
    );
}