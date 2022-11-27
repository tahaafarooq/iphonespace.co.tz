import {IconLayout2, IconList} from "@tabler/icons";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";


const NavBarMegaMenu = ({closeNavBar,name,subMenus,closeSubmenu,toggleSubmenu,icon}) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const router = useRouter()
    let selected = false
    subMenus.map((menu)=>{
        if(router.pathname===menu.href){
            selected = true
        }
    })
    return (
        <li className={`nav-item dropdown ${selected?'active':''}`}>
            <a className={`nav-link dropdown-toggle ${showSubmenu?'show':''}`} href="#navbar-layout" onClick={()=>setShowSubmenu(!showSubmenu)} data-bs-toggle="dropdown"
               data-bs-auto-close="outside" role="button" aria-expanded="true">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        {icon}
                    </span>
                    <span className="nav-link-title">
                          {name}
                    </span>
            </a>
            <div className={`dropdown-menu ${showSubmenu?'show':''}`} data-bs-popper="none">
                <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">

                        {
                            subMenus.map((subMenu,index)=>{

                                return (
                                    <Link key={index} href={subMenu.href}>
                                        <a  className={`dropdown-item ${router.pathname===subMenu.href?'active':''}`} onClick={()=>{
                                            setShowSubmenu(false)
                                            closeNavBar()
                                        }}>
                                            {subMenu.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </li>
    );
}

export default NavBarMegaMenu;