import { useNavigate } from 'react-router-dom';

const LoginBtn = (props) => {
    const navigate = useNavigate();

    const Login = () => {
        console.log(window.name);
        alert(`hi ${props.name}`);
        navigate('/game');
    };

    return <button onClick={Login}>login</button>;
};

export default LoginBtn;
