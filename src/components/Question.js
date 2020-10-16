import React, { useState } from "react";
import Select from "react-select";
import "../styles/question.css";
const options = [
    {
        value: "Short Answer",
        label: "Short Answer",
    },
    {
        value: "Multiple choice",
        label: "Multiple choice",
    },
    {
        value: "Checkboxes",
        label: "Checkboxes",
    },
];

const Question = () => {
    const [optionType, setOptionType] = useState("Short Answer");
    const [allOptions, setAllOptions] = useState([{ type: "text", value: "" }]);
    const handleChange = (elem) => {
        console.log(elem.value);
         setOptionType(elem.value);
        if (elem.value === "Short Answer")
            setAllOptions([{ type: "text", value: "" }]);
        else if (elem.value === "Multiple choice") {
            setAllOptions([{ type: "radio", value: "" }]);
        } else {
            setAllOptions([{ type: "checkbox", value: "" }]);
        }
    };
    let option = allOptions.map((elem) => {
        switch (elem.type) {
            case "text":
                return (
                    <input
                        type="text"
                        className="short"
                        placeholder="Short answer text"
                    />
                );

            case "radio":
                return (
                    <div>
                        <input type="radio" id="rad" value={elem} />
                        <input
                            type="text"
                            className="option_text"
                            placeholder="write something"
                        />
                    </div>
                );

            case "checkbox":
                return (
                    <div>
                        <input type="checkbox" id="rad" value={elem} />
                        <input
                            type="text"
                            className="option_text"
                            placeholder="write something"
                        />
                    </div>
                );

            default:
                return null;
        }
    });

    const addSameOption = () => {
        console.log(allOptions);

        setAllOptions([...allOptions, { type: allOptions[0].type, value: "" }]);
    };
    const addTextOption = () => {
        setAllOptions([...allOptions, { type: "text", value: "" }]);
    };
    let addOther =
        allOptions[allOptions.length - 1].type !== "text" &&
        allOptions.length < 5 ? (
            <div >
                <input type={allOptions[0].type} />
                <span
                    
                    onClick={addSameOption}
                    className="option_item"
                    tabIndex={-1}
                    role="button"
                >
                    Add option or
                </span>
                <span
                  
                    onClick={addSameOption}
                    className="blue"
                    role="button"
                >
                    {" "}
                    add &quot;Other&quot;
                </span>
            </div>
        ) : null;

    return (
        <div >
            <h1>Questions</h1>
            <div style={{float:"left",width:"60%"}}>
                <input
                    id="form-title"
                    placeholder="Question title"
                    className="title"
                />
                {option}
                {addOther}
            </div>

            <div style={{float:"right",marginTop:"30px",width:"40%"}}>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    onChange={handleChange}

                />
            </div>
        </div>
    );
};

export default Question;
