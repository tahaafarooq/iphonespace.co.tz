import {useState} from "react";

const useForm = (callback,initState={}) => {

    const [formFields,setFormField] = useState(initState);
    const onChange = (event,value,label,type) => {
        if (value === undefined)
            value = event.target.value
        if (label !== undefined){
            if (type==="int")
                value = parseInt(value)
            setFormField({...formFields,[label]:value});
            return
        }
        if (type==="int")
            value = parseInt(value)
        setFormField({...formFields,[event.target.name]:value});
    }
    const cleanFields = () => {
      setFormField(initState)
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        await callback(formFields,cleanFields)
    }

    const updateState = (state) => {
      setFormField(state)
    }


    return {
        formFields,
        onChange,
        onSubmit,
        updateState,
    }
}

export default useForm