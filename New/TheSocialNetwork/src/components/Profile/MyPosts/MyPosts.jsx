import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Mercedes"likesCount='0' />
        <Post message='Lada' likesCount='8' />
      </div>
    </div>
  );
};

export default MyPosts;
