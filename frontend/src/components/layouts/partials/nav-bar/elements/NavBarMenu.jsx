import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

const NavBarMenu = ({href,children,icon,closeNavBar}) => {

    const router = useRouter()
    return (
        <li className={`nav-item  ${router.pathname===href?'active':''}`}>
           <Link href={href}>
               <a className="nav-link" onClick={()=>{

                   closeNavBar()
               }}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        {icon}
                    </span>
                   <span className="nav-link-title">
                        {children}
                    </span>
               </a>
           </Link>
        </li>
    );
}

export default NavBarMenu;