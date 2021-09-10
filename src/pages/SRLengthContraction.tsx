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
                This section is based on <a href="https://www.youtube.com/channel/UCN8wTUlSAroLslWyf87E2pw">Eigenchris'</a> video "Relativity 104c: Special Relativity - Time Dilation and Length Contraction Geometry"
                and the length contraction part is discussed at <a href="https://www.youtube.com/watch?v=WOLUSQK1Jtk&amp;t=1347s">this part</a>. If you have trouble following the text here it is
                worth watching the length contraction part of the video.
            </div>
            <h4>Changing Bases</h4>
            <ImageWithSub src="/images/sr-rotors.png" text="Figure 1 - Diagonal yellow: Light. Left: Alice's view, Alice (blue) is at rest, Bob (purple) moves left, Ball (green) moves right. Right: Bob's view, Alice (blue) moves right, Bob (purple) is at rest, Ball (green) is moves right." />
            <div>
                There is another perspective to the velocity addition problem we solved in the previous section. Another way to view this is that we rotated Alice's
                basis vector (her spacetime velocity) {`$e_t^{(a)}$`} into Bob's basis vector {`$e_t^{(b)}$`} (his spacetime velocity).
                This is done with the rotor in $R_1$ in the opposite direction, ie. {`$\\widetilde{R_1}$`}. We do this to all basis vectors and we get
                <div style={{ padding: 20 }}>
                    {`
                    \\begin{aligned}
                        e_t^{(b)} & = \\widetilde{R_1} e_t^{(a)} R_1 \\\\
                        e_x^{(b)} & = \\widetilde{R_1} e_x^{(a)} R_1 \\\\
                        e_y^{(b)} & = \\widetilde{R_1} e_y^{(a)} R_1 \\\\
                        e_z^{(b)} & = \\widetilde{R_1} e_z^{(a)} R_1
                    \\end{aligned}
                    `}
                </div>
                The velocity vector of the ball is given in Alice's frame, ie. in terms of her basis vectors.
                Now all we need to do is express it in terms of Bob's basis vectors, which is the same as applying $R_1$ to it,
                which is what it says in the diagram already and what we did in the previous section. So this is just a different
                view on the same thing. But we will find that this perspective is very useful for the next problem.
            </div>
            <h4>Length Contraction</h4>
            <div>
                Imagine <u style={{ textDecorationColor: "lightblue", textDecorationThickness: 3 }}>Alice</u> is standing still and is looking at a fixed-length object that is not moving in her view either,
                for example a <u style={{ textDecorationColor: "red", textDecorationThickness: 3 }}>stick</u> on a table.
                How does Alice measure the stick? She looks at the endpoints which are only separated on her space axis and takes the difference.
                What is very important here: the endpoints are not separated in her time axis! She is only measuring a spatial distance and the time for
                both endpoints is the same. Let's add <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Bob</u> who is moving relative to Alice.
                We get the transformation between Alice's and Bob's basis vectors using a <u style={{ textDecorationColor: "pink", textDecorationThickness: 3 }}>rotor $R$</u>. We can now draw a diagram like this
            </div>
            <ImageWithSub src="/images/sr-lengthcontraction-1.png" text="Figure 2 - Blue: Alice's frame / basis vectors. Red: Stationary stick with length l. Purple: Bob's frame / basis vectors. Pink: Rotor from Alice's to Bob's frame." width="50%" />
            <div>
                So both of <u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Bob's basis vectors</u> are a bit tilted compared to <u style={{ textDecorationColor: "lightblue", textDecorationThickness: 3 }}>Alice's</u>.
                How does Bob see the measuring stick?
                The <u style={{ textDecorationColor: "red", textDecorationThickness: 3 }}>stick's vector</u> expressed using Bob's basis vector has both a time and space component, as it is not parallel to either of his Basis vectors.
                So using it for measuring length would not make sense as we would be measuring both a distance in space as well as
                a distance in time.
            </div>
            <div>
                To remedy this we need to draw a line in Bob's frame along which events occur at the same moment in time.
                These lines are parallel to Bob's spatial basis vector {`$e_x^{(b)}$`} because {`$e_x^{(b)} \\cdot e_t^{(b)} = 0$`},
                meaning moving along it does not change the time components.
                These kinds of lines are called lines of simultaneity as events on the line occur at the same time and only at different places in space.
            </div>
            <ImageWithSub src="/images/sr-lengthcontraction-2.png" text="Figure 3 - Orange: Stick along Bob's lines of simultaneity. The yellow and brown lines can be expressed in Alice's frame and relate to the orange line." width="50%" />
            <div>
                From the drawing we can tell that the <u style={{ textDecorationColor: "gold", textDecorationThickness: 3 }}>yellow vector with known $l$</u> plus
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
                If we now only look at the spatial parts of both sides, we are left with
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
                \\end{equation}
                `}
            </div>
            <div>
                Because the hyperbolic cosine function is always greater or equal to $1$, the right hand side is always less than or equal to $1$.
                This means that the length of the stick as seen by Bob is always equal to (if Bob is at rest from Alice's view, meaning at rest relative to the stick)
                or less than (if Bob is moving from Alice's view, meaning moving relative to the stick) the length of the stick as seen from Alice's view.
            </div>
            <div>
                A observer sees lengths moving relative to it shorter than lengths at rest! This is called length contraction.
                Let's substitute $\varphi$ with the velocity to get the relation between the velocity and the fraction of the length seen by a moving observer
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
                In ordinary Special Relativity the ratio we arrived is called the <a href="https://en.wikipedia.org/wiki/Lorentz_factor">Gamma factor or Lorentz factor</a> {`$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}.
                and is used all over the place there. However the expression we have right now involves hyperbolic functions does not look exactly like the gamma factor yet.
                To bring it into the same form, we use the identity {`$cosh(tanh^{-1}(x)) = \\frac{1}{\\sqrt{1 - x^2}}$`}:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\frac{l^{(b)}}{l} = \\frac{1}{cosh(tanh^{-1}(\\frac{v}{c}))} = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma
                \\end{equation}
                `}
            </div>
            <h4>Summary</h4>
            <div>
                First we saw that we can change between reference frames (ie. basis vectors of different observers) using rotors.
                Then we looked at a length in a rest frame and at how the length is seen by an observer moving relative to it.
                We noticed for length measurements it is important to measure both endpoints at the same time in the measurer's frame.
                The length ratio we arrived at was the Gamma factor which varies between $1$ and $0$ as the relative speed goes up.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Rotate coordinate frames if $R$ rotates from b's to a' velocity: {`$e_t^{(b)} = \\widetilde{R}(\\phi_b) e_t^{(a)} R(\\phi_b)$`}, {`$e_x^{(b)} = \\widetilde{R}(\\phi_b) e_x^{(a)} R(\\phi_b)$`} </li>
                    <li>Gamma factor for observer moving with velocity $v$: {`$\\gamma(v) = \\frac{1}{cosh(tanh^{-1}(\\frac{v}{c}))} = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}</li>
                    <li>Length contraction for observer b moving with relative velocity $v$: {`$\\frac{l^{(b)}}{l} = \\gamma(v)$`}</li>
                </ul>
            </div>
            <h4>Up next</h4>
            <div>
                Next we will look at how a moving observer sees an electric field in electromagnetics.
            </div>
            <h4><Link to="/sr-electromagnetics">Special Relativity with Geometric Algebra - Electromagnetics</Link></h4>
        </div>
    )
}