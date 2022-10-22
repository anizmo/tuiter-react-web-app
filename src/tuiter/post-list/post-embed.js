import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";

const PostEmbed = (
    {
        embed = {
            "type": "post",
            "content": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv",
            "name": "Elon Musk",
            "isVerified": true,
            "handle": "@elonmusk",
            "time": "15h",
            "image": "elon.png"
        }
    }
) => {
    switch (embed.type) {
        case "image":
            return(
                <img className="float-none rounded-4 wd-div-100" src={`/images/${embed.content}`} alt={embed.content}/>
            );
        case "tuit":
            return(
                <li className="list-group-item rounded-2">
                    <div className="row">
                        <div className="col-12">
                            <div><img width={20} className="float-start rounded-5 wd-right-margin" src={`/images/${embed.image}`} alt={embed.name}/>
                                <span className="fw-bolder">{embed.name}</span>
                                {embed.isVerified === true && <FontAwesomeIcon className={"wd-right-margin wd-left-margin"} icon={faCircleCheck} />}
                                <span className="fw-light">{embed.handle} . {embed.time}</span>
                            </div>
                            <div>{embed.content}</div>
                        </div>
                    </div>
                </li>
            );
        default:
            return(
            <div><h2>Unable to load contents</h2></div>
        );
    }

};
export default PostEmbed;