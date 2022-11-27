import {useEffect, useState} from "react";
import {httpMethod} from "../constatnt/http";
import {useToasts} from "react-toast-notifications";
import {useRouter} from "next/router";
import {useSWRConfig} from "swr";

const useFetch =  ({method= 'GET',url,data = ``,mutateUrl = '' }) => {

    const { mutate } = useSWRConfig()

    const [processing,setProcessing] = useState(false)

    const { addToast } = useToasts();

    const [haveSuccess,setHaveSuccess] = useState(false)
    const [done,setDone] = useState(false)


    const router = useRouter()

    const sendRequest = async () => {
        setProcessing(true)
        var resp = await fetch(
            url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        var respJson = await resp.json()
        if (!respJson.success){
                setHaveSuccess(false)
                addToast(respJson.message,{
                    appearance: 'error',
                    autoDismiss: true,
                })
        }else {
            /*---------------------------------------------------------------------------
            * 3. If the request is successful then set have success and toast success and
            *    Mutate data if mutate url is provided
            * ---------------------------------------------------------------------------*/
            setHaveSuccess(true)
            addToast(respJson.message,{
                appearance: 'success',
                autoDismiss: true,
            })

            if (mutateUrl !== ''){
                mutate(mutateUrl)
            }
        }
        setProcessing(false)
        setDone(true)
    }


    return{
        processing,
        haveSuccess,
        sendRequest,
        done
    }
}

export default useFetch