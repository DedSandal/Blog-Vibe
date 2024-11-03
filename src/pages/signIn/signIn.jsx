import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { useAuthContext } from '../../providers/authProvider';
import { FormContainer } from './styles';

const SignIn = () => {
    const { signIn, isAuth } = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (isAuth) {
        return <Navigate to="/" replace={true} />;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });

        signIn({ username, password });
    };

    return (
        <FormContainer>
            <h3>Welcome back!</h3>
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Link to={`/sign-up`}>Don&#39;t have an account?</Link>
            <Button onClick={handleSubmit}>Sign In</Button>
        </FormContainer>
    );
};

export default SignIn;
