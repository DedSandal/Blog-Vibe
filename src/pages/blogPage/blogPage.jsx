import { useParams } from 'react-router-dom';

import { blogData } from '../../constants';
import { BlogPageContainer } from './styles';

const BlogPage = () => {
    const { id } = useParams();
    const blog = blogData.find((item) => item.id === Number(id));

    return (
        <BlogPageContainer>
            <div>
                <h3>{blog.author}</h3>
                <h4>{blog.title}</h4>
            </div>
            <img src={blog.img} alt="" />
            <div>
                <p>{blog.description}</p>
            </div>
        </BlogPageContainer>
    );
};
export default BlogPage;
