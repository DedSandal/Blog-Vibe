import { Link } from 'react-router-dom';

import { useAuthContext } from '../../providers/authProvider';
import Button from '../button/button';
import { HeaderContainer } from './styles';

const Header = () => {
    const { isAuth, signOut } = useAuthContext();

    return (
        <HeaderContainer>
            <Link to={`/`}>
                <h1>Blog Vibe</h1>
            </Link>
            {isAuth ? (
                <div className="logout-wrapper">
                    <Link data-cy="create-post" to={`/create-post`}>
                        <button className="add-post">Add Post</button>
                    </Link>
                    <Button onClick={signOut}>Logout</Button>
                </div>
            ) : (
                <Link data-cy="login" lassName="button-link" to={`/sign-in`}>
                    <Button>Login</Button>
                </Link>
            )}
        </HeaderContainer>
    );
};

export default Header;
