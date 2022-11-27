import {IconHome, IconSearch} from "@tabler/icons";
import NavBarMenuList from "./elements/NavBarMenuList";

const NavBar = (props) => {
    return (
        <div className="navbar-expand-md">
            <div className={`collapse navbar-collapse ${props.openNavBar?'show':''}`} id="navbar-menu">
                <div className="navbar navbar-light">
                    <div className="container-xl">
                        <NavBarMenuList closeNavBar={props.closeNavBar}/>
                        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form action="." method="get">
                                <div className="input-icon">
                                        <span className="input-icon-addon">
                                            <IconSearch/>
                                        </span>
                                    <input type="text" className="form-control" placeholder="Search…" aria-label="Search in website"/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;