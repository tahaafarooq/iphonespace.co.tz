const TableTop = (props) => {
    return (
        <div className="card-body border-bottom py-3">
            <div className="d-flex">
                <div className="text-muted">
                    Show
                    <div className="mx-2 d-inline-block">
                        <input type="text" className="form-control form-control-sm" value="8"
                               size="3" aria-label="Invoices count" onChange={()=>{}}/>
                    </div>
                    entries
                </div>
                <div className="ms-auto text-muted">
                    Search:
                    <div className="ms-2 d-inline-block">
                        <input type="text" className="form-control form-control-sm"
                               aria-label="Search invoice" onChange={()=>{}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableTop;