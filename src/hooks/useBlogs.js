import { blogsData } from '../constants';
import useLocalStorage from './useLocalStorage';

const useBlogs = () => {
    const { value: blogs, setLocalStorage: setBlogs } = useLocalStorage('blogs', blogsData);
    const addBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };
    return { blogs, addBlog };
};

export default useBlogs;
