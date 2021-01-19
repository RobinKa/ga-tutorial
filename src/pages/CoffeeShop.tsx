import React from "react"

export function CoffeeShop(props: { id: string, title?: string }) {
    const { id, title } = props

    const url = `https://enkimute.github.io/ganja.js/examples/coffeeshop.html#${id}`

    return (
        <div>
            <iframe src={`${url}&amp;fullscreen`} title={title} width="100%" height="600px" frameBorder={0}>
            </iframe>
            <sub><a href={url}>Link to CoffeeShop with code</a></sub>
        </div>
    )
}