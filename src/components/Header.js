import React from "react";

import "../styles/header.css";
const Header = () => {
    return (
        <div>
            <input
                id="Form-title"
                placeholder="Form title"
                className="title"
            />
            <textarea
                id="Form-Description"
                label="Form description"
                className="description"
                placeholder="Form description"
            />
        </div>
    );
};

export default Header;
