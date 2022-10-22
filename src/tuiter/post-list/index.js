import React from "react";
import postsArray from "../post-list/posts-home.json";
import PostItem from "./post-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;