import React from 'react'

const Select = ({value, onChange, placeholder, options}) => {
    return (
        <select value={value} onChange={onChange}>
            <option disabled value="">{placeholder}</option>
            {
                options.map(option => {
                    return (
                        <option value={option.value}>{option.name}</option>
                    ) 
                    }
                )
            }
        </select>
    )
}

export default Select;
