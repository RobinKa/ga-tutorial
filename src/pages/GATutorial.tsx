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

            <h5>Introduction</h5>
            <div>{cnt.textA}</div>

            <h5>Vectors</h5>
            <div>{cnt.textA2}</div>

            <InteractiveCode sourceCode={cnt.codeA2}
                hideOutput={true} withVisualizer={true}
            />

            <h5>Geometric Product - same basis vector</h5>
            <div>{cnt.textA3}</div>
            <InteractiveCode sourceCode={cnt.codeA3} />

            <h5>Geometric product - different basis vector</h5>
            <div>{cnt.textB}</div>
            <div>{cnt.textB2}</div>
            <InteractiveCode sourceCode={cnt.codeB} />

            <h5>Geometric product - practice</h5>
            <div>{cnt.textC}</div>
            <InteractiveCode sourceCode={cnt.codeC} />

            <h5>Squaring bivectors</h5>
            <div>{cnt.textD}</div>
            <InteractiveCode sourceCode={cnt.codeD} />

            <div>{cnt.textE}</div>

            <h3>Applications</h3>

            <h5>Rotating 2D vectors using rotors</h5>
            <div>{cnt.textF}</div>
            <InteractiveCode sourceCode={cnt.codeF}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textG}</div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}