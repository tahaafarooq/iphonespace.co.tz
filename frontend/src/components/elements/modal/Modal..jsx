import {IconPlus} from "@tabler/icons";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const Modal = ({onCloseModal,children,size='modal-lg'}) => {
    return (
        <>
            <div id="modal-blur" className="modal modal-blur fade show" tabIndex="-1" style={{display: 'block'}}
                 aria-modal="true" role="dialog" onClick={(e)=>{
                     if (e.target.id === 'modal-blur'){
                         onCloseModal()
                     }
            }}>
                <div className={`modal-dialog  mt-4 ${size}`} role="document">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show">

            </div>
        </>
    );
}

export default Modal;