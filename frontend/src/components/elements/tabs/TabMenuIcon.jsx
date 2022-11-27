import {IconList, IconShieldCheck, IconShieldLock} from "@tabler/icons";

const TabMenuIcon = ({children,className,tabIndex,currentTab,onClick}) => {
    return (
        <li className={`nav-item ${className}`} onClick={onClick}>
            <a href="src/components/elements/tabs/TabMenuIcon#" className={`nav-link ${currentTab === tabIndex?'active':''}`}
               data-bs-toggle="tab">
                {children}
            </a>
        </li>
    );
}

export default TabMenuIcon;