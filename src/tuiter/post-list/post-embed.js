import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import * as PropTypes from "prop-types";

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
                <EmbeddedTuitComponent image={embed.image} alt={embed.name} verified={embed.isVerified}
                                      handle={embed.handle} time={embed.time} content={embed.content}/>
            );
        default:
            return(
            <div><h2>Unable to load contents</h2></div>
        );
    }

};

class EmbeddedTuitComponent extends React.Component {
    render() {
        return <li className="list-group-item rounded-2">
            <div className="row">
                <div className="col-12">
                    <div><img width={20} className="float-start rounded-5 wd-right-margin" src={`/images/${this.props.image}`} alt={this.props.alt}/>
                        <span className="fw-bolder">{this.props.alt}</span>
                        {this.props.verified === true && <FontAwesomeIcon className={"wd-right-margin wd-left-margin"} icon={faCircleCheck}/>}
                        <span className="wd-reaction-count">{this.props.handle} . {this.props.time}</span>
                    </div>
                    <div>{this.props.content}</div>
                </div>
            </div>
        </li>;
    }
}

EmbeddedTuitComponent.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    verified: PropTypes.bool,
    handle: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string
};

export default PostEmbed;