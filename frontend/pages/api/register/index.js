/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 26/11/2022
 * Time: 3:42 PM
 */

import nc from 'next-connect'
import gateWay from "../../../src/utils/gateWay";
import {DefaultHeader, httpMethod} from "../../../src/constatnt/http";

const handler = nc()
    .post(async (req, res) => {


        const response = await gateWay({
            method: httpMethod.POST,
            url: `${process.env.USER_MANAGEMENT_BASE_URL}/register`,
            body: req.body
        })
        res.status(response.statusCode).json(response)

        // res.json({
        //     success: true,
        //     message: 'You are successfully registered in'
        // });
    });

export default handler;