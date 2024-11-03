import { Link } from 'react-router-dom';

import Blog from '../../components/blog/blog';
import { blogData } from '../../constants';
import { ProfileContainer, ProfileInfo } from './styles';

const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileInfo>
                <div className="author-widht">
                    <img
                        src="https://www.whatspaper.com/wp-content/uploads/2023/06/hd-gigachad-wallpaper-whatspaper-4.jpg"
                        alt=""
                    />
                    <div>
                        <h4>Andrew Jonhson</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus
                        </p>
                    </div>
                </div>
            </ProfileInfo>
            <div className="list-wrapper">
                <h2>My Posts</h2>
                {blogData.map((blog) => (
                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                        <Blog blog={blog} />
                    </Link>
                ))}
            </div>
        </ProfileContainer>
    );
};
export default Profile;
