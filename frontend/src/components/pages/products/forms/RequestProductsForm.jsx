/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 11:06 AM
 */
import TextArea from "../../../elements/forms/TextArea";
import {httpMethod} from "../../../../constatnt/http";
import useSubmitForm from "../../../../hooks/form/useSubmitForm";
import useForm from "../../../../hooks/form/useForm";
import {IconReport} from "@tabler/icons";
import Spinner from "../../../elements/Spinner";
import ModalCancelBtn from "../../../elements/modal/ModalCancelBtn";
import ModalActionBtn from "../../../elements/modal/ModalActionBtn";

const fields = {
    'message':''
}
const RequestProductsForm = ({onCloseModal}) => {
    const {
        submitForm,
        submitting,
        validationError,
        done
    } = useSubmitForm(
        {
            url:'/api/products/request',
            method: httpMethod.POST,
            clearForm:true,
        })

    const {formFields,onChange,onSubmit} = useForm(submitForm,fields)
    return (
        <form onSubmit={(e)=>onSubmit(e)} autoComplete="off">
            <div className="card-body">
                <TextArea onChange={onChange} validationError={validationError} value={formFields.message} name='message' label='Message' placeholder='Enter Your Message'/>
            </div>
            <div className="card-footer">
                <div className="d-flex">
                    <ModalCancelBtn to="#" onCloseModal={onCloseModal}/>
                    <ModalActionBtn disabled={submitting}>
                        { submitting ? <Spinner className="px-1" /> : <IconReport/> }
                        { submitting ? " Requesting Phone..." : " Request Phone"}
                    </ModalActionBtn>
                </div>
            </div>
        </form>
    );
};

export default RequestProductsForm;