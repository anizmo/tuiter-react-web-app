import React from "react";
import TuitFooter from "../post-list/tuit-footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({post}) => {
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
                    <TuitFooter post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;