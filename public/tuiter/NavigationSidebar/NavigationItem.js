const NavigationItem = (navigation, active) => {
    let activeStyle = "list-group-item list-group-item-action d-inline-flex bg-primary";
    if (!navigation.nav_title.toLowerCase().includes(active.toLowerCase())) {
        activeStyle = activeStyle.replace(" bg-primary", "")
    }
    return (`
        <a href="${navigation.nav_url}" class="${activeStyle}"> 
            <i class="${navigation.nav_icon} pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;${navigation.nav_title}</span>
        </a>
    `);
}

export default NavigationItem;