import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import AddPost from './pages/addPost/addPost';
import BlogPage from './pages/blogPage/blogPage';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logIn = () => setIsAuthenticated(true);
    const logOut = () => setIsAuthenticated(false);

    return (
        <BrowserRouter>
            <Header isAuthenticated={isAuthenticated} logOut={logOut} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/create-post" element={<AddPost />} />
                <Route path="/sign-in" element={<SignIn logIn={logIn} />} />
                <Route path="/sign-Up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
