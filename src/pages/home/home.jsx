import { Link } from 'react-router-dom';

import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog';
import useBlogs from '../../hooks/useBlogs';
import { HomeContainer } from './styles';

const Home = () => {
    const { blogs } = useBlogs();

    return (
        <HomeContainer>
            <Banner />
            <div className="home-wrapper">
                <h2 className="home-title">All posts</h2>
                <div className="list-wrapper">
                    {blogs.map((blog) => (
                        <Link data-cy="post-item" key={blog.id} to={`/blog/${blog.id}`}>
                            <Blog blog={blog} />
                        </Link>
                    ))}
                </div>
            </div>
        </HomeContainer>
    );
};

export default Home;
