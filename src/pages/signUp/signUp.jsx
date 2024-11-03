import { Link } from 'react-router-dom';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { FormContainer } from '../signIn/styles';

const SignUp = () => {
    return (
        <FormContainer>
            <h3>Create Account</h3>
            <Input type="text" placeholder={`Email`} />
            <Input type="text" placeholder={`User Name`} />
            <Input type="password" placeholder={`Password`} />
            <Input type="password" placeholder={`Confirm Password`} />
            <Link to={`/sign-in`}>Already have an account</Link>
            <Button>Sign In</Button>
        </FormContainer>
    );
};
export default SignUp;
