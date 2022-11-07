import React from "react";
import {useSelector} from "react-redux";
import "./index.css"
import ProfileHeader from "./components/profile-header";
import ProfileBannerDp from "./components/profile-banner-dp";
import ProfileInfo from "./components/profile-info";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="wd-banner-image">
                <ProfileHeader profile={profile}/>
                <ProfileBannerDp profile={profile}/>
                <ProfileInfo profile={profile}/>
        </div>
    );
};
export default ProfileComponent;