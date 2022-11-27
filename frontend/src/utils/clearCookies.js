import cookie from "cookie";

const clearCookies = (res) => {
    res.setHeader('Set-Cookie', cookie.serialize('data', "", {
        httpOnly: true,
        expires: new Date(0),
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path:"/"
    }));
}

export default clearCookies