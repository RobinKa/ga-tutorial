import React, { useEffect } from "react"
import { ImageWithSub } from "../util"

export function SRElectromagnetism() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) { MathJax.texReset(); MathJax.typeset(); }")
    }, [])

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Electromagnetism</h3>
            <div>
                Electromagnetism is most often described using Maxwell's equations in vector form.
                In Geometric Algebra these can be expressed as a single equation and a field that unifies the electric and magnetic fields.
                This also makes it very easy to combine our results from Special Relativity with Electromagnetism.
            </div>
            <div>
                There are already a lot of resources showing how to do Electromagnetism with GA. Here are a couple of short ones that get the essence if you are interested:
                <ul>
                    <li><a href="https://www.av8n.com/physics/maxwell-ga.htm">av8n</a> article</li>
                    <li>Last part of <a href="https://youtu.be/60z_hpEAtD8?t=2138">A Swift Introduction to Geometric Algebra</a> by Sudgy</li>
                </ul>

                For now we actually won't use any of Maxwell's equations. The relevant part to us is that the electric and magnetic fields will be bivector fields $E$ and $B$ using the bivectors that
                square to $+1$ ({`$e_{tx}, e_{ty}, e_{tz}$`} corresponding to each direction in space) and that they can be combined into a single bivector field $F$ called the Faraday field in the following way:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                F = E + I B
                \\end{equation}
                `}
            </div>
            <div>
                Because the magnetic bivector field is multiplied by the pseudoscalar $I$, in general $F$ contains all bivectors in the algebra.
            </div>
            <div>
                In the next part we will investigate an electric field as seen
                by an observer moving orthogonal to it.
            </div>
            <h4>Electric field seen by observer moving orthogonal to it</h4>
            <ImageWithSub src="/images/sr-efield-movingobs.png" text="Figure 1 - Blue: Rest frame. Purple: Moving observer's frame. Red: Electric field in x direction of rest frame. Pink: Rotor from rest frame to moving observer's frame." width="60%" />
            <div>
                Let's start with an <u style={{textDecorationColor: "red", textDecorationThickness: 3}}>electric field $E$</u> with only a value $E_x$ in the $x$ direction
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                F = E = E_x e_{tx}
                \\end{equation}
                `}
            </div>
            <div>
                The basis vectors for an observer moving relative to the field with rapidity $\varphi_y$ in the $y$ direction can be obtained with a passive transformation
                by applying a rotor to the basis vectors at rest.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                R_y(\\varphi_y) = e^{-\\frac{\\varphi_y}{2} e_{ty}}
                \\end{equation}
                `}
            </div>
            <div>
                The <u style={{textDecorationColor: "pink", textDecorationThickness: 3}}>rotor $R_y$</u> transforms from the <u style={{textDecorationColor: "blue", textDecorationThickness: 3}}>rest frame</u> to
                the <u style={{textDecorationColor: "purple", textDecorationThickness: 3}}>moving observer's frame</u>. We can now measure the field with the reciprocal basis vectors of the moving frame
                to figure out how a moving observer sees the field.
            </div>
            <div>
                Before continuing with the algebra, let's take another look at the diagram. What would we expect to happen if we applied the rotor to the field?
                The bivector field lies in the TX plane. The rotor (hyperbolically) rotates between the T and the Y axis.
                So we would expect the resulting bivector field to have not only have a TX component but also an XY component.
            </div>
            <div>
                We can also see this visually: the original XY plane was orthogonal to $E$'s plane, but the XY' plane is not orthogonal anymore.
            </div>
            <h5>Reciprocal basis bivectors</h5>
            <div>
                Okay now for the algebra: because we are measuring bivectors and not vectors, we want to build reciprocal bivectors.
                For example to measure the XY component, we have a basis bivector {`$e_{xy}$`} and its corresponding reciprocal basis bivector is
                {`$e^{xy} = -e_{xy}$`} because {`$-e_{xy} \\cdot e_{xy} = 1$`}.
            </div>
            <div>
                We already established that the moving observer should see a field in the TX and the XY plane, so let's build the reciprocal
                basis bivectors for those.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                {e^{tx}}' & = R_y {e^{tx}} \\widetilde{R}_y = R_y e_{tx} \\widetilde{R}_y = cosh(\\varphi_y) e_{tx} + sinh(\\varphi) e_{xy} \\\\
                {e^{xy}}' & = R_y {e^{xy}} \\widetilde{R}_y = -R_y e_{xy} \\widetilde{R}_y = -(cosh(\\varphi_y) e_{xy} + sinh(\\varphi) e_{tx})
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <h5>Field measured by orthogonally moving observer</h5>
            <div>
                Taking the inner product of the field with the reciprocal basis bivectors yields
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\begin{aligned}
                    F'_{tx} & = {e^{tx}}' \\cdot F = E_x cosh(\\varphi_y) \\\\
                    F'_{xy} & = {e^{xy}}' \\cdot F = -E_x sinh(\\varphi_y) \\\\
                    \\end{aligned}
                    \\label{eq:transform-faraday}
                \\end{equation}
                `}
            </div>
            <div>
                We can see the the TX component of the field gets stronger the faster the observer moves in the Y direction (both positive and negative).
                We also have an XY component. If we look back to how $F$ was defined we can see that this part comes from $I B$,
                specifically the Z component of the magnetic field because {`$e_{xy} = I e_{tz}$`}. So a moving observer will also see a magnetic field
                perpendicular to both their movement direction and the electric field's direction.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\begin{aligned}
                        E_x' & = E_x cosh(\\varphi_y) \\\\
                        B_z' & = -E_x sinh(\\varphi_y)
                    \\end{aligned}
                \\end{equation}
                `}
            </div>

            <h4>Conclusion</h4>
            <div>
                We saw that the electromagnetic field is described by the faraday bivector field $F = E + I B$.
                Then we looked at how an observer moving orthogonal to an electric field sees the field.
                We observed that the original electric field gets stronger, but we also saw that the observer measures
                a magnetic field in the direction orthogonal to both the movement direction and the original electric field.
            </div>
        </div>
    )
}
