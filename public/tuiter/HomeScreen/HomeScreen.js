import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js"

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2" style="margin-top: 8px">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
               ${PostList()}
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block" style="margin-top: 8px">
                ${PostSummaryList()}
            </div>
            
        </div>
    `);
})($);

