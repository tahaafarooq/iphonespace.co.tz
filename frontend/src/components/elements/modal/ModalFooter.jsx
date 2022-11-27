import {IconPlus} from "@tabler/icons";

const ModalFooter = (props) => {
    return (
        <div className="modal-footer">
            {props.children}
        </div>
    );
}

export default ModalFooter;