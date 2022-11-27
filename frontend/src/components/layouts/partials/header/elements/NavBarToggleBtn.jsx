const NavBarToggleBtn = ({onToggleNavBar,openNavBar}) => {
    return (
        <button onClick={onToggleNavBar} className="navbar-toggler" type="button" aria-expanded={openNavBar} data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}

export default NavBarToggleBtn;