
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import OverlyLoader from "../ui/OverlyLoader";
import Header from "./partials/header/Header";
import NavBar from "./partials/nav-bar/NavBar";
import logout from "../../utils/logout";
import Footer from "./partials/footer/Footer";

const MainLayout = (props) => {
    const [loadingPage,setLoadingPage] = useState(true)
    const [user,setUser] = useState({})
    const [openNavBar,setOpenNavBar] = useState(false)

    const router = useRouter();

    const onLogout = () => {
        logout().then((user)=>{
            router.push("/login")
        })
    }

    const onToggleNavBar = () => {
        setOpenNavBar(!openNavBar)
    }
    const closeNavBar = () => {
        setOpenNavBar(false)
    }

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
    //             setUser(user)
    //             setLoadingPage(false)
    //         }else {
    //             router.push("/login")
    //         }
    //     });
    //
    // },[])
    //
    //
    // if (loadingPage)
    //     return (
    //         <OverlyLoader/>
    //     );
    return (
        <>
            <div className="wrapper d-flex flex-column" style={{minHeight: "100vh"}}>
                <Header
                    onLogout={onLogout}
                    onToggleNavBar={onToggleNavBar}
                    openNavBar={openNavBar}
                />
                <NavBar openNavBar={openNavBar} closeNavBar={closeNavBar}/>
                <div className="page-wrapper">
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default MainLayout;