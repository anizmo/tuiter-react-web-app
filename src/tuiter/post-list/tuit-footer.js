import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitFooter = ({post}) => {
    const dispatch = useDispatch();
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
                    <FontAwesomeIcon
                        onClick={() => dispatch(
                        updateTuitThunk({
                        ...post,
                            liked: true,
                        likes: post.likes + 1}))}
                                     className={`wd-right-margin ${post.liked === true ? 'text-danger' : ''}`} icon={faHeart}/>
                    <span className="wd-reaction-count">{post.likes}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon
                        onClick={() => dispatch(
                            updateTuitThunk({
                                ...post,
                                disliked: true,
                                dislikes: post.dislikes + 1}))}
                        className={`wd-right-margin ${post.disliked === true ? 'text-warning' : ''}`} icon={faThumbsDown}/>
                    <span className="wd-reaction-count">{post.dislikes}</span>
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
