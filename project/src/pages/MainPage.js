import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MainPage.css'

function MainPage() {
    return (
        <div>
            <p>Solve Problems!</p>
            <Link to="/login">로그인</Link>
        </div>
    );
}

export default MainPage;
