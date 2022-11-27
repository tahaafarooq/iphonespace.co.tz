import Required from "./Required";

const TextArea = ({label,placeholder,validationError,name,onChange,required,col = '12',rows=3,value}) => {

    if (validationError === undefined){
        console.error(`pleas add validationError props at  ${name}`)
        return <div/>
    }

    return (
        <div className={`mb-3 col-${col}`}>
            <label className="form-label">{label} {required?<Required/>:''}</label>
            <textarea
                value={value}
                rows={rows}
                className={`form-control ${validationError[name]?'is-invalid':''}`}
                name={name}
                onChange={onChange}
                placeholder={placeholder} required={required}></textarea>
            <div className="text-danger">{validationError[name]}</div>
        </div>
    );
}

export default TextArea;