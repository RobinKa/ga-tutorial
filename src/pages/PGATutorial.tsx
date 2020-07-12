import React, { useEffect } from "react"
import { InteractiveCode } from "./InteractiveCode"
import * as cnt from "./code"

export function PGATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Points and Lines</h3>
            <InteractiveCode sourceCode={cnt.visualizerExample}
                hideOutput={true} withVisualizer={true} />
        </div>
    )
}