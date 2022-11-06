import React from "react";
import {Link} from "react-router-dom";

const ProfilePic = ({profile}) => {
    return (
        <li className="list-group-item wd-margin-bottom-large">
            <div className="row">
                <div>
                    <img src={`/images/${profile.bannerPicture}`} width="100%" height="200px"/>
                </div>

                <div className="rounded-circle wd-overlap-profile wd-border">
                    <img className="rounded-circle wd-overlap-profile wd-border"
                         src={`/images/${profile.profilePicture}`} width={150}/>
                </div>

                <div>
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-primary rounded-pill wd-override-overlap float-end">Edit Profile
                        </button>
                    </Link>

                </div>
            </div>
        </li>
    );
};
export default ProfilePic;