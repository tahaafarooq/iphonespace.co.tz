import UserAccountCard from "./elements/UserAccountCard";
import Cart from "./elements/Cart";
import HeaderBrandLogo from "./elements/HeaderBrandLogo";
import NavBarToggleBtn from "./elements/NavBarToggleBtn";

const Header = (props) => {
    return (
        <header className="navbar navbar-expand-md navbar-light d-print-none">
            <div className="container-xl">
                <NavBarToggleBtn onToggleNavBar={props.onToggleNavBar} openNavBar={props.openNavBar}/>
                <HeaderBrandLogo/>
                <div className="navbar-nav flex-row order-md-last">
                    <Cart/>
                    <UserAccountCard onLogout={props.onLogout}/>
                </div>
            </div>
        </header>
    );
}

export default Header;