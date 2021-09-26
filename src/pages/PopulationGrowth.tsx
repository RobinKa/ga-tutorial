import React from "react"
import {  ImageWithSub, useMathJax } from "../util"

export function PopulationGrowth() {
    useMathJax()

    return (
        <div>
            <h3>Population Growth in Hyperbolic Space with Geometric Algebra</h3>
            <div>
                This article is a quick introduction to population growth models.
                But what a strange title. What does population growth have to do with hyperbolic space?
            </div>
            <div>
                While looking for nails for my hammer (hyperbolic space with GA) I found population growth models and noticed they can be modeled
                exactly like Special Relativity.
            </div>
            <h4>Logistic Growth Model</h4>
            <div>
                Population growth is often modelled as <a href="https://en.wikipedia.org/wiki/Logistic_function#In_ecology:_modeling_population_growth">logistic growth</a>.
                The intuition is that a population denoted by $P$ first grows exponentially over time.
                Eventually the population runs into constraints such as space or food, so it will approach some maximum population.
                The maximum population is called the carrying capacity and is denoted by $K$.
                Furthermore the population's growth rate is denoted by $r$. For an exponential function the growth rate would tell you over what timespan the population doubles.
                This is true here initially until the population runs into the constraints.
            </div>
            <div>
                The usual formula for the population over time given the carrying capacity and growth rate is
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    P(t) = \\frac{K}{1 + \\frac{K - P(0)}{P(0)} e^{-r t}}
                    \\label{eq:popgrowth-usual}
                \\end{equation}
                `}
            </div>
            <ImageWithSub src="/images/pg-logistic.svg" text="Figure 1 - Population growth modelled with the logistic function for K=1000, P(0)=500, r=2." />

            <h4>Rewriting the population equation</h4>
            <div>
                If we now define the population at $t = 0$ to be half the maximum carrying capacity, meaning {`$P(0) = \\frac{K}{2}$`},
                equation {`\\eqref{eq:popgrowth-usual}`} simplifies to
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    P(t) = \\frac{K}{1 + e^{-r t}}
                    \\label{eq:popgrowth-rewritten}
                \\end{equation}
                `}
            </div>
            <div>
                Now the key part which is also the reason why I started looking at population growth in the first
                place: equation {`\\eqref{eq:popgrowth-rewritten}`} contains the sigmoid function which is just an offset and rescaled version of the $tanh$ function.
                If you are into Machine-Learning you might already be familiar with this. The sigmoid function {`$\\sigma(x) = \\frac{1}{1 + e^{-x}} = \\frac{tanh(x) + 1}{2}$`}.
            </div>
            <div>
                The $tanh$ function is interesting because it pops up in Special Relativity and Hyperbolic Space.
                With this, equation {`\\eqref{eq:popgrowth-rewritten}`} can be rewritten to
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    P(t) = \\frac{K}{2} (tanh(r t) + 1)
                    \\label{eq:popgrowth-tanh}
                \\end{equation}
                `}
            </div>
            <h4>Relation to Special Relativity and Hyperbolic Space</h4>
            <div>
                In the GA treatment of Special Relativity we convert relative spatial velocities $v$ to hyperbolic angles $\varphi$ using
                the equation
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    tanh(\\varphi) = \\frac{v}{c}
                    \\label{eq:tanh-relation-sr}
                \\end{equation}
                `}
            </div>
            <div>
                We can compare this to our population growth model. Let's solve equation {`\\eqref{eq:popgrowth-tanh}`} for the $tanh$ term.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    tanh(r t) = \\frac{2 P}{K} - 1
                \\end{equation}
                `}
            </div>
            <div>
                We can now define {`$\\varphi = r t$`} to get the analogue of equation {`\\eqref{eq:tanh-relation-sr}`} for logistic population growth.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    tanh(\\varphi) = \\frac{2 P}{K} - 1
                    \\label{eq:tanh-relation-pg}
                \\end{equation}
                `}
            </div>
            <div>
                From here on, we can do everything exactly like we did in Special Relativity.
                Instead of the four basis vectors {`$e_t^2 = +1, e_{x,y,z}^2 = -1$`} we have two
                basis vectors {`$e_1^2 = +1, e_2^2 = -1$`}. Instead of velocity vectors, we have population vectors.
            </div>
            <div>
                In Special Relativity, the angle of the velocity vector was related to the spatial velocity.
                In Population Growth, the angle of the population vector is related to the population.
            </div>
            <div>
                In Special Relativity, velocity vectors in the $e_t$ direction correspond to velocities at rest.
                In Population Growth, vectors in the $e_1$ direction correspond to the population at $t = 0$ which we defined to be {`$\\frac{K}{2}$`} earlier.
            </div>
            <h4>Population Growth Rotors</h4>
            <div>
                In Special Relativity we had rotors to change our velocity vectors (ie. accelerate / decelerate the spatial velocity). In Population Growth we have rotors that
                can change our population vectors (ie. increase / decrease the population). Concretely, the rotor is
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                R = e^{-\\varphi/2 e_{12}}
                \\end{equation}
                `}
            </div>
            <div>
                and applying such a rotor to $e_1$ yields
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                v = R e_1 \\widetilde{R} = cosh(\\varphi) e_1 + sinh(\\varphi) e_2
                \\end{equation}
                `}
            </div>
            <div>
                In Special Relativity, the vector approaching a 45° angle means approaching the speed of light. Here, the vector approaching a 45°
                angle means approaching the carrying capacity (or zero in the negative direction).
            </div>
            <h4>Example</h4>
            <div>
                We use the following constants:
                <ul>
                    <li>Carrying capacity $K = 2000$</li>
                    <li>Growth rate $r = 2$</li>
                </ul>
                Our initial population is then {`$P_1(0) = \\frac{K_1}{2} = 1000$`}.
            </div>
            <div>
                Let's say we apply a rotor that takes us from our initial population of $1000$ to $500$ more, that is, we apply the rotor $R_2$
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                v_2 = R_2 e_1 \\widetilde{R_2} = cosh(\\varphi) e_1 + sinh(\\varphi) e_2 = cosh(\\tanh^-1{\\frac{2 P}{K} - 1}) e_1 + sinh(\\tanh^-1{\\frac{2 P}{K} - 1}) e_2
                \\end{equation}
                `}
            </div>
            <div>
                The resulting vector $v_2$ encodes the new second population of $1500$ (from the point of view of the first population)
                which we could extract by solving for $P$.
            </div>
            <h4>Population is relative?</h4>
            <div>
                In relativity, if the vector were a velocity vector, we could think of it as the rest vector of another observer. We can do the same here!
                If we choose $v$ as the "rest vector" of another population, this other population would have their own initial population equal to $1000$ again,
                because the carrying capacity is a constant just like the speed of light is. Now if this second population sees a population growth of $900$,
                we apply the rotor $R_b$ to $e_1$ from the second population's view.
            </div>
            <div>
                How does this "look like" (analogue to changing basis vectors / perspectives in Special Relativity) from the first population?
                We can't just add $900$ on top of the second population $500$ as that would exceed the carrying
                capacity of $K_1 = 1000$ of the first population. Instead, we compose the two rotors to get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                v_3 = R_3 R_2 e_1 \\widetilde{R_3 R_2}
                \\end{equation}
                `}
            </div>
            <div>
                Which will yield a vector closer to the first population's carrying capacity but still less than it.
                Instead of composing the rotors and dealing with the vectors we can also just deal with the angles of the rotors.
                The angles just add. So we get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\varphi_{2+3} = \\varphi_2 + \\varphi_3 = \\tanh^-1(\\frac{2 P_2}{K} - 1) + \\tanh^-1(\\frac{2 P_3}{K} - 1)
                \\end{equation}
                `}
            </div>
            <div>
                and solving the angle for the population with equation {`\\eqref{eq:tanh-relation-pg}`} finally yields
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                P_{2+3} = \\frac{K}{2} (tanh(\\tanh^-1(\\frac{2 P_2}{K} - 1) + \\tanh^-1(\\frac{2 P_3}{K} - 1)) + 1) \\approx 1966
                \\end{equation}
                `}
            </div>
            <h4>Population is not relative!</h4>
            <div>
                Of course instead of saying the carrying capacity is constant, we could have also viewed the carrying capacity
                as changing between points of view. Then we always keep around some absolute scale, but the math works out identically I believe.
                The rotors then provide a sort of mapping between different populations and population changes in them.
            </div>
            <h4>Conclusion</h4>
            <div>
                We saw how logistic population growth can be modelled almost identically to Special Relativity in Geometric Algebra.
                Carrying capacity is like the speed of light. A population always approaches the carrying capacity.
                We can shift our perspective to populations with a different carrying capacity just like we shift perspective in Special Relativity
                to observers with a different velocity relative to us. We can see how a population growth in a population with one carrying capacity
                transfers to another population with another carrying capacity using boost rotors.
            </div>
            <div>
                Whether this is useful at all I have no idea. But the math works out the same as for Special Relativity.
            </div>
        </div>
    )
}