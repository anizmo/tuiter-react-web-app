import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faHeartPulse, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/fontawesome-free-regular";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";

const PostFooter = ({post}) => {
    return <div className="wd-item-footer">
        <ul className="wd-reaction-list">
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faComment}/>
                    <span className="wd-reaction-count">{post.replies}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faRetweet}/>
                    <span className="wd-reaction-count">{post.retuits}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    {!post.liked && <FontAwesomeIcon className="wd-right-margin" icon={faHeart}/>}
                    {post.liked && <FontAwesomeIcon icon={faHeartPulse} />}
                    <span className="wd-reaction-count">{post.likes}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faArrowUpFromBracket}/>
                </a>
            </li>
        </ul>
    </div>
}
export default PostFooter;
