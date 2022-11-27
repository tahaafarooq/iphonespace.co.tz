import LoginForm from "../../src/components/pages/login/LoginForm";
import MainAuthLayout from "../../src/components/layouts/auth/MainAuthLayout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import OverlyLoader from "../../src/components/ui/OverlyLoader";

const Index = () => {
    const [loadingPage,setLoadingPage] = useState(true)
    const [success,setSuccess] = useState(false)

    const router = useRouter();

    // useEffect( ()=>{
    //     fetch(
    //         '/api/auth/check-auth-status',
    //         {
    //             method:'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         }).then((resp)=>resp.json()).then((user)=>{
    //         if (user){
    //             router.push("/")
    //         }else {
    //             setLoadingPage(false)
    //         }
    //     }).catch((e)=>{
    //         console.log(e)
    //     });
    //
    // },[success])

    const onSuccess = () => {
        setSuccess(true)
    }

    // if (loadingPage)
    //     return (
    //         <OverlyLoader/>
    //     );

    return (
        <MainAuthLayout
            mainTitle="Welcome!"
            subTitle="Log in to your SIS account"
            footerText="Forgot your password?"
            footerHref="/forgot-password">
            <LoginForm onSuccess={onSuccess}/>
        </MainAuthLayout>
    );
}

Index.getLayout = function (page) {
    return page
}

export default Index;