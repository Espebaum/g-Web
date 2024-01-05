import React, { useEffect } from 'react';
import Layout from '../layout/layout';
import Headers from '../layout/header';

function GamePage() {
    useEffect(() => {
        console.log(window.name);
    });
    return (
        <div>
            <Layout />
            <Headers />
            <div>Game</div>
        </div>
    );
}

export default GamePage;
