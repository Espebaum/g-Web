import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
// import { useState } from 'react';

function App() {
    return (
        <>
            <Wrapper>
                <Hello name="gyopark" color="blue" isSpecial={true}></Hello>
                <Hello color="pink"></Hello>
            </Wrapper>
            <Counter />
            <InputSample />
            <UserList />
        </>
    );
}

export default App;
