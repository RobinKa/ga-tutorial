import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { InteractiveCode } from "./InteractiveCode"
import * as cnt from "./content"

export function GATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Geometric Algebra Basics</h3>
            <div>{cnt.textA}</div>

            <h4>Vectors</h4>
            <div>{cnt.textA2}</div>

            <InteractiveCode sourceCode={cnt.codeA2}
                hideOutput={true} withVisualizer={true}
            />

            <h4>Geometric Product</h4>
            <h5>Rule 1: basis vectors square to +1</h5>
            <div>{cnt.textA3}</div>
            <InteractiveCode sourceCode={cnt.codeA3} />

            <h5>Rule 2: different basis vector anti-commute</h5>
            <div>{cnt.textB}</div>
            <div>{cnt.textB2}</div>
            <InteractiveCode sourceCode={cnt.codeB} />

            <h5>Practice</h5>
            <div>{cnt.textC}</div>
            <InteractiveCode sourceCode={cnt.codeC} />

            <h3>Rotors</h3>

            <h4>Squaring bivectors</h4>
            <div>{cnt.textD}</div>
            <InteractiveCode sourceCode={cnt.codeD} />

            <div>{cnt.textE}</div>

            <div>We shall now look at some things we can achieve with what we already know now.</div>

            <h4>Rotating 2D vectors using rotors</h4>
            <div>{cnt.textF}</div>
            <InteractiveCode sourceCode={cnt.codeF}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textG}</div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}