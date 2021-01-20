import React, { useState } from 'react';
import MultiSelect from "react-multi-select-component";
import "./SelectedInstrument.scss"


function SelectStyle({ onChange, value, name }) {
    const options = [
        { label: "African", value: "African" },
        { label: "Alternative", value: "Alternative" },
        { label: "Asian", value: "Asian" },
        { label: "Avant-garde", value: "Avant-garde" },
        { label: "Blues", value: "Blues" },
        { label: "Caribbean", value: "Caribbean" },
        { label: "Classical", value: "Classical" },
        { label: "Country music", value: "Country music" },
        { label: "Easy Listening", value: "Easy Listening" },
        { label: "Electronic", value: "Electronic" },
        { label: "Folk", value: "Folk" },
        { label: "Fusion", value: "Fusion" },
        { label: "Heavy metal", value: "Heavy metal" },
        { label: "Hip-hop / Rap", value: "Hip-hop / Rap" },
        { label: "Inspirational", value: "Inspirational" },
        { label: "Instrumental", value: "Instrumental" },
        { label: "Jazz", value: "Jazz" },
        { label: "Latin", value: "Latin" },
        { label: "Other", value: "Other" },
        { label: "Pop", value: "Pop" },
        { label: "R&B and soul", value: "R&B and soul" },
        { label: "Reggae", value: "Reggae" },
        { label: "Rock", value: "Rock" },
        { label: "Traditional", value: "Traditional" },
        { label: "Vocal", value: "Vocal" },
        { label: "World", value: "World" }
    ];

    // case insensitive search
    function filterOptions(options, filter) {
        if (!filter) {
            return options;
        }
        const re = new RegExp(filter, "i");
        return options.filter(({ value }) => value && value.match(re));
    }
    //Here below is disabled and we use the value for selected ans onChange for setSelected 
    // (sent props via react-hook-forms Controller component) from UpdateProfile.js and ConcertForm.js
    // const [selected, setSelected] = useState([]);
    return (
        <div className="select-wrapper">
            <h6 className="text-fields">Select Styles</h6>
            {/* <pre className="preview-selected">{JSON.stringify(selected)}</pre> */}
            <MultiSelect
                options={options}
                value={value}
                // value={selected}
                onChange={onChange}
                // onChange={setSelected}
                // labelledBy={"Select"}
                labelledBy={name}
                filterOptions={filterOptions}
                className="multi-select"
            />
        </div>
    );
}

export default SelectStyle
