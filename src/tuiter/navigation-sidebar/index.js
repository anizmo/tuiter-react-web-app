import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark,
    faEllipsis,
    faEnvelope,
    faFlask,
    faHashtag,
    faHome,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter" className={`list-group-item ${active === '' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHome}/> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHashtag}/> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon icon={faFlask}/> Labs
            </Link>
            <Link to="/tuiter/notifications"
                  className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBell}/> Notifications
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEnvelope}/> Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBookmark}/> Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faList}/> Lists
            </Link>
            <Link to="/tuiter/profile"
                  className={`list-group-item ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faUser}/> Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEllipsis}/> More
            </Link>
        </div>
    );
};
export default NavigationSidebar;