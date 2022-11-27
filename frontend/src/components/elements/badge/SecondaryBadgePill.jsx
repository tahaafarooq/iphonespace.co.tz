import {HiAcademicCap} from "react-icons/hi";

const SecondaryBadgePill = ({content="Graduated",icon=<HiAcademicCap />}) => {
    return (
        <span className="badge badge-pill text-center" style={{background: "rgba(98, 101, 103,.2)",color: '#626567'}}>
            <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                {icon}</span>
            <span className="align-middle">
                {content}
            </span>
        </span>
    );
}

export default SecondaryBadgePill;