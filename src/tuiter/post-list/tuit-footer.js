import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";

const TuitFooter = ({post}) => {
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
                    <FontAwesomeIcon className={`wd-right-margin ${post.liked === true ? 'text-danger' : ''}`} icon={faHeart}/>
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
export default TuitFooter;
