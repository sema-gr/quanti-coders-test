import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import './App.css';

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
