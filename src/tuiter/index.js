import React from "react";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList
    from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="messages" element={<h1>Messages Coming Soon</h1>}/>
                    <Route path="bookmarks" element={<h1>Bookmarks Coming Soon</h1>}/>
                    <Route path="notifications" element={<h1>Notifications Coming Soon</h1>}/>
                    <Route path="lists" element={<h1>Lists Coming Soon</h1>}/>
                    <Route path="profile" element={<h1>Profile Coming Soon</h1>}/>
                    <Route path="more" element={<h1>More Coming Soon</h1>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter