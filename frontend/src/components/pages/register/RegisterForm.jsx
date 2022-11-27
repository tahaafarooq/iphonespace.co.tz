import useForm from "../../../hooks/form/useForm";
import {useEffect, useState} from "react";
import getClientInfo from "../../../utils/getClientInfo";
import Spinner from "../../elements/Spinner";
import {IconEye, IconLock} from "@tabler/icons";
import Alert from "../../elements/alert/Alert";
import useSubmitForm from "../../../hooks/form/useSubmitForm";
import {httpMethod} from "../../../constatnt/http";
import Select from "../../elements/forms/Select";
import Input from "../../elements/forms/Input";

const fields = {
    email:'',
    role:'',
    location:'',
    phone_number:'',
    password:'',
    confirm_password:'',
    remember:false,
}

const rolesOptions = [
    {
        label:'Seller',
        value:'Seller'
    },
    {
        label:'Buyer',
        value:'Buyer'
    }
    ]

const RegisterForm = ({onSuccess,className}) => {
    const {
        submitForm,
        submitting,
        validationError,
        done
    } = useSubmitForm(
        {
            url:'/api/register',
            method: httpMethod.POST,
            clearForm:true,
        })

    const {formFields,onChange,onSubmit} = useForm(submitForm,fields)

    return (
        <>
            <form className="card card-md" onSubmit={(e)=>onSubmit(e)} autoComplete="off">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Create IphoneSpace account</h2>
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter Your Email"
                        value={formFields.email}
                        validationError={validationError}
                        name="email"
                        onChange={onChange}
                        required
                    />
                    <Input
                        type="phone_number"
                        label="Phone Number"
                        placeholder="Enter Your Phone Number"
                        value={formFields.phone_number}
                        validationError={validationError}
                        name="phone_number"
                        onChange={onChange}
                        required
                    />
                    <Select
                        label="Select Role"
                        name='role'
                        options={rolesOptions}
                        value={formFields.role}
                        onChange={onChange}
                        validationError={validationError}
                        placeholder="--Select Role--" required/>
                    <Input
                        type="location"
                        label="Location"
                        placeholder="Enter Your Location"
                        value={formFields.location}
                        validationError={validationError}
                        name="location"
                        onChange={onChange}
                        required
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter Your Password"
                        value={formFields.password}
                        validationError={validationError}
                        name="password"
                        onChange={onChange}
                        required
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm Your Password"
                        value={formFields.confirm_password}
                        validationError={validationError}
                        name="confirm_password"
                        onChange={onChange}
                        required
                    />
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
                        <button type="submit" className="btn btn-primary w-100" /**disabled={submitting}*/>
                             <span className="" style={{paddingRight:"4px"}}>
                                 { submitting?<Spinner/>:<IconLock/> }
                             </span>
                            { submitting ? "Creating Account...": "Sign up"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;