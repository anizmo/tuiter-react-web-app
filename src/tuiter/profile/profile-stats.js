import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faCalendar, faLocation} from "@fortawesome/free-solid-svg-icons";

const ProfileStats = ({
                          location = "Boston, MA",
                          dateOfBirth = "111.1K",
                          dateJoined = "4/2009"
                      }) => {
    return <div className="wd-item-footer  wd-margin-bottom-small">
        <ul className="wd-reaction-list">
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faLocation}/>
                    <span className="wd-reaction-count">{location}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faBirthdayCake}/>
                    <span className="wd-reaction-count">Born {dateOfBirth}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faCalendar}/>
                    <span className="wd-reaction-count">Joined {dateJoined}</span>
                </a>
            </li>
        </ul>
    </div>
}
export default ProfileStats;
