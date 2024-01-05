import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';

const DefaultRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
};

export default DefaultRoute;
