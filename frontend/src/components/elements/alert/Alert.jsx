import {IconAlertCircle, IconAlertTriangle, IconCheck} from "@tabler/icons";

const Alert = ({title,type,message,onClearRepMessage,style}) => {
    var color = 'alert-secondary'
    var icon =``

    switch (type){
        case 'error':
            color = 'alert-danger'
            icon = <IconAlertTriangle className="icon alert-icon"/>
            title = 'Error'
            break
        case 'success':
            color = 'alert-success'
            icon = <IconCheck className="icon alert-icon"/>
            title = 'Success'
            break
        case 'warning':
            color ='alert-warning'
            icon = <IconAlertCircle className="icon alert-icon"/>
            title = 'Warning'
            break
    }

    return (
        <div className={`alert alert-dismissible ${color}`} role="alert" style={style}>
            <div className="d-flex small">
                <div >
                    {icon}
                </div>
                <div>
                    <h4 className="alert-title">{title}!</h4>
                    <div className="text-muted">{message}</div>
                </div>
            </div>
            <a className="btn-close"  onClick={onClearRepMessage}/>
        </div>
    );
}

export default Alert;