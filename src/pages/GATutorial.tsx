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
            <h5>Rule 1: Basis vectors square to +1</h5>
            <div>{cnt.textA3}</div>
            <InteractiveCode sourceCode={cnt.codeA3} />

            <h5>Rule 2: Different basis vector anti-commute</h5>
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

            <h4>Higher dimensions</h4>
            <div>
                It turns out that the two dimensional rotor application formula $v' = R v$ was slightly special.
                In the general case, and for example also necessary in three dimensions, it is necessary to use
                a two sided product
                
                {`
                \\begin{equation}
                v' = R v \\widetilde{R}
                \\end{equation}
                `}
                
                which is also called the sandwich product. {"$\\widetilde{R}$"} here stands for reversion which just means
                reversing the order of all basis vectors. For example {"$e_{xy}$"} becomes {"$e_{yx}$"}.
                As we already know from the second rule of the geometric product, such a change of order just produces a
                minus sign for the bivectors, so {"$\\widetilde{e_{xy}} = -e_{xy}$"}.

                Another thing that changes with the sandwich product is that we multiply by the rotor twice, so our rotor
                will only need to contain half of the rotation angle. In the three dimensional case, if we wanted to create
                a rotor that rotates in the XZ plane by $\phi$ our rotor would look like this:

                {`
                \\begin{equation}
                R = e^{e_{xz} \\phi}
                \\end{equation}
                `}
            </div>

            <h3>Conclusion</h3>
            <div>
                In this section we introduced Geometric Algebra. We learnt the basic rules of the Geometric Product and how to work with them.
                We also learnt about rotors which generalize the rotations created by complex numbers to any dimension and also puts them
                directly in the context of vectors.

                In the next section we will learn how we can introduce translation in the rotors so we can do both translation and rotation
                using the same rotor and just one sandwich product. This will prove to have many advantages allow even further generalization.
            </div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}