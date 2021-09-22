import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ImageWithSub } from "../util"

export function SRLengthContraction() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) { MathJax.texReset(); MathJax.typeset(); }")
    }, [])

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Length Contraction</h3>
            <div>
                In the previous section we saw how clocks tick slower for observers looking at clocks that are in motion relative to them. In this section we will look at what happens to lengths
                for observers moving relative to them.
            </div>
            <div>
                This section is based on <a href="https://www.youtube.com/channel/UCN8wTUlSAroLslWyf87E2pw">Eigenchris'</a> video "Relativity 104c: Special Relativity - Time Dilation and Length Contraction Geometry"
                and the length contraction part is discussed at <a href="https://www.youtube.com/watch?v=WOLUSQK1Jtk&amp;t=1347s">this part</a>. If you have trouble following the text here it is
                worth watching the length contraction part of the video.
            </div>
            <h4>Length Contraction</h4>
            <div>
                Imagine <u style={{ textDecorationColor: "lightblue", textDecorationThickness: 3 }}>Alice</u> is standing still and is looking at a fixed-length object at rest with her,
                for example a <u style={{ textDecorationColor: "red", textDecorationThickness: 3 }}>stick</u>.
                How does Alice measure the length (the x extent) of the stick? She calculates the difference vector from the first to the second endpoint and takes the inner product with her reciprocal basis vector $e^x$.
                What is very important here: the endpoints are not separated in her time axis! She is only measuring a spatial distance and the time for both endpoints is the same.
            </div>
            <div>
                <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Bob</u> is moving relative to Alice.
                We have a passive transformation between Alice's and Bob's basis vectors using a <u style={{ textDecorationColor: "pink", textDecorationThickness: 3 }}>rotor $R$</u>.
            </div>
            <div>
                The diagram below pictures our setup.
            </div>
            <ImageWithSub src="/images/sr-lengthcontraction-1.png" text="Figure 2 - Blue: Alice's frame / basis vectors. Red: Stationary stick with length l. Purple: Bob's frame / basis vectors. Pink: Rotor from Alice's to Bob's frame." width="50%" />
            <div>
                So both of <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Bob's basis vectors</u> are a bit tilted compared to <u style={{ textDecorationColor: "lightblue", textDecorationThickness: 3 }}>Alice's</u>.
                How does Bob see the measuring stick? If we try measuring the <u style={{ textDecorationColor: "red", textDecorationThickness: 3 }}>stick's difference vector</u> with Bob's reciprocal basis vectors,
                such as in the previous section, we will run into an issue:
            </div>
            <div>
                The stick expressed in terms of Bob's basis vectors has both a time and space component, as the stick is not parallel to either of his basis vectors.
                In Bob's view, the endpoints of the original stick are at different times and measuring this difference vector would not make sense as we would be measuring both a distance in space as well as a distance in time.
            </div>
            <div>
                To remedy this we need to draw a line in Bob's frame along which events occur at the same moment in time.
                For that we notice that all events on lines parallel to Bob's spatial basis vector {`$e_x^{(b)}$`} occur at the same time because {`$ {e^t}^{(b)} \\cdot e_x^{(b)} = 0$`},
                meaning Bob's time measurement does not change along the line in Bob's x direction. They are called lines of simultaneity as events on them occur at the same time.
            </div>
            <ImageWithSub src="/images/sr-lengthcontraction-2.png" text="Figure 3 - Orange: Stick along Bob's lines of simultaneity. The yellow and brown lines can be expressed in Alice's frame and relate to the orange line." width="50%" />
            <div>
                The <u style={{ textDecorationColor: "orange", textDecorationThickness: 3 }}>orange vector</u> in the drawing is a line of simultaneity because it is parallel to Bob's {`$e_x^{(b)}$`} basis vector.
                The {`$e_x^{(b)}$`} component of it in Bob's view is what we actually want to measure.
            </div>
            <div>
                We then observe that the <u style={{ textDecorationColor: "gold", textDecorationThickness: 3 }}>yellow vector with known $l$</u> plus
                the <u style={{ textDecorationColor: "#C4A484", textDecorationThickness: 3 }}>brown vector with unknown $d$</u> can be expressed
                with <u style={{ textDecorationColor: "lightblue", textDecorationThickness: 3 }}>Alice's basis vectors</u> and
                must equal the <u style={{ textDecorationColor: "orange", textDecorationThickness: 3 }}>orange vector</u> we're looking for which is expressed
                with <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Bob's basis vectors</u>.
                So we can write
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    l e_x^{(a)} + d e_t^{(a)} = l^{(b)} e_x^{(b)}
                    \\label{eq:lengthcontraction1}
                \\end{equation}
                `}
            </div>
            <div>
                We can express Bob's spatial basis vector in terms of Alice's basis vector using the rotor $R$ in the opposite direction, ie. {`$\\widetilde{R}$`}.
                Doing this, expanding the rotor's exponential and simplifying yields
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\begin{aligned}
                        l^{(b)} e_x^{(b)} & = l^{(b)} \\widetilde{R} e_x^{(b)} {R} = l^{(b)} (cosh(\\varphi) e_x^{(a)} + sinh(\\varphi) e_t^{(a)})
                    \\end{aligned}
                    \\label{eq:lengthcontraction2}
                \\end{equation}
                `}
            </div>
            <div>
                Putting together {`\\eqref{eq:lengthcontraction1}`} and {`\\eqref{eq:lengthcontraction2}`} we get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    l e_x^{(a)} + d e_t^{(a)} = l^{(b)} (cosh(\\varphi) e_x^{(a)} + sinh(\\varphi) e_t^{(a)})
                \\end{equation}
                `}
            </div>
            <div>
                If we now only look at the spatial {`$e_x^{(a)}$`} components of both sides we are left with
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    l = l^{(b)} cosh(\\varphi)
                \\end{equation}
                `}
            </div>
            <div>
                Let's solve this for the ratio between Bob's and Alice's lengths
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    \\frac{l^{(b)}}{l} = \\frac{1}{cosh(\\varphi)}
                    \\label{eq:lengthcontraction3}
                \\end{equation}
                `}
            </div>
            <div>
                Because the hyperbolic cosine function is always greater or equal to $1$, the right hand side is always less than or equal to $1$.
                This means that Bob, who is moving relative to the stick, always sees the length as shorter than Alice, who is at rest relative to the stick.
            </div>
            <div>
                A observer sees lengths in relative motion shorter than lengths at rest. This is called length contraction.
                Let's substitute $\varphi$ in {`\\eqref{eq:lengthcontraction3}`} with the velocity to get the relation between the velocity and the fraction of the length seen by a moving observer
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\frac{l^{(b)}}{l} = \\frac{1}{cosh(tanh^{-1}(\\frac{v}{c}))}
                \\end{equation}
                `}
            </div>
            <div>
                Evaluating this for $v = 0.9c$ we get around 44%. So an observer moving at 90% of the speed of light would see the stick at 44% of its original length at rest.
                Here's a plot of the relation and the value we just got.
            </div>
            <ImageWithSub src="/images/sr-lengthcontraction-3.png" text="Figure 3 - Orange: Stick along Bob's lines of simultaneity. The yellow and brown lines can be expressed in Alice's frame and relate to the orange line." width="50%" />
            <div>
                The ratio starts at $1$ and, as the velocity gets closer to the speed of light, the ratio shrinks to $0$. The effects start off slow and get more dramatic towards the speed of light.
            </div>
            <h4>Gamma factor</h4>
            <div>
                To relate with the ordinary formalism, we can also write our results in terms of the gamma factor again:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\frac{l'}{l} = \\frac{1}{cosh(tanh^{-1}(\\frac{v}{c}))} = \\sqrt{1 - \\frac{v^2}{c^2}} = \\frac{1}{\\gamma}
                \\end{equation}
                `}
            </div>
            <h4>Conclusion</h4>
            <div>
                We looked at a length in a rest frame and at how the length is seen by an observer moving relative to it.
                We noticed for length measurements it is important to measure both endpoints at the same time in the measurer's frame.
                The length ratio we arrived at varies between $1$ and $0$ as the relative speed goes up.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Lines of simultaneity: {`$e^t \\cdot v = 0$`}</li>
                    <li>Length contraction for observer moving with relative velocity $v$: {`$\\frac{l'}{l} = \\frac{1}{\\gamma(v)}$`}</li>
                </ul>
            </div>
            <h4>Up next</h4>
            <div>
                Next we will look at how a moving observer sees an electric field in electromagnetics.
            </div>
            <h4><Link to="/sr-electromagnetism">Special Relativity with Geometric Algebra - Electromagnetism</Link></h4>
        </div>
    )
}