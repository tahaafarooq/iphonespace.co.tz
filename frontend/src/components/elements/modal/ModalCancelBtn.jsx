const ModalCancelBtn = ({to,onCloseModal}) => {
    return (
        <a href={to} className="btn btn-link link-secondary" data-bs-dismiss="modal" onClick={(e)=>{
            e.preventDefault()
            onCloseModal()
        }}>
            Cancel
        </a>
    );
}

export default ModalCancelBtn;