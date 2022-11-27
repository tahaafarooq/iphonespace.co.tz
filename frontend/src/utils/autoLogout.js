import clearCookies from "./clearCookies";
import {useRouter} from "next/router";

const autoLogout = (res) => {
    clearCookies(res)
}

export default autoLogout