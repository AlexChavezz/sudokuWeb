import styles from '../styles/barNavstyles.module.css';

export const BarNav = () => {
    return (
        <header className={styles.barNav}>
            <section className={styles.headerContainer} >
                <article className={ styles.advaceContainer }>
                    <header className={ styles.advanceTitle }>
                        100 %
                    </header>
                    <footer className={styles.advance}>
                        <div style={{ width:'100%', backgroundColor:'#20B142', height:'100%', borderRadius:'10px'}}></div>
                    </footer>
                </article>
            </section>
        </header>
    )
}