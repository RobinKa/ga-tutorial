import React, { useEffect } from "react"
import { InteractiveCode } from "./InteractiveCode"
import * as cnt from "./CodePGATutorial"
import { Link } from "react-router-dom"

export function PGATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Translations</h3>
            <div>
                So far we learnt how to do rotations using rotors. Another important operation is translation. Naively we could
                just use vector addition to achieve translation using some offset vector $d = d_x e_x + d_y e_y$

                {`\\begin{equation}
                v' = v + d
                \\end{equation}`}

                If we have two translation vectors $a$ and $b$ we can combine their action by adding them to get a single translation vector $d = a + b$.
                This all seems very obvious and straightforward.
            </div>

            <br />

            <div>
                What if we wanted to do both translation and rotation? Using vector addition for translation and rotors for rotation our operation
                would look like this

                {`\\begin{equation}
                v' = R v \\widetilde{R} + d
                \\end{equation}`}

                Now if we wanted to compose two translations and rotations, we would have two rotors $R_1$ and $R_2$ and two translation vectors $d_1$ and $d_2$.
                First we would apply $R_1$ and $d_1$ according to the formula above. Then we would apply $R_2$ and $d_2$ on the result of the previous operation.

                {`\\begin{aligned}
                v' & = R_1 v \\widetilde{R_1} + d_1 \\\\
                v'' & = R_2 v' \\widetilde{R_2} + d_2 = R_2 (R_1 v \\widetilde{R_1} + d_1) \\widetilde{R_2} + d_2
                \\end{aligned}`}

                We could multiply this out but we will get a lot of terms and the operations don't compose as nicely as they did when we had only rotations or translations.
                Is there a way we can do both rotation and translation with a single rotor? Projective Geometric Algebra (PGA) sets out to do this.
            </div>

            <h3>Projective Geometric Algebra</h3>
            <h5>A new kind of basis vector</h5>
            <div>
                PGA starts with the familiar basis vectors that square to $+1$ and also adds another basis vector $e_0$ one that squares to $0$.
                In two dimensional PGA we thus have basis vectors $e_x$, $e_y$ and $e_0$. As a result there will also be three bivectors {`$e_{0x}, e_{0y}, e_{xy}$`} and one
                trivector {`$e_{0xy}$`}.
            </div>
            <br />
            <div>
                We will see that this strange additional basis vector allows us to encode both rotations and translations in a single rotor and
                also many more things we couldn't easily do before.
            </div>
            <h5>Points</h5>
            <div>
                Another peculiarity of PGA is that points are not encoded as vectors $x e_x + y e_y$ anymore but as

                {`\\begin{equation}
                P = x e_{y0} + y e_{0x} + e_{xy}
                \\end{equation}`}

                In the code below we display some points like before but this time using 2D PGA. The vector $e_0$ is denoted by
                <code>e0</code> and $e_x, e_y$ as <code>e1</code> and <code>e2</code>.
            </div>

            <InteractiveCode sourceCode={cnt.pgaPoints}
                hideOutput={true} withVisualizer={true} />

            <div>
                In the code we can also see that the rendered point coordinate gets divided by
                the {`$e_{xy}$`} part of the multivector. Multiplying the multivector by a scalar thus
                won't have any effect on which point the multivector encodes as the final position gets
                divided by the {`$e_{xy}$`} part again which was also scaled by the same amount.
            </div>

            <h5>Translators</h5>
            <div>
                As promised this weird setup will allow us to perform translations using rotors. Rotors that only do
                translation are also called translators and we denote them by $T$.
            </div>
            <div>
                Just like with the rotors we use the exponential function to generate translators from our algebra.
                A translator that moves by $d$ in the X direction is given by {`$T = e^{\\frac{d}{2} e_{0x}}$`}.
                If we compare this to the point encoding we will notice that {`$e_{0x}$`} is the bivector related to the
                Y coordinate, so here the translators perform a translation that is orthogonal to the bivector's direction.
                As previously we will apply the translator using the sandwich product.
            </div>
            <div>
                This time to calculate the result of the exponential we can not make use of Euler's formula as it only applies to
                elements that square to $-1$ and the bivector {`$e_{0x}$`} squares to $0$. The equivalent of Euler's formula for
                elements squaring to $0$ is fortunately very simple

                {`\\begin{equation}
                T = e^{\\frac{d}{2} e_{0x}} = 1 + \\frac{d}{2} e_{0x}
                \\end{equation}`}

                so all we picked up was the additional scalar $1$.
            </div>

            <InteractiveCode sourceCode={cnt.translators}
                hideOutput={true} withVisualizer={true} />

            <h5>Motors</h5>
            <div>
                We can also compose rotors and translators using multiplications. We call the resulting elements motors and denote them
                by $m$. For example a motor

                {`\\begin{equation}
                m = e^{\\frac{\\phi}{2} e_{yx}} e^{\\frac{d}{2} e_{0x}}
                \\end{equation}`}

                will first perform the translation of the previous example followed by a rotation around the origin in the
                XY plane by $\phi$ CCW.
            </div>

            <InteractiveCode sourceCode={cnt.motors}
                hideOutput={true} withVisualizer={true} />

            <div>
                So far we have only been visualizing single points. With points we can not observe the effect that
                rotation has besides how it affects the position of the points. To visualize the rotation we will
                look at how a set of points gets transformed instead, such as a box. When applying a rotor that rotates
                we would expect the box to also rotate. We will use the provided <code>renderBoxPGA()</code> function
                for this purpose. The way it works is that it takes four points that are offset relative to the origin
                and transforms them with the given motor.
            </div>

            <InteractiveCode sourceCode={cnt.motorsBox}
                hideOutput={true} withVisualizer={true} />

            <div>
                Our motor here produces a CCW rotation of {`$\\frac{\\pi}{4}$`} (twice the amount written in the code) which
                indeed rotated our box by 45°.
            </div>

            <h3>Motor interpolation</h3>
            <div>
                A very useful property of PGA is its ability to smoothly interpolate between motors. Previously if we had separate
                translation and rotation (eg. when using vector addition for translation and rotors for rotation) it was not clear how one would
                interpolate between two of such transformations.
            </div>

            <br />

            <div>
                Interpolating translations and vectors is easy, for example with linear
                interpolation. If we are given two vectors $v_1, v_2$ and a blending factor $\alpha$
                the interpolated vector $v(\alpha)$ is given by

                {`\\begin{equation}
                v(v_1, v_2, \\alpha) = (1 - \\alpha) v_1 + \\alpha v_2
                \\end{equation}`}
            </div>
            <div>
                Interpolating rotations and rotors is a bit trickier but still relatively common, for example
                using quaternions and <a href="https://en.wikipedia.org/wiki/Slerp">spherical linear interpolation</a>.
            </div>

            <div>
                So how do we interpolate between two motors $m_1$ and $m_2$ such as in the following example?
            </div>

            <InteractiveCode sourceCode={cnt.motorBlendingMotivation}
                hideOutput={true} withVisualizer={true} />

            <br />

            <h5>With known exponents</h5>
            <div>
                Thankfully our hard work of learning about motors will pay off here. Imagine we are given the exponents of two
                motors $m_1$ and $m_2$ which we denote by $a_1$ and $a_2$ (ie. {`$m_1 = e^{a_1}, m_2 = e^{a_2}$`}). To get the interpolated
                motor $m(\alpha)$ all we have to do is linearly interpolate between the exponents and then exponentiate

                {`\\begin{equation}
                m(\\alpha) = e^{(1 - \\alpha) a_1 + \\alpha a_2}
                \\end{equation}`}
            </div>

            <InteractiveCode sourceCode={cnt.motorBlending}
                hideOutput={true} withVisualizer={true} />

            <div>
                We can see the interpolation produces a curve. If we interpolated translation and rotation separately using
                linear interpolation we would have just gotten a straight line.
            </div>

            <h5>With unknown exponents</h5>
            <div>
                What if we don't know the exponents of the motors? This would happen for example when we keep composing motors.
                A very practical example where that occurs is if we used a motor to describe the position and rotation
                of a rigidbody in a physics simulation.
            </div>
            <div>
                Just like in usual algebra, we can take the logarithm of an exponential to get its exponent. The logarithm of a
                motor in PGA is given by

                {`\\begin{equation}
                log(m) = \\langle \\frac{m}{||m||} \\rangle_2
                \\end{equation}`}

                where $||m||$ stands for the norm of the motor and $\langle ... \rangle_2$ stands for only keeping the
                grade $2$ parts (ie. all bivectors) of the result. $||m||$ can easily be calculated as {`$\\sqrt{m \\widetilde{m}}$`}.
            </div>

            <h3>Conclusion</h3>
            <div>
                TODO
            </div>

            <h4><Link to="/pga-geometry">Next: PGA Geometry</Link></h4>
        </div>
    )
}