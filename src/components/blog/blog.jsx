import { BlogContainer } from './styles';

const Blog = ({ blog }) => {
    const getAvatarSrc = (img) => {
        if (img.startsWith('data:image')) {
            return img;
        }
        return `data:image/jpeg;base64,${img}`;
    };

    return (
        <BlogContainer>
            <div>
                <img
                    src={blog.img && blog.img.startsWith('/9j/') ? getAvatarSrc(blog.img) : blog.img}
                    alt={blog.title}
                />
            </div>
            <div>
                <h3>{blog.title}</h3>
                {blog.description ? (
                    <p>{blog.description}</p>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                )}
            </div>
        </BlogContainer>
    );
};

export default Blog;
