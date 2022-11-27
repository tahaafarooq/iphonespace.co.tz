const UserMenu = (props) => {
    return (
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow show" data-bs-popper="none">
            <a href="#" className="dropdown-item">Set status</a>
            <a href="#" className="dropdown-item">Profile &amp; account</a>
            <a href="#" className="dropdown-item">Feedback</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">Settings</a>
            <a
                href="#"
                className="dropdown-item"
                onClick={props.onLogout}
            >Logout</a>
        </div>
    );
}

export default UserMenu;