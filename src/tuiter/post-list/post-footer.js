import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const PostFooter = ({
    retweetCount = "123",
    likesCount = "111.1K",
    commentsCount = ""
                    }) => {
    return <div className="wd-item-footer">
        <ul className="wd-reaction-list">
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <span className="wd-right-margin">
                        <i className="fa-regular fa-comment"></i>
                    </span>
                    <span className="wd-reaction-count">{commentsCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                            <span className="wd-right-margin">
                                <i className="fas fa-retweet"></i>
                            </span>
                    <span className="wd-reaction-count">{retweetCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                            <span className="wd-right-margin">
                                <i className="fa-regular fa-heart"></i>
                            </span>
                    <span className="wd-reaction-count">{likesCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                            <span className="wd-right-margin">
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </span>
                </a>
            </li>
        </ul>
    </div>
}
export default PostFooter;
