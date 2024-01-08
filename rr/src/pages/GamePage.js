import React from 'react';
import Layout from '../layout/layout';
import Headers from '../layout/header';
import HomePage from './HomePage';

function GamePage() {
    return (
        <>
            <Layout>
                <Headers />
                <HomePage />
            </Layout>
            <div>Game</div>
        </>
    );
}

export default GamePage;
