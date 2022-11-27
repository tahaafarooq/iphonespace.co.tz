import {FaMale} from "react-icons/fa";

/**
 * Created by GIFT MSIGWA.
 * Project : dashboard
 * GitHub username: gisacc54
 * Date: 07/10/2022
 * Time: 1:47 PM
 */

const CyanLtBadgePill = ({content="Male",icon=<FaMale />}) => {
    return (
        <span className="badge badge-pill bg-cyan-lt" style={{background: 'rgba(12,163,173,0.1)!important'}}>
             <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                {icon}</span>
            <span className="align-middle">
                {content}
            </span>
        </span>
    );
}

export default CyanLtBadgePill