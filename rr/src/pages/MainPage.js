import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div>
            <p>Hello World!</p>
            <Link to="/login">로그인</Link>
        </div>
    );
}

export default MainPage;
