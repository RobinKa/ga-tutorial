import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ImageWithSub } from "../util"

export function SRTimeDilation() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) { MathJax.texReset(); MathJax.typeset(); }")
    }, [])

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Time Dilation</h3>
            <h4>Measuring a time difference</h4>
            <ImageWithSub src="/images/sr-time-dilation.png" width="60%" text="Light blue: Alice's basis vectors. Teal: Bob's basis vectors. Purple: Rotor from Alice's to Bob's basis vectors. Orange: Stop event vector. Yellow: Time difference between start and stop event." />
            <div>
                <u style={{ textDecorationColor: "#0095FF", textDecorationThickness: 3 }}>Alice</u> is standing still with a stopwatch at x coordinate $0$. She starts her stopwatch at time $0$ and
                stops it at <u style={{ textDecorationColor: "gold", textDecorationThickness: 3 }}>time $\Delta t$</u>.
                The <u style={{ textDecorationColor: "orange", textDecorationThickness: 3 }}>difference vector $v$</u> is the same as the stop event vector because we defined the start event vector to be at zero.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                v = c \\Delta t e_t \\\\
                \\end{equation}
                `}
            </div>
            <div>
                Alice can measure the stop event components using her reciprocal basis vector:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                e^x \\cdot v = & e^x \\cdot c \\Delta t e_t = 0 \\\\
                e^t \\cdot v = & e^t \\cdot c \\Delta t e_t = c \\Delta t
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                So far so good, nothing unexpected has happened. Now we have Bob who is moving with constant speed along the x direction.
                <u style={{ textDecorationColor: "#00FFFF", textDecorationThickness: 3 }}>Bob's basis vectors</u>, indicated with a prime, are obtained by
                applying a <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>rotor $R$</u> to Alice's basis vectors.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                R = e^{-\\frac{\\varphi}{2} e_{tx}} \\\\
                e_t' = R e_t \\widetilde{R} \\\\
                e_x' = R e_x \\widetilde{R}
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                Bob then looks at Alice start and stop her stopwatch. To figure out when and where the stop event happens for Bob, he uses his reciprocal basis vectors and takes the inner product
                with the stop event. Because Bob performed a passive transformation, we expect that he will measure different components than Alice, but we know that the thing being measured
                did not actually change.
            </div>
            <div>
                For the time component Bob measures the following
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                c \\Delta t' & = {e^t}' \\cdot v = R e^t \\widetilde{R} \\cdot v = R e_t \\widetilde{R} \\cdot v \\\\
                & = (\\cosh(\\varphi) e_t + \\sinh(\\varphi) e_x) \\cdot c \\Delta t e_t \\\\
                & = \\cosh(\\varphi) c \\Delta t
                \\end{aligned}
                \\label{eq:time-dilation}
                \\end{equation}
                `}
            </div>
            <div>
                Because $\cosh(\varphi) \geq 1$, the faster Bob moves, the longer it takes for him to see the stop event. Bob sees Alice's clock ticking slower.
                This is a phenomenon called time dilation. An observer moving relative to another observer will see the other's time tick slower.
            </div>
            <div>
                We can now also look at w here Bob will see the stop event happen. We will call the x coordinate of the stop event as seen by Bob $\Delta x'$.
                Recall that Alice stood still the entire time, so for her $\Delta x = 0$.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                \\Delta x' & = {e^x}' \\cdot v = R e^x \\widetilde{R} \\cdot v = -R e_x \\widetilde{R} \\cdot v\\\\
                & = -(\\cosh(\\varphi) e_x + \\sinh(\\varphi) e_t) \\cdot c \\Delta t e_t \\\\
                & = -\\sinh(\\varphi) c \\Delta t
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                In Bob's view, the stop event happens in the negative x direction. This makes intuitive sense because Bob is moving in the positive x direction,
                so of course he will have left the "stationary" stop event behind him in the opposite direction.
                Importantly though, the offset we arrived at here is still not just the non-relativistic offset of {`$\\mathrm{speed} \\times \\mathrm{time}$`}.
            </div>
            <h4>Numeric example</h4>
            <div>
                Let's plug in some example values, for {`$\\Delta t = 10\\mathrm{s}$`} (ie. Alice stopping the stopwatch after it shows 10 seconds for her) and Bob moving at $0.9c$ we get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                \\varphi & = \\tanh^{-1}(\\frac{0.9c}{c}) \\\\
                \\Delta t' & = \\cosh(\\varphi) \\Delta t \\approx 23\\mathrm{s} \\\\
                \\Delta x' & = -\\sinh(\\varphi) c \\Delta t \\approx -6.2 \\times 10^9\\mathrm{m} \\approx -21 \\mathrm{light seconds}
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                For comparison, just using {`$0.9c \\times 10 \\mathrm{s}$`} for the x offset Bob sees would give {`$-2.7 \\times 10^9 \\mathrm{m} = -9 \\mathrm{light seconds}$`}, less than half the actual offset.
            </div>
            <h4>Gamma factor</h4>
            <div>
                We can rearrange {`\\eqref{eq:time-dilation}`} for the ratio of the dilated and the original time, and substitute $\varphi$ using its velocity relation {`$\tanh \\varphi = \\frac{v}{c}$`} to get the following equation
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\frac{\\Delta t'}{\\Delta t} = \\cosh(\\varphi) = \\cosh(\\tanh^{-1}(\\frac{v}{c}))
                \\end{equation}
                `}
            </div>
            <div>
                In ordinary Special Relativity the ratio we arrived is called the <a href="https://en.wikipedia.org/wiki/Lorentz_factor">Gamma factor or Lorentz factor</a> {`$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}.
                and is used all over the place there. However the expression we have right now involves hyperbolic functions does not look exactly like the gamma factor yet.
                To bring it into the same form, we use the identity {`$\\cosh(\\tanh^{-1}(x)) = \\frac{1}{\\sqrt{1 - x^2}}$`}.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\frac{\\Delta t'}{\\Delta t} = \\cosh(\\tanh^{-1}(\\frac{v}{c})) = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma
                \\end{equation}
                `}
            </div>
            <div>
                The gamma factor is $1$ at rest, and goes up with the relative velocity.
            </div>

            <h4>Conclusion</h4>
            <div>
                First we saw that we can change between reference frames (ie. basis vectors of different observers) using rotors.
                Then we looked at a length in a rest frame and at how the length is seen by an observer moving relative to it.
                We noticed for length measurements it is important to measure both endpoints at the same time in the measurer's frame.
                The length ratio we arrived at was the Gamma factor which varies between $1$ and $0$ as the relative speed goes up.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Gamma factor for observer moving with velocity $v$: {`$\\gamma(v) = \\cosh(\\tanh^{-1}(\\frac{v}{c})) = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}</li>
                    <li>Time dilation for observer moving with relative velocity $v$: {`$\\frac{\\Delta t'}{\\Delta t} = \\gamma(v)$`}</li>
                </ul>
            </div>
            <h4>Up next</h4>
            <div>
                Next we will look at how a moving observer sees lengths change.
            </div>

            <h4><Link to="/sr-length-contraction">Special Relativity with Geometric Algebra - Length Contraction</Link></h4>
        </div>
    )
}