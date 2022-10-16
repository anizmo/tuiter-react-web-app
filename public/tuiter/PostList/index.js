import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
            <ul class="list-group" style="margin-top: 8px">
                ${
        posts.map(post => {
            return (PostItem(post));
        }).join('')}
            </ul>
`);
}

export default PostList;
