import cookie from "cookie";

export default function getToken(req) {
    // Parse the cookies on the request
    var cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    var data = cookies.data;

    if (!data){
        res.statusCode(401).json({
            success: false,
            tokens: null
        })
    }

    const { token } = JSON.parse(data)

    return {
        success: true,
        token
    }
}