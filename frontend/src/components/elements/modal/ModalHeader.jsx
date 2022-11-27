const ModalHeader = ({title,onCloseModal}) => {
    return (
        <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onCloseModal}></button>
        </div>
    );
}

export default ModalHeader;