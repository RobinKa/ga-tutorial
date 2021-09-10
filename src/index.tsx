import React from "react"
import { hydrate, render } from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

function getApp() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

const rootElement = document.getElementById("root")
if (rootElement) {
    if (rootElement.hasChildNodes()) {
        hydrate(getApp(), rootElement)
    } else {
        render(getApp(), rootElement)
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
