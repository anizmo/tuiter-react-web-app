import React from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faBirthdayCake, faCalendar, faLocation} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "./index.css"

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <>
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
                            <button className="btn btn-primary rounded-pill wd-override-overlap float-end">Edit
                                Profile
                            </button>
                        </Link>

                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <span className="fw-bolder wd-toolbar-header">{profile.name}</span>
                    <span className="text-secondary wd-margin-bottom-small">{profile.handle}</span>
                    <span className="text-body wd-margin-bottom-small">{profile.bio}</span>

                    <div className="wd-item-footer  wd-margin-bottom-small">
                        <ul className="wd-reaction-list">
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faLocation}/>
                                    <span className="wd-reaction-count">{profile.location}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faBirthdayCake}/>
                                    <span className="wd-reaction-count">Born {profile.dateOfBirth}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faCalendar}/>
                                    <span className="wd-reaction-count">Joined {profile.dateJoined}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <span className="text-secondary"><span
                        className="fw-bold text-black">{profile.followingCount}</span> Following <span
                        className="fw-bold text-black">{profile.followersCount}</span> Followers</span>

                </div>
            </li>
        </>
    );
};
export default ProfileComponent;