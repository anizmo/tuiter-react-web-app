const WhoToFollowListItem = (who) => {
    return (`    
            <li class="list-group-item ">
                <div class="row">
                    <div class="col-sm-2 p-0">
                        <img src="${who.avatarIcon}" class="rounded-circle img-fluid w-75" alt="Avatar">
                    </div>
                    <div class="col-sm-7 recomm-text p-0" style="padding: 8px;">
                        <span class="recomm-name fw-bold">${who.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <span class="recomm-tag d-block">@${who.handle}</span>
                    </div>
                    <button type="submit" class="col-sm-3 btn rounded-pill btn btn-primary">Follow</button>
                </div>
            </li>
    `);
}
export default WhoToFollowListItem;
