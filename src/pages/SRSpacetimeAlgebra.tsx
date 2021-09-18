import React from "react"
import { Link } from "react-router-dom"
import { ImageWithSub, useMathJax } from "../util"


export function SRSpacetimeAlgebra() {
    useMathJax()

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Spacetime Algebra</h3>
            <h4>Time as another dimension</h4>
            <div>
                As Special Relativity tries to unify time and space, it is natural to make time just another dimension like the three spatial ones.
                We now have four basis vectors $e_t, e_x, e_y, e_z$ and call this unification Spacetime. Let's see what we can do with this.
            </div>
            <ImageWithSub src="/images/sr-time-coordinate.png" text="Figure 2 - Time as another dimension and spacetime events" width="50%" />
            <div>
                Let's look at figure 2. We choose the space axis to be horizontal and the time axis to be vertical. This might be different than what you are
                used to from your ordinary physics, but in Relativity this is standard practice so we will follow it here too.
            </div>
            <div>
                What does a point in this 4D space represent? Each point carries a time and the space coordinates, so you can think of them as an event.
                An event $a$ as shown in the digram could be "I left home at 8am" with the position being <b>home</b> and the time being <b>8am</b>.
                Another event $b$ could then be "I arrived at work at 9am" with position <b>work</b> and time <b>9am</b>. We can now form difference vectors again.
                For this example let's assume home and work are <b>10km</b> apart in the x direction. Then we have a difference vector $v = 3600s e_t + 10km e_x$.
                What if we calculate its length? Doing it like before, and assuming that all basis vectors square to $+1$ we get the expression
            </div>
            <div style={{ padding: 20 }}>
                $l^2 = v \cdot v = (\Delta x)^2 + (\Delta t)^2 = (10km)^2 + (3600s)^2$
            </div>
            <div>
                Does this expression make sense? The first problem we can notice is that the units don't match up. How do we add kilometers (spatial distance) and seconds (time difference)?
                To remedy this, we could multiply the time by a constant speed as that would result in a distance. Why not choose the speed of light $c$? We now get
            </div>
            <div style={{ padding: 20 }}>
                {`$l^2 = v \\cdot v = (\\Delta x)^2 + (c \\Delta t)^2 = (10km)^2 + (300000 \\frac{km}{s} 3600s)^2 = \\text{<big number>} km^2$`}
            </div>
            <div>
                Well we got around the unit issue, although we did not justify the multiplication by $c$ very well yet. The true justification for it will come soon.
                Another big question is whether this kind of distance is useful at all.
            </div>
            <h4>Paths in Spacetime</h4>
            <div>
                Let's look at what paths different objects trace out in spacetime. This section assumes you are already somewhat familiar with the concept of parametric curves in mathematics.
                If you are not, there are many great resources such as <a href="https://www.youtube.com/watch?v=bb4bSCjlFAw">this Khan Academy video</a>.
                We parameterize a curve in spacetime with the parameter $\lambda$. Besides that we can also calculate the path velocity that is tangent to the path by differentiating with respect to $\lambda$.
            </div>
            <ImageWithSub src="/images/sr-paths.png" text="Figure 3 - Paths in spacetime, Left: Object at rest in blue and object in motion in green, Right: Light in yellow and impossible motion in red" />
            <h5>Object at rest (Figure 3 Left: Blue / b)</h5>
            <div>
                How does an object at rest look like if we were to plot it in a spacetime diagram with one time and one space axis? An object at rest does
                not move in space, but it does move forward in time. So the "world line" of an object at rest should be a straight line in the time direction only.
                It can still be arbitrarily offset on the space dimension, it just does not move in it.
            </div>
            <div>
                Looking at the path velocity, we can notice that it always points in the $e_t$ direction, so objects at rest will always have path velocity
                proportional to $e_t$. Also if we choose the correct parameterization we can always find one where the path velocity will be exactly $e_t$.
                This property will become very important later as objects at rest play an important role in Special Relativity.
            </div>
            <h5>Light (Figure 3 Right: Yellow)</h5>
            <div>
                For each unit in time $\Delta t$, light will travel $c \Delta t$ in space. We choose the scales of our diagram axes so that light will always trace out 45° lines.
                Nothing can exceed the speed of light. In our diagrams this means all objects must have an angle between -45° and +45° as otherwise this would mean that the object
                travels faster than light, such as the red one which is not possible.
            </div>
            <h5>Object in motion (Figure 3 Left: Green / a)</h5>
            <div>
                An object that is moving in spacetime will also have $e_x$ components along the path. We already learnt before that the path can not have angles less steep than 45°
                or the object would travel faster than light. The same also applies for the path velocity, although its magnitude is not restricted by this (in fact it is arbitrary
                as we can always reparameterize to change the magnitude)
            </div>
            <h5>Choice of parameterization</h5>
            <div>
                A common choice of parameterization is so that the path velocities square to $c^2$, ie. {`$(\\frac{\\partial}{\\partial_t} a(\\tau))^2 = c^2$`}.
                The parameter $\tau$ is then called proper time. Note that often $c = 1$ is chosen so then the path velocities just square to $1$.
            </div>

            <h4>Light clocks and trains</h4>
            <div>
                First of all there are great videos demonstrating what we're about to investigate. You might want to watch them first or watch them if you get confused about the writing, the videos do a much better job.
                For example <a href="https://youtu.be/AInCqm5nCzw">this one</a> (although they put the device on the train instead of outside of it). We won't be using mirrors here as we can get the same result without two trips which also simplifies the math a bit.
            </div>
            <div>
                <video width="50%" loop autoPlay playsInline muted>
                    <source src="/videos/sr-trainclock-stationary.webm" />
                </video>
                <video width="50%" loop autoPlay playsInline muted>
                    <source src="/videos/sr-trainclock-moving.webm" />
                </video>
            </div>
            <sub style={{ textAlign: "center", margin: "20px" }}>Video 1 - Left: Apparatus as seen from Alice who is at rest with it. Right: Apparatus as seen from Bob who is moving relative to it.</sub>
            <ImageWithSub src="/images/sr-trains.png" text="Figure 4 - Left: Alice 'a' has a device that sends light from bottom and receives it at the top. Middle: Bob is on a moving train and looks at the device. Right: Charlie is on another moving train and looks at the device." />
            <h5>Setup and Alice</h5>
            <div>
                Consider Alice standing still on the ground with an apparatus as pictured in figure 4. The height of the apparatus is $h$.
                Light is sent from the bottom with horizontal coordinate $0$ to the top in a straight line.
                In this case, the light is received at the top at the same horizontal coordinate it was sent from, ie. $0$. Let's call
                the time it took for the light to be sent and received $\Delta t_a$.
            </div>
            <div>
                Given the elapsed time we know that the distance the light moved must be equal to $c \Delta t_a$ where $c$ is the speed of light.
                We also already knew that the height of the apparatus is $h$ so we have
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    h = c \\Delta t_a
                    \\label{eq:alice}
                \\end{equation}
                `}
            </div>
            <h5>Point of views and Bob's view</h5>
            <div>
                Introduce Bob on a train. From Alice's point of view the train is moving with constant velocity $v_b$ to the left.
                What exactly does "point of view" mean here? From our own point of view, we are always standing still and not moving in space.
                For example for Bob, for himself it looks like he is standing still on the train and Alice along with her apparatus are moving with velocity
                $v_b$ to the right.
            </div>
            <div>
                How does the light in the aparatus look like from Bob's view? On sending, the light starts at horizontal coordinate $0$ and is moving upwards in the aparatus.
                The second postulate of Special Relativity was that the speed of light is constant, so adding the speed of the train to the speed of light would not make sense.
                What happens in reality is that the aparatus keeps on moving so it slides away from the light, while the light just keeps moving straight up from Bob's point of view.
                When the light is received it is not received at the same horizontal coordinate anymore. If we look at the path the light traced out it is a diagonal. Let's denote
                the horizontal coordinate the light was received at $x_b$ and the time it took $t_b$.
            </div>
            <div>
                Let's look at the picture. Alice saw the light start and end at the coordinate $0$, yet Bob saw it start at $0$ and end at $x_b$. How is this possible?
                It seems unintuitive to everyday life but this is what actually happens. To better understand this let's continue and try to shed more light on the mystery.
                Using Pythagoras' theorem we can see that there is a relation between the total distance the light covered, the height of the apparatus and the horizontal distance
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    h^2 + \\Delta x_b^2 = (c \\Delta t_b)^2
                    \\label{eq:bob}
                \\end{equation}
                `}
            </div>
            <h5>Invariant distance in Spacetime</h5>
            <div>
                A third person Charlie is also on a train, but moving at a different velocity $v_c$. We will get an identical equation to Bob's
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    h^2 + \\Delta x_c^2 = (c \\Delta t_c)^2
                    \\label{eq:charlie}
                \\end{equation}
                `}
            </div>
            <div>
                Let's solve Alice's, Bob's and Charlie's equations {`\\eqref{eq:alice}, \\eqref{eq:bob}, \\eqref{eq:charlie}`} for $h^2$ (which requires squaring Alice's equation). We get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{aligned}
                    h^2 & = & (c \\Delta t_a)^2 & \\\\
                    h^2 & = & (c \\Delta t_b)^2 & - (\\Delta x_b)^2 \\\\
                    h^2 & = & (c \\Delta t_c)^2 & - (\\Delta x_c)^2 
                \\end{aligned}
                `}
            </div>
            <div>
                Does this look familiar? All three right-hand sides must be equal. Think back to the example of changing coordinate systems and how a vector changes. The coordinates
                of a vector might change, but the length of the vector does not change. The terms we have here do not look exactly like ordinary euclidean distance. They have
                a minus sign instead of a plus sign in front of the spatial offsets.
            </div>
            <div>
                Note: Alice's part only appears to be missing because her spatial offset is zero (the light started and ended at the same horizontal coordinate).
            </div>
            <div>
                What we have discovered is the distance of spacetime that we can use to measure distance between spacetime events. In 3 space dimensions we thus have
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    d = c^2 \\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2
                    \\label{eq:invariantinterval}
                \\end{equation}
                `}
            </div>
            <div>
                If this quantity is preserved, then this also implies that the usual euclidean distance in spacetime is not preserved.
            </div>
            <div>
                Using this result we can now see what changes we need to make to our 4D algebra to arrive at the correct Spacetime Algebra.
            </div>

            <h4>Spacetime Algebra</h4>
            <div>
                The only change we need to make is to the squares of our basis vectors. Having them all square to $+1$ will give us the euclidean distance where
                all signs in the distance are positive. However we want the spatial signs to be negative, so naturally we choose the spatial basis vectors to square to -1.
            </div>
            <div style={{ padding: 20 }}>
                $e_t^2 = 1, e_x^2 = e_y^2 = e_z^2 = -1$
            </div>
            <div>
                This is usually refered to as the <a href="https://en.wikipedia.org/wiki/Spacetime_algebra">Spacetime Algebra</a>. It has wide applications in physics
                and can be used to describe for example classical electromagnetics, most parts of the standard model of quantum physics and, of course, relativity.
            </div>
            <div>
                We can now verify that squaring a difference vector gives us the correct distance {`\\eqref{eq:invariantinterval}`}:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{aligned}
                    & ||c \\Delta t e_t + \\Delta x e_x + \\Delta y e_y + \\Delta z e_z||^2 = \\\\
                    = & (c \\Delta t e_t + \\Delta x e_x + \\Delta y e_y + \\Delta z e_z) \\cdot (c \\Delta t e_t + \\Delta x e_x + \\Delta y e_y + \\Delta z e_z) = \\\\
                    = & c^2 \\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2
                \\end{aligned}
                `}
            </div>
            <div>
                The algebra has the following basis blades
            </div>
            <ImageWithSub src="/images/sr-basisblades.png" text="Figure 5 - Basis blades of the Spacetime Algebra" />
            <div>
                In Geometric Algebra we are usually very interested in the bivectors as we can use them for building rotors that
                do interesting transformations which also easily compose. For example in ordinary Geometric Algebra the bivectors square to $-1$
                and the resulting rotors perform ordinary rotation.
                In the next section we will take a look at a problem that appears when dealing with speeds close to the speed of light, and
                we will try to solve the problem in the next section using our new algebra and make use of those bivectors squaring to $+1$.
            </div>
            <h4><Link to="/sr-spacetime-rotors">Special Relativity with Geometric Algebra - Spacetime Rotors</Link></h4>
        </div>
    )
}