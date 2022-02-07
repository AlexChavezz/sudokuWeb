import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InitialScreen } from '../screens/InitialScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialScreen />}/>    
                <Route path="/about" element={<>About page</>}/>
            </Routes>    
        </BrowserRouter>
    )
}