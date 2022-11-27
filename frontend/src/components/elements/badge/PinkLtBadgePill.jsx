/**
 * Created by GIFT MSIGWA.
 * Project : dashboard
 * GitHub username: gisacc54
 * Date: 07/10/2022
 * Time: 1:51 PM
 */

import {FaFemale} from "react-icons/fa";

const PinkLtBadgePill = ({content="Female",icon=<FaFemale />}) => {
    return (
        <span className="badge badge-pill bg-pink-lt me-1" style={{backgroundColor: 'rgba(218,90,238,0.15)!important'}}>
            <span className="my-auto align-middle mr-2" style={{marginRight:"3px"}}>
                {icon}
            </span>
            <span className="align-middle">
                {content}
            </span>
        </span>
    );
}
export default PinkLtBadgePill;