/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 26/11/2022
 * Time: 3:48 PM
 */

import LoginForm from "../../src/components/pages/login/LoginForm";
import MainAuthLayout from "../../src/components/layouts/auth/MainAuthLayout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import OverlyLoader from "../../src/components/ui/OverlyLoader";
import RegisterForm from "../../src/components/pages/register/RegisterForm";

const Index = () => {
    const [loadingPage,setLoadingPage] = useState(true)
    const [success,setSuccess] = useState(false)

    const router = useRouter();



    return (
        <MainAuthLayout
            mainTitle="Welcome!"
            subTitle="Create IphoneSpace account"
            footerText="Forgot your password?"
            footerHref="/forgot-password">
            <RegisterForm />
        </MainAuthLayout>
    );
}

Index.getLayout = function (page) {
    return page
}

export default Index;