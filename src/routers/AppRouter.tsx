import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InitialScreen } from '../screens/InitialScreen';
import { SudokuScreen } from '../screens/SudokuScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialScreen />}/>   
                <Route path="/sudoku" element={<SudokuScreen />} /> 
                <Route path="/about" element={<>About page</>}/>
            </Routes>    
        </BrowserRouter>
    )
}