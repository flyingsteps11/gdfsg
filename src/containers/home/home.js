import React from "react";
import ReactDOM from "react-dom";
import '../../styles/App1.scss'
import Content from "../../components/Content";
import Header from "../../components/Header";


ReactDOM.render(
    <div>
        <Header />
        <Content />
    </div>,
    document.querySelector("body")
)