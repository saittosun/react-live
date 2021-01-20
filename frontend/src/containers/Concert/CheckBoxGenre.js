import React, { useEffect, useState } from 'react';
import CheckBox from './CheckBox';

const items = [
    'Rock',
    'Pop',
    'Jazz',
    'Folk',
    'Classical',
    'Popular',
    'Electronic',
    'Instrumental',
    'Independent',
];

const CheckBoxGenre = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState()
    useEffect(() => {
        setSelectedCheckboxes(new Set())
    }, [])

    const toggleCheckbox = label => {
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
    }

    const handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }

    const createCheckbox = label => (
        <CheckBox
            label={label}
            handleCheckboxChange={toggleCheckbox}
            key={label}
        />
    )

    const createCheckboxes = () => (
        items.map(createCheckbox)
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={handleFormSubmit}>
                        {createCheckboxes()}
                        <button className="btn btn-default" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckBoxGenre;
