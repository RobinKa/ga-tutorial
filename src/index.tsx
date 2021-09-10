import React from "react"
import { hydrate, render } from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 
serviceWorker.unregister()
