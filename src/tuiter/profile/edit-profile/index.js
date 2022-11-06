import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {updateProfile} from "../profile-reducer";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import "../index.css"
import {Link} from "react-router-dom";

const EditProfileComponent = () => {

    const profile = useSelector((state) => state.profile);
    const [profileState, setProfileState] = useState(profile);
    const initialData = profile
    const dispatch = useDispatch();

    const handleFieldChanges = (event) => {
        const jsonKey = event.target.id;
        const jsonValue = event.target.value;
        const updatedProfileJson = {
            ...profileState,
            [jsonKey]: jsonValue
        }
        setProfileState(updatedProfileJson);
    }

    const onSaveClicked = () => {
        dispatch(updateProfile(profileState));
    }

    const onCancelClicked = () => {
        dispatch(updateProfile(initialData))
    }

    return (
        <div className="row">
            <li className="list-group-item wd-margin-bottom-large wd-margin-bottom-small">
                <div className="row">
                    <div className="col-auto">
                        <Link to="/tuiter/profile">
                            <FontAwesomeIcon
                                className="align-self-center wd-margin-top-small wd-margin-bottom-small wd-left-margin-medium"
                                icon={faClose} onClick={onCancelClicked}/>
                        </Link>
                    </div>
                    <div className="col-10">
                        <span className="fw-bold wd-toolbar-header">Edit Profile</span>
                    </div>
                    <div>
                        <Link to="/tuiter/profile">
                            <button className="btn btn-primary rounded-pill wd-override-overlap float-end"
                                    onClick={onSaveClicked}>Save
                            </button>
                        </Link>
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
                </div>
            </li>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe"
                       defaultValue={profile.name} onChange={handleFieldChanges}/>
                <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
                <textarea className="form-control" id="bio" name="bio"
                          placeholder="An extravagent description of yourself"
                          defaultValue={profile.bio} onChange={handleFieldChanges}/>
                <label htmlFor="bio">Bio</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="location" name="location" placeholder="Top of the world"
                       defaultValue={profile.location} onChange={handleFieldChanges}/>
                <label htmlFor="location">Location</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="website" name="website" placeholder="www.google.com"
                       defaultValue={profile.website} onChange={handleFieldChanges}/>
                <label htmlFor="website">Website</label>
            </div>

        </div>
    );
}
export default EditProfileComponent;