import {IconAlertCircle} from "@tabler/icons";

const TableNoData = ({colSpan,body='No available Data',icon = (<IconAlertCircle />)}) => {
    return (
        <tr>
            <td className="text-center" colSpan={colSpan}>
                <span className="text-info">{icon}</span> {body}
            </td>
        </tr>
    );
}

export default TableNoData;