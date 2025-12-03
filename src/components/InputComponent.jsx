export default function InputField({
    label,
    id,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
}){
    return(
        <div className="input-field">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}