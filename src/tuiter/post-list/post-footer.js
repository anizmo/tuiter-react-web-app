
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/fontawesome-free-regular";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";

const PostFooter = ({
    retweetCount = "123",
    likesCount = "111.1K",
    commentsCount = "300"}) => {
    return <div className="wd-item-footer">
        <ul className="wd-reaction-list">
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faComment} />
                    <span className="wd-reaction-count">{commentsCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faRetweet} />
                    <span className="wd-reaction-count">{retweetCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faHeart} />
                    <span className="wd-reaction-count">{likesCount}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faArrowUpFromBracket} />
                </a>
            </li>
        </ul>
    </div>
}
export default PostFooter;
