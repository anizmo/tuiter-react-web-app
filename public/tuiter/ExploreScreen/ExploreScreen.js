import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
                ${NavigationSidebar("explore")}
            </div>
            <div  class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                ${ExploreComponent()}
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);

