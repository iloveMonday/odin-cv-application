export default function InputField({
    label,
    id,
    name,
    type = "text",
    value,
    onChange,
}){
    return(
        <div className="input-field">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} value={value} onChange={onChange} />
        </div>
    );
}