import nc from "next-connect";
import clearCookies from "../../../src/utils/clearCookies";

const handler = nc().post((req,res)=>{
    clearCookies(res)
    res.json(null)
})

export default handler