import React from "react";
import ProfileStats from "./profile-stats";


const ProfileTextInfo = ({profile}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <span className="fw-bolder wd-toolbar-header">{profile.name}</span>
                <span className="text-secondary wd-margin-bottom-small">{profile.handle}</span>
                <span className="text-body wd-margin-bottom-small">{profile.bio}</span>

                <ProfileStats dateJoined={profile.dateJoined} dateOfBirth={profile.dateOfBirth}
                              location={profile.location}/>

                <span className="text-secondary"><span
                    className="fw-bold text-black">{profile.followingCount}</span> Following <span
                    className="fw-bold text-black">{profile.followersCount}</span> Followers</span>

            </div>
        </li>
    );
};
export default ProfileTextInfo;