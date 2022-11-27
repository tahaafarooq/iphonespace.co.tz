import UserMenu from "./UserMenu";
import {useState} from "react";

const UserAccountCard = (props) => {
    const [isOpenUserMenu,setOpenUserMenu ] = useState(false)
    return (
        <div className="nav-item dropdown">
            <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0 show"
                data-bs-toggle="dropdown"
                onClick={()=>setOpenUserMenu(!isOpenUserMenu)}
                aria-label="Open user menu" aria-expanded="true">
                            <span className="avatar avatar-sm"
                                  style={{backgroundImage: `url('/images/000m.jpg')`}}></span>
                <div className="d-none d-xl-block ps-2">
                    <div>Paweł Kuna</div>
                    <div className="mt-1 small text-muted">UI Designer</div>
                </div>
            </a>
            {
                isOpenUserMenu?
                    <UserMenu onLogout={props.onLogout}/> :
                    ''
            }
        </div>
    );
}

export default UserAccountCard;