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
                <li><Link to="/ga-design-1">Design of Geometric Algebras - Shapes</Link></li>
                <li><Link to="/ga-design-2">Design of Geometric Algebras - Rotors</Link> <b style={{ color: "red" }}>(WIP, flawed)</b></li>
                <li><Link to="/ga-design-interpolating-points">Design of Geometric Algebras - Interpolating Points</Link></li>
                <li><Link to="/ga-design-tangent-objects">Design of Geometric Algebras - Tangent Objects</Link></li>
            </ol>
            <h4>Special Relativity with Geometric Algebra</h4>
            <div>
                Introduction to Special Relativity using Geometric Algebra. Work in progress. Likely contains errors.
            </div>
            <div>
                <h5>Known issues / todo list</h5>
                <ul>
                    <li>Add more applications</li>
                    <li>Update all graphics and add more (they are all just sketches currently)</li>
                </ul>
            </div>
            <ol>
                <li><Link to="/sr-intro">Special Relativity with Geometric Algebra - Introduction</Link></li>
                <li><Link to="/sr-ga-review">Special Relativity with Geometric Algebra - Geometric Algebra Review</Link></li>
                <li><Link to="/sr-spacetime-algebra">Special Relativity with Geometric Algebra - Spacetime Algebra</Link></li>
                <li><Link to="/sr-spacetime-rotors">Special Relativity with Geometric Algebra - Spacetime Rotors</Link></li>
                <li><Link to="/sr-measuring">Special Relativity with Geometric Algebra - Measuring in Spacetime</Link></li>
                <li><Link to="/sr-time-dilation">Special Relativity with Geometric Algebra - Time Dilation</Link></li>
                <li><Link to="/sr-length-contraction">Special Relativity with Geometric Algebra - Length Contraction</Link></li>
                <li><Link to="/sr-electromagnetism">Special Relativity with Geometric Algebra - Electromagnetism</Link></li>
            </ol>
            <h4>Uncategorized</h4>
            <div>
                Articles that don't belong in any specific category or are not part of a series.
            </div>
            <ol>
                <li><Link to="/population-growth">Population Growth in Hyperbolic Space with Geometric Algebra</Link></li>
            </ol>
        </div>
    )
}