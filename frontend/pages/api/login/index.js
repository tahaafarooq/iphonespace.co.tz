/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 26/11/2022
 * Time: 3:18 PM
 */
import nc from 'next-connect'
import gateWay from "../../../src/utils/gateWay";
import {httpMethod} from "../../../src/constatnt/http";
import {env} from "eslint-config-next";

const handler = nc()
    .post(async (req, res) => {

        const response = await gateWay({
            method: httpMethod.POST,
            url: `${process.env.USER_MANAGEMENT_BASE_URL}/login`,
            body: req.body,
        });


        res.json({
            success: true,
            message: 'You are successfully logged in'
        });
    })

export default handler;