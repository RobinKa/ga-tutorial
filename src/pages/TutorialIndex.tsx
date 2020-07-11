import React from "react"
import { Link } from "react-router-dom"

export function TutorialIndex() {
    return (
        <div>
            <h3>Index</h3>
            <div>
                This tutorial tries to teach Geometric Algebra (GA) in an interactive way with runnable code and visualizations.
                It is not meant to be an entirely bottom-up way where we try to derive every single result.
                Instead the focus is on trying to create an understanding for GA and gradually introduce new things while
                directly applying the learnt concepts.
            </div>
            <h4>Sections</h4>
            <ol>
                <li><Link to="/ga-basics">Geometric Algebra Basics</Link></li>
                <li><Link to="/pga">Projective Geometric Algebra</Link></li>
            </ol>
        </div>
    )
}