export default function Form({name,label, type, value, onChange}) {
  return (
    <div className="form">
        <label htmlFor={name}>{label}</label>
        <input  type={type} value={value} name={name} onChange={onChange}/>
    </div>
  )
}
