import React, { useEffect } from 'react';
import LoginBtn from '../components/button';

function LoginPage() {
    useEffect(() => {
        window.name = 'gyopark';
    });
    return <LoginBtn name="gyopark" />;
}

export default LoginPage;
