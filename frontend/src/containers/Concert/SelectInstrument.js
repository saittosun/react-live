import React from 'react';
import MultiSelect from "react-multi-select-component";
import "./SelectedInstrument.scss"

function SelectInstrument({ onChange, value, name }) {
    const options = [
        { label: "accordion", value: "accordion" },
        { label: "bass", value: "bass" },
        { label: "bassoon", value: "bassoon" },
        { label: "banjo", value: "banjo" },
        { label: "cello", value: "cello" },
        { label: "clarinet", value: "clarinet" },
        { label: "classical guitar", value: "classical guitar" },
        { label: "clavichord", value: "clavichord" },
        { label: "double bass", value: "double bass" },
        { label: "drums", value: "drums" },
        { label: "electrical guitar", value: "electrical guitar" },
        { label: "electronics", value: "electronics" },
        { label: "english horn", value: "english horn" },
        { label: "flute", value: "flute" },
        { label: "flugelhorn", value: "flugelhorn" },
        { label: "french horn", value: "french horn" },
        { label: "harmonica", value: "harmonica" },
        { label: "harp", value: "harp" },
        { label: "harpsichord", value: "harpsichord" },
        { label: "keyboard", value: "keyboard" },
        { label: "lute", value: "lute" },
        { label: "mandolin", value: "mandolin" },
        { label: "oboe", value: "oboe" },
        { label: "organ", value: "organ" },
        { label: "other", value: "other" },
        { label: "oud", value: "oud" },
        { label: "percussion", value: "percussion" },
        { label: "piano", value: "piano" },
        { label: "piccolo", value: "piccolo" },
        { label: "recorder", value: "recorder" },
        { label: "saxophone", value: "saxophone" },
        { label: "sitar", value: "sitar" },
        { label: "theorbo", value: "theorbo" },
        { label: "traverso", value: "traverso" },
        { label: "trombone", value: "trombone" },
        { label: "trumpet", value: "trumpet" },
        { label: "tuba", value: "tuba" },
        { label: "ukulele", value: "ukulele" },
        { label: "vihuela", value: "vihuela" },
        { label: "viola", value: "viola" },
        { label: "viola da gamba", value: "viola da gamba" },
        { label: "viola d'amore", value: "viola d'amore" },
        { label: "violin", value: "violin" },
        { label: "voice", value: "voice" }
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
            <h6 className="text-fields">Select Instruments</h6>
            {/* <pre className="preview-selected">{JSON.stringify(selected)}</pre> */}
            <MultiSelect
                options={options}
                // value={selected}
                value={value}
                // onChange={setSelected}
                onChange={onChange}
                labelledBy={"Select"}
                filterOptions={filterOptions}
                className="multi-select"
            />
        </div>
    );
}

export default SelectInstrument
