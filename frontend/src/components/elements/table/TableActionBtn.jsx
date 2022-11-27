import Link from "next/link";

const TableActionBtn = ({ color='btn-ghost-primary', icon,href,onClick}) => {
    return (
             <a href={href} className={`btn btn-sm text-center ${color}`} onClick={onClick}>
                <span className="align-middle my-auto" title="delete" style={{marginRight: "3px"}}>
                    {icon}
                </span>
            </a>
    );
}

export default TableActionBtn;