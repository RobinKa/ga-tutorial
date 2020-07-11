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
            <div>{cnt.textA2}</div>

            <InteractiveCode sourceCode={cnt.codeA2}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textA3}</div>
            <InteractiveCode sourceCode={cnt.codeA3} />

            <div>{cnt.textB}</div>
            <div>{cnt.textB2}</div>
            <InteractiveCode sourceCode={cnt.codeB} />

            <div>{cnt.textC}</div>
            <InteractiveCode sourceCode={cnt.codeC} />

            <div>{cnt.textD}</div>
            <InteractiveCode sourceCode={cnt.codeD} />

            <div>{cnt.textE}</div>

            <h3>Using GA to perform 2D rotations</h3>
            <div>{cnt.textF}</div>
            <InteractiveCode sourceCode={cnt.codeF}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textG}</div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}