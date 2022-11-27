
import Required from "./Required";

const Select = ({options,label,placeholder,validationError,name,onChange,required,value,col = '12'}) => {
    if (validationError === undefined){
        console.error("pleas add validationError props")
        return <div></div>
    }


    return (
        <div  className={`mb-3 col-${col}`}>
            <label className="form-label">{label} {required?<Required/>:''}</label>
            <select
                className={`form-control 
                ${validationError[name]?'is-invalid':''}`}
                defaultValue={value} name={name}
                onChange={onChange}
                required={required}>
                <option value="" >{placeholder}</option>
                {
                    options.map((option,index)=>{
                        return <option
                            key={index}
                            value={option.value}>
                            {option.label}
                        </option>
                    })
                }
            </select>
            <div className="text-danger">{validationError[name]}</div>
        </div>
    );
}

export default Select;