import nc from 'next-connect'
import cookie from "cookie";

const handler = nc().get((req,res)=>{
    // Parse the cookies on the request
    var cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    var data = cookies.data;
    if (data){
        const { user } = JSON.parse(data)
        res.json(user)
        return;
    }
    res.json(null)
})

export default handler;