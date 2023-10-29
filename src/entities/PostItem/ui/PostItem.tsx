import { FC } from "react";
import { IPost } from "../../../app/models/IPosts";
import './PostItem.css';

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <div className='post_item'>
            <h3># {post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostItem;