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
                An observer moving relative to it with rapidity $\varphi_y$ in the $y$ direction can be described using a rotor
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                R(\\varphi_y) = e^{-\\frac{\\varphi_y}{2} e_{ty}}
                \\end{equation}
                `}
            </div>
            <div>
                The <u style={{textDecorationColor: "pink", textDecorationThickness: 3}}>rotor $R$</u> transforms from the <u style={{textDecorationColor: "blue", textDecorationThickness: 3}}>rest frame</u> to
                the <u style={{textDecorationColor: "purple", textDecorationThickness: 3}}>moving observer's frame</u>.
                From the observer's view, the field is moving in the opposite direction, so
                to get how they see the field we need to apply the reverse rotor to the field.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\widetilde{R} F R = E_x e^{\\frac{\\varphi_y}{2} e_{ty}} e_{tx} e^{-\\frac{\\varphi_y}{2} e_{ty}}
                    \\label{eq:transformfaraday}
                \\end{equation}
                `}
            </div>
            <div>
                Before continuing with the algebra, let's take another look at the diagram. What would we expect to happen if we applied the rotor to the field?
                The bivector field lies in the TX plane. The rotor (hyperbolically) rotates between the T and the Y axis.
                So we would expect that the resulting bivector field would not only have a TX component but also a TY component.
            </div>
            <div>
                Okay now for the algebra: we could expand both exponentials in {`\\eqref{eq:transformfaraday}`} into $cosh$ and $sinh$ and simplify. This is a decent amount of effort.
                Alternatively, we notice that the rotor consists of a scalar and {`$e_{ty}$`} part. The scalar part commutes with {`$e_{tx}$`} and the bivector
                part anti-commutes with it (picks up a minus sign). When expanding the exponential, the scalar part can also be written with negated argument to $cosh$ because $cosh(x) = cosh(-x)$.
                So commuting and applying this idea will result in:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                e_{tx} R & = e_{tx} (cosh(-\\frac{\\varphi_y}{2}) + sinh(-\\frac{\\varphi_y}{2}) e_{ty}) = \\\\
                & = (cosh(-\\frac{\\varphi_y}{2}) + sinh(\\frac{\\varphi_y}{2}) e_{ty}) e_{tx} = \\\\
                & = (cosh(\\frac{\\varphi_y}{2}) + sinh(\\frac{\\varphi_y}{2}) e_{ty}) e_{tx} = \\widetilde{R} e_{tx}
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                So {`\\eqref{eq:transformfaraday}`} simplifies to
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\begin{aligned}
                        \\widetilde{R} F R & = E_x \\widetilde{R}^2 e_{tx} = E_x (cosh(\\varphi_y) + sinh(\\varphi_y) e_{ty}) e_{tx}) = \\\\
                        & = E_x (cosh(\\varphi_y) e_{tx} + sinh(\\varphi_y) e_{xy})
                    \\end{aligned}
                    \\label{eq:transform-faraday}
                \\end{equation}
                `}
            </div>
            <div>
                The result has an {`$e_{tx}$`} part, which is just the original electric field's direction. The faster the observer moves the stronger it gets.
                But it also has an {`$e_{xy}$`} part. If we look back to how $F$ was defined we can see that this part comes from $I B$,
                specifically the Z component of the magnetic field because {`$e_{xy} = I e_{tz}$`}. So a moving observer will also see a magnetic field
                perpendicular to both their movement direction and the electric field's direction.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\begin{aligned}
                        E_x' & = E_x cosh(\\varphi_y) \\\\
                        B_z' & = E_x sinh(\\varphi_y)
                    \\end{aligned}
                \\end{equation}
                `}
            </div>
        </div>
    )
}

// 