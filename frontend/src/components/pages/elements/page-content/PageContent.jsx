const PageContent = (props) => {
    return (
        <div className="page-body">
            <div className="container-xl">
                {props.children}
            </div>
        </div>
    );
}

export default PageContent;