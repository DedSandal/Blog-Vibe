import { Link } from 'react-router-dom';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { FormContainer } from './styles';

const SignIn = ({ logIn }) => {
    const handleSignIn = () => {
        // Тут можна додати логіку автентифікації, наприклад, перевірку email і пароля.
        logIn();
    };

    return (
        <FormContainer>
            <h3>Welcome back!</h3>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Link to={`/sign-up`}>Don&#39;t have an account?</Link>
            <Button onClick={handleSignIn}>Sign In</Button>
        </FormContainer>
    );
};

export default SignIn;
