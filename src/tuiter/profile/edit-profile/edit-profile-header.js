import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const EditProfileHeader = (
    {
        profile = {
            "firstName": "Anuj",
            "lastName": "Potdar",
            "handle": "@anizmo",
            "profilePicture": "profile_pic.png",
            "bannerPicture": "header.png",
            "bio": "Billionaire, Philanthropist, Genius and a forever student of science!",
            "website": "anizmo.github.io",
            "location": "Boston, MA",
            "dateOfBirth": "9/11/1968",
            "dateJoined": "4/2009",
            "followingCount": 1,
            "followersCount": 1000,
            "tuitsCount": 1000
        }
    }
) => {
    return (
        <li className="list-group-item wd-margin-bottom-large wd-margin-bottom-small">
            <div className="row">
                <div className="col-auto">
                    <FontAwesomeIcon
                        className="align-self-center wd-margin-top-small wd-margin-bottom-small wd-left-margin-medium"
                        icon={faClose}/>
                </div>
                <div className="col-10">
                    <span className="fw-bold wd-toolbar-header">Edit Profile</span>
                </div>
            </div>
        </li>
    );
};
export default EditProfileHeader;