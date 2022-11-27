import Required from "./Required";

const Input = ({type='text',label,placeholder,validationError,name,onChange,required,col = '12',value,className}) => {

    if (validationError === undefined){
        console.error(`pleas add validationError props at  ${name}`)
        return <div/>
    }

    return (
        <div className={`mb-3 col-${col}`}>
            <label className="form-label">{label} {required?<Required/>:''}</label>
            <input
                type={type}
                value={value}
                className={`form-control ${className} ${validationError[name]?'is-invalid':''}`}
                name={name}
                onChange={onChange}
                placeholder={placeholder} required={required} />
            <div className="text-danger">{validationError[name]}</div>
        </div>
    );
}

export default Input;