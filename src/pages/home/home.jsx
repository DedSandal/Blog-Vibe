import { Link } from 'react-router-dom';

import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog';
import { blogData } from '../../constants';
import { HomeContainer } from './styles';

const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <div className="home-wrapper">
                <h2 className="home-title">All posts</h2>
                <div className="list-wrapper">
                    {blogData.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <Blog blog={blog} />
                        </Link>
                    ))}
                </div>
            </div>
        </HomeContainer>
    );
};
export default Home;
