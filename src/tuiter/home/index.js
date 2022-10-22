import React from "react";
import "./index.css";
import postsArray from "../post-list/posts-home.json";
import PostItem from "../post-list/post-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;