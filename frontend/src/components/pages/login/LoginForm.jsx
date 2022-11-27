import useForm from "../../../hooks/form/useForm";
import {useEffect, useState} from "react";
import getClientInfo from "../../../utils/getClientInfo";
import Spinner from "../../elements/Spinner";
import {IconEye, IconLock} from "@tabler/icons";
import Alert from "../../elements/alert/Alert";
import useSubmitForm from "../../../hooks/form/useSubmitForm";
import {httpMethod} from "../../../constatnt/http";

const fields = {
    email:'',
    password:'',
    remember:false,

}

const LoginForm = ({onSuccess,className}) => {


    const {
        submitForm,
        submitting,
        validationError,
        done
    } = useSubmitForm(
        {
            url:'/api/login',
            method: httpMethod.POST,
            clearForm:true,
        })

    const {formFields,onChange,onSubmit} = useForm(submitForm,fields)

    return (
        <>
            <form className="card card-md" onSubmit={(e)=>onSubmit(e)} autoComplete="off">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Login to your account</h2>
                    {/*{resp}*/}
                    <div className="mb-3">
                        <label className="form-label">User Email</label>
                        <input
                            type="email"
                            value={formFields.email}
                            onChange={(e) => onChange(e)}
                            name="email"
                            className="form-control"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">
                            Password
                            <span className="form-label-description">
                                  <a href="#">I forgot password</a>
                                </span>
                        </label>
                        <div className="input-group input-group-flat">
                            <input
                                type="password"
                                value={formFields.password}
                                onChange={(e) => onChange(e)}
                                name="password"
                                className="form-control"
                                placeholder="Enter your Password"
                                autoComplete="off"/>
                            <span className="input-group-text">
                              <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                              <IconEye/>
                              </a>
                            </span>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="form-check">
                            <input
                                type="checkbox"
                                onChange={(e)=>{
                                    onChange(e,!formFields.remember)
                                }}
                                checked={formFields.remember}
                                name='remember'
                                className="form-check-input"
                            />
                            <span className="form-check-label">Remember me on this device</span>
                        </label>
                    </div>
                    <div className="form-footer">
                        <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
                             <span className="" style={{paddingRight:"4px"}}>
                                 { submitting?<Spinner/>:<IconLock/> }
                             </span>
                            { submitting ? "Authenticating...": "Sign in"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginForm;