import React from "react"
import { Link } from "react-router-dom"


export function Motivation() {
    return (
        <div>
            <h3>Motivation</h3>

            <h5>CoffeeShop Examples</h5>
            <div>
                The CoffeeShop is a website containing many examples making use of Geometric Algebra.
                Below I listed some interesting ones. After completing this tutorial we will be able
                to reproduce them.
            </div>
            <ul>
                <li><a href="https://enkimute.github.io/ganja.js/examples/coffeeshop.html#pga3d_skinning">Skinning (smooth blending)</a></li>
                <li><a href="https://enkimute.github.io/ganja.js/examples/coffeeshop.html#pga3d_physics_symmetric_top">Rigidbody physics with unified rotation and translation</a></li>
                <li><a href="https://enkimute.github.io/ganja.js/examples/coffeeshop.html#pga2d_inverse_kinematics">Inverse kinematics</a></li>
                <li><a href="https://enkimute.github.io/ganja.js/examples/coffeeshop.html#pga2d_differentiation">Automatic differentiation</a></li>
                <li><a href="https://enkimute.github.io/ganja.js/examples/coffeeshop.html#ga3d_rotor_estimation">Rotor estimation between two point clouds</a></li>
            </ul>

            <h4><Link to="/ga-basics">Next: Geometric Algebra Basics</Link></h4>
        </div>
    )
}