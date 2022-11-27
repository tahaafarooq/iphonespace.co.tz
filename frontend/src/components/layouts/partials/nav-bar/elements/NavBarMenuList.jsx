import {
    IconAffiliate,
    IconBook, IconBook2,
    IconBuildingSkyscraper, IconGridPattern,
    IconHome, IconLayout, IconLayoutGrid,
    IconShieldCheck,
    IconSitemap,
    IconUsers
} from "@tabler/icons";
import NavBarMenu from "./NavBarMenu";
import NavBarMegaMenu from "./NavBarMegaMenu";

const menus = [
    {
        isMega:false,
        name:'Home',
        href: '/',
        icon: <IconHome/>
    },
    {
        isMega:false,
        name:'Products',
        href: '/products',
        icon: <IconLayoutGrid/>
    },
]
const NavBarMenuList = (props) => {

    return (
        <ul className="navbar-nav">
            {
                menus.map((menu,index)=>{
                    if (menu.isMega) {
                        return <NavBarMegaMenu key={index} closeNavBar={props.closeNavBar} {...menu} />
                    }
                    return <NavBarMenu key={index} closeNavBar={props.closeNavBar} {...menu}>
                        {menu.name}
                    </NavBarMenu>
                })
            }
        </ul>
    );
}

export default NavBarMenuList;