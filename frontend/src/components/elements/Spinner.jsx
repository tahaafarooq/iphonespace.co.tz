const Spinner = ({className = 'text-white'}) => {


    return (
        <div className={`spinner-border spinner-border-sm ${className}`} role="status" style={{marginRight:'4px'}}>

        </div>
    );
}

export default Spinner;