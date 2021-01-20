import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const SelectCountry = ({ onChange, value, name }) => {
    //Here below is disabled and we use the value for selected ans onChange for setSelected 
    // (sent props via react-hook-forms Controller component) from UpdateProfile.js and ConcertForm.js
    // const [value, setValue] = useState('be');

    return (
        <div style={{ marginBottom: "10px" }}>
            <h6 className="text-fields">Select Country</h6>
            <CountrySelect
                value={value}
                onChange={onChange}
                // valueAs='id'
                // flush={false}
                // countryLabelFormatter={country => `${country.name} (${country.alpha2})`}
                formControlProps={{
                    name: "CountryName",
                    className: "form-control email text-fields",
                    onKeyPress: (e) => { e.key === 'Enter' && e.preventDefault(); }
                }}
                classPrefix='country-select'
            />
        </div>
    );

};
export default SelectCountry