import React from "react"
import { Link } from "react-router-dom"

export function TutorialIndex() {
    return (
        <div>
            <h3>Index</h3>
            <div>

            </div>
            <h4>Geometric Algebra and Projective Geometric Algebra Introduction</h4>
            <div>
                Introduction to the basics of Geometric Algebra (GA) and Projective Geometric Algebra (PGA).
                This tutorial teaches GA in an interactive way with runnable code and visualizations.
                It is not meant to be an entirely bottom-up way where we try to derive every single result.
                Instead the focus is on trying to create an understanding for GA and gradually introduce new things while
                directly applying the learnt concepts.
            </div>
            <ol>
                <li><Link to="/motivation">Motivation</Link></li>
                <li><Link to="/ga-basics">Geometric Algebra Basics</Link></li>
                <li><Link to="/pga">Projective Geometric Algebra</Link></li>
            </ol>
            <h4>Design of Geometric Algebras</h4>
            <div>
                Shows how we can create Geometric Algebras which can represent any shape and how we can get useful rotors in them.
            </div>
            <ol>
                <li><Link to="/ga-design-1">Design of Geometric Algebras - Part 1</Link></li>
                <li><Link to="/ga-design-2">Design of Geometric Algebras - Part 2</Link> <b style={{ color: "red" }}>(WIP, flawed)</b></li>
            </ol>
            <h4>Special Relativity with Geometric Algebra</h4>
            <div>
                Introduction to Special Relativity using Geometric Algebra. Work in progress.
            </div>
            <ol>
                <li><Link to="/sr-intro">Special Relativity with Geometric Algebra - Introduction</Link></li>
                <li><Link to="/sr-ga-review">Special Relativity with Geometric Algebra - Geometric Algebra Review</Link></li>
                <li><Link to="/sr-spacetime-algebra">Special Relativity with Geometric Algebra - Spacetime Algebra</Link></li>
                <li><Link to="/sr-spacetime-rotors">Special Relativity with Geometric Algebra - Spacetime Rotors</Link></li>
                <li><Link to="/sr-length-contraction">Special Relativity with Geometric Algebra - Length Contraction</Link></li>
                <li><Link to="/sr-electromagnetism">Special Relativity with Geometric Algebra - Electromagnetism</Link></li>
            </ol>
        </div>
    )
}