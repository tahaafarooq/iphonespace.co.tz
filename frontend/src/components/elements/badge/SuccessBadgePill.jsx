import {BsCheckCircleFill} from "react-icons/bs";

const SuccessBadgePill = ({content="Active",icon=<BsCheckCircleFill />}) => {
    return (
        <span className="badge badge-pill text-center" style={{background: "rgba(86,154,84,.2)",color: '#2fb344'}}>
                        <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                            {icon}</span>
                        <span className="align-middle">
                            {content}
                        </span>
                    </span>
    );
}

export default SuccessBadgePill;