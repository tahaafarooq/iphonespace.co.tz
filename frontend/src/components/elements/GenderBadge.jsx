/**
 * Created by GIFT MSIGWA.
 * Project : dashboard
 * GitHub username: gisacc54
 * Date: 11/10/2022
 * Time: 8:13 PM
 */

import React from 'react';
import CyanLtBadgePill from "./badge/CyanLtBadgePill";
import PinkLtBadgePill from "./badge/PinkLtBadgePill";

const GenderBadge = ({ gender }) => {
    if (gender === 'Male')
        return <CyanLtBadgePill/>
    else
        return <PinkLtBadgePill/>
};

export default GenderBadge;