const PostSummaryItem = (post) => {
    return (`    
            <li class="list-group-item d-flex justify-content-between primary-bg-color secondary-color">
                    <div class="left-child w-85" style="padding-right: 25px">
                        <span class="f-border-color text-secondary">${post.topic}</span>
                        <span class="row"></span>
                        <span>
                            <span class="fw-bold ${post.userName === ''}">
                                ${post.userName}
                                <i class="fas fa-check-circle ml-2"></i>
                            </span>
                            <small class="f-border-color text-secondary"> - ${post.time}</small>
                        </span>
                        <span class="row"></span>
                        <span class="f-border-color">${post.title}</span>
                    </div>
                    <div class="right-child w-15">
                        <img src="${post.image}" style="border-radius: 12px" class="" width="80px"  height="80px" alt="post-image">
                    </div>
                </li>
    `);
}
export default PostSummaryItem;
