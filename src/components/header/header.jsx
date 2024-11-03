import { Link } from 'react-router-dom';

import Button from '../button/button';
import { HeaderContainer } from './styles';

const Header = ({ isAuthenticated, logOut }) => {
    return (
        <HeaderContainer>
            <Link to={`/`}>
                <h1>Blog Vibe</h1>
            </Link>
            {isAuthenticated ? (
                <div className="logout-wrapper">
                    <Link to={`/create-post`}>
                        <button className="add-post">Add Post</button>
                    </Link>
                    <Button onClick={logOut}>Logout</Button>
                </div>
            ) : (
                <Link className="button-link" to={`/sign-in`}>
                    <Button>Login</Button>
                </Link>
            )}
        </HeaderContainer>
    );
};

export default Header;
