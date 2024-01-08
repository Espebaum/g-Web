import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-container">
            <p className="card">Solve Problems!</p>
            <Link to="/login" className="btn">
                로그인
            </Link>
        </div>
    );
}

export default MainPage;
