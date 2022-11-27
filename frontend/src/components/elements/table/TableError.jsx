import {IconAlertTriangle} from "@tabler/icons";

const TableError = ({colSpan}) => {
    return (
        <tr>
            <td className="text-center " colSpan={colSpan}>
                <span className="text-danger"><IconAlertTriangle /></span> Loading error
            </td>
        </tr>
    );
}

export default TableError;