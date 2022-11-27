import {IconPlus} from "@tabler/icons";

const ModalActionBtn = ({children,disabled,color='btn-primary',onClick}) => {
    return (
        <button onClick={onClick} type="submit" className={`btn ms-auto ${color}`} data-bs-dismiss="modal" disabled={disabled}>
            {children}
        </button>
    );
}

export default ModalActionBtn;