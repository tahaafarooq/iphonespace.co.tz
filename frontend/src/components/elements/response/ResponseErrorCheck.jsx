import React from 'react';
import {IconAlertCircle, IconAlertTriangle} from "@tabler/icons";
import Spinner from "../Spinner";
import {useRouter} from "next/router";
import logout from "../../../utils/logout";

const ResponseErrorCheck = ({data,error,children}) => {
    const router = useRouter();

    if (error){
        if (error.status === 401){
            logout().then((user)=>{
                router.push("/login")
            })
        }

        return <div className="card-body">
            <div style={{display:'flex'}}><span className="mx-auto text-danger"><IconAlertTriangle/> Error on loading!</span> </div>
        </div>
    }
    if (!data){
        return <div className="card-body">
            <div style={{display:'flex'}}><span className="mx-auto"><Spinner className="text-primary border-2"/></span> </div>
        </div>
    }
    if (!data.success)
    {
        return  <div className="card-body">
            <div style={{display:'flex'}}><span className="mx-auto"><IconAlertCircle/> {data.message}</span> </div>
        </div>
    }
    return (
        <>
            {children}
        </>
    )
};

export default ResponseErrorCheck;