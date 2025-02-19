function CheckBox({checked, label, onChange}) {
    return <div className="form-check">
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}/>
        {label}
        </label>
    </div>
}

export default CheckBox;