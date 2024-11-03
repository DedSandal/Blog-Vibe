import { BlogContainer } from './styles';

const Blog = ({ blog }) => {
    return (
        <BlogContainer>
            <div>
                <img src={blog.img} alt="" />
            </div>
            <div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>
        </BlogContainer>
    );
};
export default Blog;
