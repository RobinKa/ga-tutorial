import React from "react"
import { Link } from "react-router-dom"
import { ImageWithSub, useMathJax } from "../util"


export function SRSpacetimeAlgebra() {
    useMathJax()

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Spacetime Algebra</h3>
            <h4>Paths of objects</h4>
            <h5>Position over time</h5>
            <ImageWithSub src="/images/sr-path-basic.png" text="Figure 1 - Path of an object with constant velocity. X-axis: time. Y-axis: space." width="50%" />
            <div>
                In physics we often draw the path an object takes over time in a diagram where time is on the x-axis and space is on the y-axis.
                Figure 1 shows such a diagram. For an object with a constant velocity of one half meters per second we have the following equations
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                    s(t) & = \\frac{1}{2} \\mathrm{\\frac{m}{s}} t \\\\
                    v(t) & = \\frac{\\partial}{\\partial t} s(t) = \\frac{1}{2} \\mathrm{\\frac{m}{s}}
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <h5>Position over time - flipped space and time axes</h5>
            <div>
                In relativity, the space and time axes are usually flipped, so we space is on the x-axis and time is on the y-axis.
                We will also follow this standard practice. Doing this our diagram will look like this
            </div>
            <ImageWithSub src="/images/sr-path-flipped.png" text="Figure 2 - Path of an object with constant velocity,  X-axis: space. Y-axis: time." width="50%" />
            <div>
                Since we are using geometric algebra, let's try to use vectors to formulate paths of objects instead. We will have the usual spatial basis vectors $e_x, e_y, e_z$, but why
                not introduce a basis vector $e_t$ for time too? After all, in our diagram these don't really look any different. If we do this we have four basis vectors in total
                and instead of just space we now have spacetime.
            </div>
            <h5>Parameterized paths with vectors</h5>
            <ImageWithSub src="/images/sr-path-vector.png" text="Figure 3 - Light-blue: Orthonormal basis vectors for time and space. Blue: Vector path of an object parameterized by $\lambda$. Green: Path velocity of the blue path." width="60%" />
            <div>
                For our previous example, for every step in the space direction we take two steps in the time direction. So an unnormalized direction vector for the <u style={{ textDecorationColor: "blue", textDecorationThickness: 3 }}>path</u> is given by $2 e_t + 1 e_x$.
                We can now introduce a parameter $\lambda$ that sweeps out our path
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    s(\\lambda) = \\lambda (2 e_t + 1 e_x) \\\\
                \\end{equation}
                `}
            </div>
            <div>
                We can also calculate a <u style={{ textDecorationColor: "#00FF91", textDecorationThickness: 3 }}>path velocity</u> by taking the derivative with respect to our path parameter $\lambda$
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    v = \\frac{\\partial}{\\partial \\lambda} s(\\lambda) = 2 e_t + 1 e_x
                \\end{equation}
                `}
            </div>
            <div>
                The path velocity is always tangent to the path.
            </div>
            <div>
                Note that the parameterization for our path is somewhat arbitrary. We could just as well have multiplied by path by a constant and have gotten the same path.
                What happens to the path velocity when we multiply our path by a constant factor $k$? Let's see:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                    s_k(\\lambda) & = \\lambda k (2 e_t + 1 e_x) \\\\
                    v_k & = \\frac{\\partial}{\\partial \\lambda} s_k(\\lambda) = k (2 e_t + 1 e_x)
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                The path velocity also receives the constant factor $k$. In order to fix this arbitrary path parameter, we choose the
                length of the path velocity to be the speed of light, ie. $||v||^2 = v^2 = c^2$. The path parameter which we generally called $\lambda$
                is then called the proper time $\tau$.
            </div>
            <div>
                Our path parameterized by proper time is then $s(\tau)$ and we introduce a short-hand notation for the derivative with respect to proper time {`$\\dot{s}(\\tau) = \\frac{\\partial}{\\partial \\tau} s(\\tau)$`}.
                Because of our definition for proper time we now have {`$\\dot{s}^2 = c^2$`}. In many places the same equation but with $1$ on the right-hand side is seen.
                This is because often the choice $c = 1$ is made.
            </div>

            <h4>Spacetime events</h4>
            <div>
                Another thing we want to look at is what the points in our spacetime, such as the points on our paths, represent. A point contains a time coordinate and three space coordinates.
                Points in spacetime are also called events because of this.
            </div>
            <ImageWithSub src="/images/sr-time-coordinate.png" text="Figure 2 - Time as another dimension and spacetime events" width="50%" />
            <div>
                An event $a$ as shown in the diagram could be "I left home at 8am" with the position being <b>home</b> and the time being <b>8am</b>.
                Another event $b$ could then be "I arrived at work at 9am" with position <b>work</b> and time <b>9am</b>. We can now form difference vectors again.
                For this example let's assume home and work are <b>10km</b> apart in the x direction. Then we have a difference vector
            </div>
            <div style={{ padding: 20 }}>
                {`$v = 3600 \\mathrm{s} e_t + 10 \\mathrm{km} e_x$`}
            </div>
            <div>
                Does this expression make sense? The first problem we can notice is that the units don't match up. How do we add kilometers (spatial distance) and seconds (time difference)?
                To remedy this, we could multiply the time component by a constant speed as that would result in a distance. Why not choose the speed of light $c$? We now the following
                expression with the correct units
            </div>
            <div style={{ padding: 20 }}>
                {`$v = c 3600 \\mathrm{s} e_t + 10 \\mathrm{km} e_x$`}
            </div>
            <div>
                Well we got around the unit issue, although we did not justify the multiplication by $c$ very well yet. The true justification for it will come soon.
            </div>

            <h4>More spacetime paths</h4>
            <div>
                Let's take a look at some more types of paths in spacetime.
            </div>
            <ImageWithSub src="/images/sr-paths.png" text="Figure 4 - Paths in spacetime. Blue (a): Object at rest. Green (b): Object with constant velocity. Purple (c): Accelerated object. Yellow (d): Light. Red (e): Path faster than light." />
            <h5><u style={{ textDecorationColor: "blue", textDecorationThickness: 3 }}>Object at rest (a)</u></h5>
            <div>
                An object at rest does not move in space over time. Its path points purely in the time direction.
                The path can of course still be arbitrarily offset on the space axes.
            </div>
            <div>
                The path velocity always points in the $e_t$ direction, so objects at rest will always have path velocity proportional to $e_t$.
                Paths parameterized by proper time $\tau$ will have path velocity $c e_t$ because by definition, the path velocity for paths parameterized by proper time squares to $c^2$.
                This will become very important later as objects at rest play an important role in Special Relativity.
            </div>
            <h5><u style={{ textDecorationColor: "lime", textDecorationThickness: 3 }}>Object with constant velocity (b)</u></h5>
            <div>
                Objects with constant velocity can move in space. Their path will be a rotated straight line. The more rotated the line is towards the space dimension, the faster the object goes.
            </div>
            <div>
                The path velocity for an object moving along the x-direction will be some mix of $e_x$ and $e_t$, although there are some restrictions to this.
            </div>
            <h5><u style={{ textDecorationColor: "purple", textDecorationThickness: 3 }}>Object with acceleration (c)</u></h5>
            <div>
                An object with acceleration could trace out a curved path like $c$ in the diagram. Objects with non-zero acceleration won't be covered for now.
            </div>
            <h5><u style={{ textDecorationColor: "gold", textDecorationThickness: 3 }}>Light (d)</u></h5>
            <div>
                Light always moves at the speed of light. This is the second postulate of Special Relativity. Its path can be parameterized by $l(\lambda) = c \lambda e_t + c \lambda e_x$
                (the factor of $c$ for the time dimension, as mentioned earlier, will be fully justified later).
                This will trace out a 45° angle in our diagrams. 
            </div>
            <h5><u style={{ textDecorationColor: "red", textDecorationThickness: 3 }}>Faster than light (e)</u></h5>
            <div>
                Because nothing can move faster than light, this means all of our paths need to be steeper than 45°.
                Otherwise the object would be going faster than light.
            </div>

            <h4>Spacetime distance</h4>
            <div>
                A thing we have not looked at yet is what a good notion of distance in spacetime is, and thus what our basis vectors should square to as squaring vectors gives their length, and hence distance.
                To motivate this we will perform a thought experiment involving light clocks and trains.
            </div>
            <h5>Light clocks and trains</h5>
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