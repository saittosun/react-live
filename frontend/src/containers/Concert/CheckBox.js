import React, { useState } from 'react';

const CheckBox = ({ handleCheckboxChange, label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckboxChange = () => {
        setIsChecked(p => !p)
        handleCheckboxChange(label);
    }

    return (
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                {label}
            </label>
        </div>
    );
}

export default CheckBox;
