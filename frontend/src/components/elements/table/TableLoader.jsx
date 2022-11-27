import Spinner from "../Spinner";

const TableLoader = ({colSpan}) => {
    return (
        <tr>
            <td className="text-center" colSpan={colSpan}>
                <Spinner className="text-primary border-2"/> Loading...
            </td>
        </tr>
    );
}

export default TableLoader;