import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { useAuthContext } from '../../providers/authProvider';
import { FormContainer } from '../signIn/styles';

const SignUp = () => {
    const { signUp, isAuth } = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (isAuth) {
        return <Navigate to="/" replace={true} />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            signUp({ username, password });
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <FormContainer>
            <h3>Create Account</h3>
            <Input
                data-cy="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                data-cy="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                data-cy="confirm-password"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Link to={`/sign-in`}>Already have an account</Link>
            <Button data-cy="submit" onClick={handleSubmit}>
                Sign Up
            </Button>
        </FormContainer>
    );
};

export default SignUp;
