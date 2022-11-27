import {useState} from "react";
import {useRouter} from "next/router";
import {useToasts} from "react-toast-notifications";
import {useSWRConfig} from "swr";

const UseSubmitForm = ({method= 'POST',redirectTo= '',url,clearForm = false,mutateUrl = ''}) => {
    const [submitting,setSubmitting] = useState(false)

    const { mutate } = useSWRConfig()

    const { addToast } = useToasts();

    const [haveError,setHaveError] = useState(false)
    const [validationError,setValidationError] = useState(false)
    const [haveSuccess,setHaveSuccess] = useState(false)

    const [respMessage,setRespMessage] = useState('')
    const [done,setDone] = useState(false)


    const router = useRouter()

    const submitForm = async (fields,clearFields) => {
        setSubmitting(true)
        var resp = await fetch(
            url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields),
            });
        var respJson = await resp.json()
        if (!respJson.success){
            if (respJson.response){
                setValidationError(respJson.response)
            }else {
                setHaveError(true)
                setHaveSuccess(false)

                setRespMessage(respJson.message)

                setValidationError('')

                addToast(respJson.message,{
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        }else {
            setHaveSuccess(true)
            setHaveError(false)
            setRespMessage(respJson.message)
            setValidationError('')
            setDone(true)
            addToast(respJson.message,{
                appearance: 'success',
                autoDismiss: true,
            })

            if (mutateUrl!==''){

                mutate(mutateUrl)
            }

            if (clearForm)
                clearFields()
            if (redirectTo !== ''){
                setTimeout(()=>{
                    router.push(redirectTo)
                },2000)
            }

        }
        setSubmitting(false)
    }

    const onClearRepMessage = () => {
        setHaveError(false);
        setHaveSuccess(false);
        setRespMessage('');
    }


    return{
        submitForm,
        onClearRepMessage,
        submitting,
        haveError,
        haveSuccess,
        respMessage,
        validationError,
        done
    }
}

export default UseSubmitForm;