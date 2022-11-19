import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostEmbed from "./post-embed";
import TuitFooter from "./tuit-footer";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

const PostItem = (
    {post}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                { post.retweetedBy != null && <p className="wd-repost-text">
                            <span className="wd-right-margin">
                                <i className="fas fa-retweet"></i>
                            </span>
                    {post.retweetedBy} Retweeted
                </p>}
                <br/>
                <div className="col-2">
                    <img width={80} className="float-end rounded-circle" src={`/images/${post.image}`} alt={post.username}/>
                </div>
                <div className="col-10">
                    <div className="fw-bolder">{post.username}
                        {post.isVerified === true && <FontAwesomeIcon className={"wd-right-margin wd-left-margin"} icon={faCircleCheck} />}
                        <span className="fw-normal wd-reaction-count">{post.handle} . {post.time}</span>
                        <FontAwesomeIcon className={"wd-right-margin wd-left-margin float-end wd-reaction-count"} icon={faEllipsis} /></div>
                    <div className={"wd-bottom-margin-medium"}>{post.content} <a className={"wd-thread-link"} href={`https://www.${post.url}`}>{post.url}</a></div>
                    <PostEmbed embed = {post.embed}/>
                    <TuitFooter likesCount={post.likesCount} commentsCount={post.commentsCount} retweetCount={post.retweetCount}/>
                    {post.threadUrl != null && <a className={"wd-thread-link wd-top-margin wd-bottom-margin"} href={post.threadUrl}> Show this thread </a>}
                </div>
            </div>
        </li>
    );
};
export default PostItem;