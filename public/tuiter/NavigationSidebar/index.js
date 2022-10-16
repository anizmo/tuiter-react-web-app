import NavigationItem from "./NavigationItem.js";
import navigations from "./navigations.js";

const NavigationSidebar = (active) => `
        <div class="list-group">
                ${navigations.map(navigation => NavigationItem(navigation, active)).join('')}
        </div>
        <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>`


export default NavigationSidebar;