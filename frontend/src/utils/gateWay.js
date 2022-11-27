import {DefaultHeader} from "../constatnt/http";

const GateWay = async ({method, url, token,body}) => {
    const options = {
        method: method,
        headers: {
            ...DefaultHeader,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(url,
        options
    )
        .catch((e) => {
            return {
                success: false,
                message: "Internal server error",
                statusCode: 500
            }
        });
    if (!response.ok && response.statusCode === 500){
        return response
    }
    var resp = await response.json()
    return {...resp,statusCode:response.status}
}

export default GateWay;