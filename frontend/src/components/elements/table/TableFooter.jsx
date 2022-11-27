import {IconChevronLeft, IconChevronRight} from "@tabler/icons";

const TableFooter = (props) => {
    return (
        <div className="card-footer d-flex align-items-center">
            <p className="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
            <ul className="pagination m-0 ms-auto">
                <li className="page-item disabled">
                    <a className="page-link" href="src/components/elements/table/TableFooter#" tabIndex="-1" aria-disabled="true">
                        <IconChevronLeft/>
                        prev
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="src/components/elements/table/TableFooter#">1</a></li>
                <li className="page-item active"><a className="page-link" href="src/components/elements/table/TableFooter#">2</a></li>
                <li className="page-item"><a className="page-link" href="src/components/elements/table/TableFooter#">3</a></li>
                <li className="page-item"><a className="page-link" href="src/components/elements/table/TableFooter#">4</a></li>
                <li className="page-item"><a className="page-link" href="src/components/elements/table/TableFooter#">5</a></li>
                <li className="page-item">
                    <a className="page-link" href="src/components/elements/table/TableFooter#">
                        <IconChevronRight/>
                        next
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default TableFooter;