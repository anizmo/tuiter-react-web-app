import React from "react";
import PostFooter from "../post-list/post-footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <br/>
                <div className="col-auto">
                    <img width={50} className="float-start rounded-circle" src={`/images/${post.image}`}
                         alt={post.userName}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                    <div className="fw-bolder">{post.userName}
                        <FontAwesomeIcon className={"wd-right-margin wd-left-margin"} icon={faCircleCheck}/>
                        <span className="fw-normal wd-reaction-count">{post.handle} . {post.time}</span>
                    </div>
                    <div className={"wd-bottom-margin-medium"}>{post.tuit}</div>
                    <PostFooter likesCount={post.likes} commentsCount={post.replies} retweetCount={post.retuits}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;