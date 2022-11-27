import {BsCheckCircleFill} from "react-icons/bs";

const DynamicBadgePill = ({content="",color,icon='' ,className}) => {
    return (
        <span className={`badge badge-pill text-center ${className}`} style={{background: color}}>
                        <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                            {icon}</span>
                        <span className="align-middle">
                            {content}
                        </span>
                    </span>
    );
}

export default DynamicBadgePill;