import Center from "../../tags/Center";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Link from "next/link";
import {IconEye} from "@tabler/icons";

export default function MainAuthLayout({ children }) {
    return (
        <div className="page page-center">
            <div className="container-tight py-4">
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark">
                        <img src="images/logo.svg" height="36" alt=""/>
                    </a>
                </div>
                {children}

                <div className="text-center text-muted mt-3 text-xs" style={{fontSize: "9pt"}}>
                    © 2022 <b>Iphone Space</b>  <em > v1.0.0-beta1 </em>
                </div>
            </div>
        </div>
    );
}