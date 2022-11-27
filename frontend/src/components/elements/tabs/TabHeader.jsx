import {IconList, IconShieldCheck, IconShieldLock} from "@tabler/icons";

const TabHeader = ({children}) => {
    return (
        <ul className="nav nav-tabs nav-tabs-alt" data-bs-toggle="tabs">
            {children}
        </ul>
    );
}

export default TabHeader;