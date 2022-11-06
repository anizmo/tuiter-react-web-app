import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

const ProfileHeader = ({profile}) => {
    return (
        <li className="list-group-item wd-margin-bottom-large wd-margin-bottom-small">
            <div className="row">
                <div className="col-auto">
                    <FontAwesomeIcon className="align-self-center wd-margin-top-small" icon={faArrowLeftLong}/>
                </div>
                <div className="col-10">
                    <span className="fw-bold wd-toolbar-header">{profile.name}</span>
                    <div className="text-secondary">{profile.tuitsCount} Tuits</div>
                </div>
            </div>
        </li>
    );
};
export default ProfileHeader;