import {IconPlus} from "@tabler/icons";

const PageTitleActionBtn = ({children,icon}) => {
    return (
        <>
            <a href="#" className="btn btn-primary d-none d-sm-inline-block">
                {icon}
                {children}
            </a>
            <a href="#" className="btn btn-primary d-sm-none btn-icon">
                {icon}
            </a>
        </>
    );
}

export default PageTitleActionBtn;