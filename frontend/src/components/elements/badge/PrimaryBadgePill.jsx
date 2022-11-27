import {BsCircleFill} from "react-icons/bs";

const PrimaryBadgePill = ({content="Continue",icon=<BsCircleFill />}) => {
    return (
        <span className="badge badge-pill text-center" style={{background: "rgba(32, 107, 196,.2)",color: '#206bc4'}}>
                        <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                            {icon}</span>
                        <span className="align-middle">
                            {content}
                        </span>
                    </span>
    );
}

export default PrimaryBadgePill;