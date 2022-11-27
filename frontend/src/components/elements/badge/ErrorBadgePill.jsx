import { BsXCircleFill} from "react-icons/bs";

const ErrorBadgePill = ({content="Disabled",icon=<BsXCircleFill />}) => {
    return (
        <small className="badge badge-pill"
               style={{backgroundColor: 'rgba(214,57,57,.2)',color: '#d63939'}}>
                        <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                            {icon}</span>
            <span className="align-middle" >
                            {content}
                        </span>
        </small>
    );
}

export default ErrorBadgePill;