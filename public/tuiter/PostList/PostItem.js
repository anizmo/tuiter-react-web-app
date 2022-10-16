const PostItem = (post) => {
    function processTitle(text){
        return text.replace(/@(\w+)/g, '<a href="https://twitter.com/" style="text-decoration: none">@$1</a>')
    }
    
    return (`    
            <li class="wd-post-item-flex-container">
            <div class="wd-left-child">
                <img class="wd-avatar" src="${post.image}" alt="avatar-img">
            </div>
            <div class="wd-right-child">
                <div class="wd-item-head">
                    <span class="wd-item-author">${post.displayName}</span>
                    <span class="wd-item-author-tag">${post.username}</span>
                    <span class="wd-item-author-tag dot-before">- ${post.time}</span>
                    <a href="#!" class="wd-remove-link-text-decor">
                        <span class="wd-tweet-setting wd-row">
                            <i class="fas fa-ellipsis-h"></i>
                        </span>
                    </a>
                    <span class="wd-item-content wd-row">${processTitle(post.title)}</span>
                </div>
                <div class="wd-item-body">
                    <img src="${post.bannerUrl}" class="wd-item-poster-img" alt="poster-img">
                    <span class="wd-body-title wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayTextHeading}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayText}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">
                        <a class="text-secondary wd-remove-link-text-decor" href="https://www.${post.overlayLinkText}">
                            <i class="fas fa-link"></i>
                            ${post.overlayLinkText}
                        </a>
                    </span>
                </div>
                <div class="wd-item-footer">
                    <ul class="wd-reaction-list">
                        <li>
                            <a href="#!" class="wd-remove-link-text-decor text-secondary">
                                <span class="">
                                    <i class="far fa-comment"></i>
                                </span>
                                <span class="wd-reaction-count">${post.commentCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-remove-link-text-decor text-secondary">
                            <span class="">
                                <i class="fas fa-retweet"></i>
                            </span>
                                <span class="wd-reaction-count">${post.retweetCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-remove-link-text-decor text-secondary">
                            <span class="wd-reaction-icon">
                                <i class="fas fa-heart reaction-active"></i>
                            </span>
                                <span class="wd-reaction-count reaction-active">${post.likeCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-remove-link-text-decor text-secondary">
                            <span class="wd-reaction-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </li>
    `);
}
export default PostItem;
