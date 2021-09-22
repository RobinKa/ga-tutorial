import React from "react"
import { Link } from "react-router-dom"
import { ImageWithSub, useMathJax } from "../util"

export function SRSpacetimeRotors() {
    useMathJax()

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Spacetime Rotors</h3>
            <h4>Velocity addition close to the speed of light</h4>
            <div>
                To motivate spacetime rotors, we need more trains (these are very popular in relativity apparently). 
            </div>
            <ImageWithSub src="/images/sr-addvel.png" text="Figure 1 - Left: Alice is on a train throwing a ball and sees Bob outside the train, Right: Bob looks at Alice throwing a ball in her moving train" width="90%" />
            <div>
                Consider Alice is now on a train. On the train, she is throwing a ball with speed $0.4c$ (yes, yes... very contrived).
                Outside of the train is Bob who can see the train moving at $0.8c$. Alice, on the train, sees herself standing still but sees Bob
                passing by her at $-0.8c$ (ie. same speed but in the opposite direction of the train). We can now ask the question of how fast is the ball moving from the point of view of Bob.
            </div>
            <div>
                If we just add up the speed of the train as seen by Bob and the speed of the ball as seen by Alice we get $0.8c + 0.4c = 1.2c$ but this can't be as nothing can exceed the speed of light.
                Let's recall some things:
            </div>
            <div>
                <ul>
                    <li>From the paths section we know that the angle of paths is related to their speed</li>
                    <li>We also know that resting observers have path velocities proportional to $e_t$</li>
                    <li>Claim: We can use our new rotors to rotate between path velocities to find the correct velocity from Bob's perspective</li>
                </ul>
            </div>
            <div>
                Okay this might sound far-fetched first. Rotate between spacetime velocities? Let's look at this sketch.
            </div>
            <ImageWithSub src="/images/sr-rotors.png" text="Figure 2 - Diagonal yellow: Light. Left: Alice's view, Alice (blue) is at rest, Bob (purple) moves left, Ball (green) moves right. Right: Bob's view, Alice (blue) moves right, Bob (purple) is at rest, Ball (green) is moves right." />
            <h5>Alice's view (left)</h5>
            <div>
                Alice (blue) is at rest so her path velocity vector points in her $e_t$ direction.
                From Alice's view Bob (purple) is moving left so his velocity vector points left. The rotation from Bob's to Alice's velocity vector is done by applying the rotor $R_1$ to Bob's velocity vector.
                The ball moves to the right, so its velocity vector is rotated to the right. The rotation between Alice and the ball is done with the rotor $R_2$.
            </div>
            <div>
                The rotations between these vectors are all active transformations because the three velocity vectors are actually different from each other
                and it is not just Alice changing her perspective on a single unchanging vector.
            </div>
            <h5>Bob's view (right)</h5>
            <div>
                Bob's velocity vector (purple) is at rest, ie. points in his $e_t$ direction. Alice's velocity vector is rotated right with $R_1$ and the ball is rotated relative to Alice's velocity vector with $R_2$.
            </div>
            <h5>Velocity Rotors</h5>
            <div>
                Now the key observation: the rotors in the left and the right diagram are identical. The values in them are the same (unlike for the vectors!). So if we know them in one diagram we can use them in the other.
                We know $R_1$ from both views, but we only know $R_2$ from Alice's view. But if we calcualte $R_2$ in Alice's view, we can just apply it to Alice's velocity vector in Bob's view.
            </div>
            <div>
                So that's the idea. How to actually do this and how the angle relates to the speed comes in the next section.
            </div>

            <h4>Rotors in the Spacetime Algebra</h4>
            <div>
                To continue, we need to look at what the rotors in the Spacetime Algebra actually do. We will only need the rotors for bivectors squaring to $+1$, ie. {`$e_{tx}, e_{ty}, e_{tz}$`}.
                Let's stick with {`$e_{tx}$`} for now. How do we get rotors from bivectors? We stick them in the exponential function with an angle $\varphi$, usually negated and halved because we need to apply a
                two-sided product.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    R(\\varphi) = e^{-\\frac{\\varphi}{2}e_{tx}}
                \\end{equation}
                `}
            </div>
            <div>
                Can we expand this further? Usually we get something involving sine and cosine for performing ordinary rotations, but that is because the bivector in the exponential squared to $-1$.
                It turns out in the case of $+1$ we get hyperbolic sine and hyperbolic cosine. You can get this result by using the taylor series for the exponential function and comparing
                it with the taylor series of the hyperbolic sine and cosine functions. Anyway, we now get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    R(\\varphi) = e^{-\\frac{\\varphi}{2}e_{tx}} = cosh(-\\frac{\\varphi}{2}) + sinh(-\\frac{\\varphi}{2}) e_{tx}
                \\end{equation}
                `}
            </div>
            <div>
                What does this rotor do? It's not ordinary rotation, it is hyperbolic rotation! What is hyperbolic rotation? I promised you earlier we could use these rotors to
                rotate velocity vectors and use them for velocity addition. Let's apply them to the rest velocity vector $e_t$ and see what we can infer from that
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    R(\\varphi) e_t \\widetilde{R}(\\varphi) = cosh(\\varphi) e_t + sinh(\\varphi) e_x
                \\end{equation}
                `}
            </div>
            <div>
                The steps between the left-hand side and right-hand side are left as an excercise. This will require some identities involving the hyperbolic sine and cosine functions, or
                you can just throw them into Wolfram Alpha to see what the parts simplify to.
            </div>
            <div>
                We can see the result is some mix of $e_t$ and $e_x$.
            </div>
            <ImageWithSub src="/images/sr-rotors2.png" text="Figure 3 - Yellow: Light. Dark blue: Velocity of object at rest. Light blue: Velocity of moving object. Orange: Rotor between object at rest and moving object." width="50%" />
            <div>
                To get some more intuition let's look at the slope of the result. The $e_t$ part is on the y-axis and the $e_x$ part is on the x-axis
                so we have
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    slope(\\varphi) = \\frac{sinh(\\varphi)}{cosh(\\varphi)} = \\frac{1}{tanh{\\varphi}}
                \\end{equation}
                `}
            </div>
            <div>
                So the slope is equal to one over the hyperbolic tangent $tanh$. If you're familiar with neural networks you probably already know how the $tanh$ function looks (and perhaps other fields I'm not familiar with).
                Here's a sketch
            </div>
            <ImageWithSub src="/images/sr-tanh.png" text="Figure 4 - Hyperbolic tangent function, zero at phi equal to 0, one towards positive and negative infinity." width="50%" />
            <div>
                The second part we need for plotting what the result looks like is the length of the resulting vector. The length in our graph is the euclidean length. This is of course not the length / distance
                we use in the algebra, but in our drawings, if the $e_x$ and $e_t$ components get bigger, then the vector we draw always gets bigger too. So we also have
            </div>

            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    graphlength(\\varphi) = \\sqrt{cosh^2(\\varphi) + sinh^2(\\varphi)}
                \\end{equation}
                `}
            </div>
            <div>
                Now we take a deeper look at the slope result we got earlier for different rotor angles $\varphi$.
            </div>
            <div>
                If $\varphi = 0$, then the slope is $\infty$ (vertical) and the graph length is $1$.
                This makes sense as rotating by $0$ should leave the input unchanged.
                Furthermore, for $\varphi \to \infty$, we can see that $slope \to 1$. As we increase the angle of the rotor, the slope tends towards $1$. A slope of $1$ is a 45° angle. Recall that
                light travels at 45° angles, so this is good! If we increase the angle, our velocity vector rotates towards the speed of light.
                Using these rotors we can never exceed (or even reach) 45°. Finally, the length also tends towards infinity, meaning if we rotate the rest
                velocity vector, its length will always increase.
            </div>
            <h5>Relation between velocity and angle</h5>
            <div>
                Given what we learnt, we can try to figure out the relationship between the angle $\varphi$ and the velocity $v$.
                We know that the slope for light is $1$, so {`$tanh(\\varphi_{light}) = 1$`}. We also know that the rest velocity
                has slope infinity (vertical), ie. {`$tanh(0) = 0$`}. Based on these two data points, what do you think the relation is?
                The correct answer that also fits both data points is
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    tanh(\\varphi) = \\frac{v}{c}
                    \\label{eq:anglevelocity}
                \\end{equation}
                `}
            </div>
            <div>
                We will use this relation in the next section to finally solve our velocity addition problem.
            </div>

            <h4>Velocity addition close to the speed of light: revisited</h4>
            <ImageWithSub src="/images/sr-rotors.png" text="Figure 5 - Diagonal yellow: Light. Left: Alice's view, Alice (blue) is at rest, Bob (purple) moves left, Ball (green) moves right. Right: Bob's view, Alice (blue) moves right, Bob (purple) is at rest, Ball (green) is moves right." />
            <div>
                And we're back. This time equipped with the power of rotors that can rotate velocities and the relation between angles and velocities!
                We want to figure out the velocity of the ball from Bob's perspective (which we don't know yet). For that we look at Bob's frame where he is at rest and apply the two rotors (which we do know).
                Let me show you one more thing (that you probably already knew!) about rotors before we tackle the problem.
            </div>
            <div>
                When we compose two rotors in the same plane we get (no matter what the bivector squares to)
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    R(\\varphi_1) R(\\varphi_2) = e^{-\\frac{\\varphi_1}{2}e_{tx}} e^{-\\frac{\\varphi_2}{2}e_{tx}} = e^{-\\frac{\\varphi_1 + \\varphi_2}{2}e_{tx}} = R(\\varphi_1 + \\varphi_2)
                \\end{equation}
                `}
            </div>
            <div>
                When composing two rotations the angles just add. This is still the case even with our hyperbolic rotations. It turns out to solve the problems
                we don't even need to use rotors directly. First we calculate the two angles corresponding to the two velocities we were given. To get the angle from velocity we solve {`\\eqref{eq:anglevelocity}`} for $v$.
                Then we add the angles. Finally we need to convert the resulting angle back to a velocity using {`\\eqref{eq:anglevelocity}`}, and that will be the velocity of the ball as seen from Bob.
            </div>
            {`
            \\begin{equation}
                v_{ball} = c \\cdot tanh(\\varphi_1 + \\varphi_2) = c \\cdot tanh(tanh^{-1}(0.8) + tanh^{-1}(0.4)) \\approx 0.9c
            \\end{equation}
            `}
            <div>
                The ball moves at around $0.9c$ from Bob's perspective.
            </div>

            <h4>Conclusion</h4>
            <div>
                We started by noticing that adding velocities close to the speed of light fails with ordinary addition because the speed of light can be exceeded.
                We then saw how we can relate velocity vectors using rotors with bivectors that square to $+1$. We noticed that these rotors rotate velocity vectors
                towards the speed of light but never exceed it. We also saw that the rotors don't change with passive transformations so we could compose them
                to solve our velocity addition problem. The result was that we can add the rotor angles for rotors in the same plane and relate them to velocities
                using the formula {`$tanh(\\varphi) = \\frac{v}{c}$`}.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Relation between angle and velocity: {`$tanh(\\varphi) = \\frac{v}{c}$`}</li>
                    <li>Addition of angles: {`$\\varphi_{a+b} = \\varphi_a + \\varphi_b$`}</li>
                    <li>Addition of velocities: {`$v_{a+b} = c \\cdot tanh(\\varphi_{a+b}) = c \\cdot tanh(tanh^{-1}(\\frac{v_a}{c}) + tanh^{-1}(\\frac{v_b}{c}))$`}</li>
                </ul>
            </div>
            <h4>Up next</h4>
            <div>
                Next we will look at how we can take measurements in Spacetime.
            </div>
            
            <h4><Link to="/sr-measuring">Special Relativity with Geometric Algebra - Measuring in Spacetime</Link></h4>
        </div>
    )
}