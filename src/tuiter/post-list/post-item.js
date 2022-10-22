import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostEmbed from "./post-embed";
import PostFooter from "./post-footer";

const PostItem = (
    {
        post = {
            "name": "SpaceX",
            "isVerified": true,
            "handle": "@SpaceX",
            "retweetedBy": "Elon Musk",
            "content": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the moon -> spacex.com/updates",
            "time": "15h",
            "image": "spacex.png",
            "commentsCount": 595,
            "retweetCount": 1168,
            "likesCount": "11.1K",
            "embed": {
                "type":"image",
                "content":"abc"
            }
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                { post.retweetedBy != null && <p className="wd-repost-text">
                            <span className="wd-right-margin">
                                <i className="fas fa-retweet"></i>
                            </span>
                    <span className="wd-reaction-count">{post.retweetedBy} Retweeted</span>
                </p>}
                <br/>
                <div className="col-2">
                    <img width={70} className="float-end rounded-5" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="fw-bolder">{post.name} <span className="fw-light">{post.handle} . {post.time}</span> </div>
                    <div className={"wd-bottom-margin-medium"}>{post.content}</div>
                    <PostEmbed embed = {post.embed}/>
                    <PostFooter likesCount={post.likesCount} commentsCount={post.commentsCount} retweetCount={post.retweetCount}/>
                </div>
            </div>
        </li>
    );
};
export default PostItem;