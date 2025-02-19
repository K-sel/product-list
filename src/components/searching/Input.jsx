function Input({value, placeholder, onChange}) {

    return <div className="form-search">
        <input
            type="search"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

export default Input;