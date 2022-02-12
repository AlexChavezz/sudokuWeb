import { useState } from "react";

interface props {
    number: number | string
    activeNumber: number
}

export const SudokuItem = ({ number, activeNumber }: props) => {

    const [ currentValue, setCurrentValue ] = useState(number);
    const changeCurrentValue = () => {
        setCurrentValue(activeNumber);
    }
    return (
        <article 
            style={{ height: 50, width: 50, background: '', border: "1px solid white", display: 'flex', alignItems: 'center', justifyContent: "center" }}
            onClick={changeCurrentValue}
        >
            <p style={{ color: 'white' }}>{ currentValue }</p>
        </article>
    );
}