import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <li class="list-group-item">
                    <span class="recomm-name fw-bold">Who to follow</span>
                </li>
                ${
        who.map(whoItem => {
            return (WhoToFollowListItem(whoItem));
        }).join('')}
            </ul>
`);
}

export default WhoToFollowList;
