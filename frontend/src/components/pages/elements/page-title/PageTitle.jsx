import {IconPlus} from "@tabler/icons";

const PageTitle = ({preTitle,title,children}) => {
    return (
        <div className="container-xl">
            <div className="page-header d-print-none">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="page-pretitle">
                            {preTitle}
                        </div>
                        <h2 className="page-title">
                            {title}
                        </h2>
                    </div>
                {/*  Page title actions  */}

                    <div className="col-auto ms-auto d-print-none">
                        <div className="btn-list">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;