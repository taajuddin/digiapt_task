import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";

import "../styles/pages.css";

const Pages = () => {
    return (
        <div className="root">
        	<h1>Create Form</h1>
            <Header />
            <Question />
        </div>
    );
};

export default Pages;
