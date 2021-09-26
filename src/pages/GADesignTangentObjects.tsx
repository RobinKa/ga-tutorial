import React from "react"
import { useMathJax } from "../util"
import { CoffeeShop } from "./CoffeeShop"

export function GADesignTangentObjects() {
    useMathJax()

    return (
        <div>
            <h3>Designing Geometric Algebras - Tangent Objects</h3>
            <div>
                With part 1 of this series we are successfully able to represent any shape as a GA element.
                One thing we might want is an object representing the tangent space on the object.
            </div>
            <div>
                In a curve in 2 dimensional space, the tangent space at a point would just be the tangent line at it.
                In 3 dimensions, the tangent space of a curve would still be a tangent line, this this time it is a line in 3 dimensions instead of 2.
                If we look at a surface in 3 dimensions, its tangent space at a point on it would be a plane at that point tangent to the surface.
            </div>
            <div>
                The tangent space is also related to derivatives. In 2D, the derivative of a curve is the slope of it. We can represent
                the derivative at a specific point by drawing a tangent line at it. For a surface in 3D we can take the derivative in
                two non-parallel directions on the surface, which will give us tangent lines that together span the tangent plane of the surface.
            </div>
            <div>
                It would be nice if we had a simple procedure for getting objects representing the tangent space at a point of another object.
                In the next part we will start by examining parabolas as a concrete example for all of this. In the end we will have a general
                procedure.
            </div>
            <h4>Parabola example</h4>
            <div>
                Suppose we want to represent parabolas $y = ax^2 + bx + c$ in GA. The equation contains four terms $1, x, x^2, y$, so we need four basis
                vectors and the up function mapping from points to vectors will be
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                up(x) = 1 e_0 + x e_1 + x^2 e_2 - y e_3
                \\end{equation}
                `}
            </div>
            <div>
                We could now join three points together into a parabola that goes through all three of them, and extract the intrinsic equation by looking at its
                Outer Product Null Space / Join Null Space (JNS).
            </div>
            <h4>Derivatives and tangent lines</h4>
            <div>
                Next we want to figure out the derivative of the parabola. We already know that tangent lines are related to derivatives,
                so we will try to find the object representing the tangent line at a point on the parabola.
            </div>
            <div>
                We start by defining a parabola $f(x) = y = ax^2 + bx + c$. Then, given a point represented by the vector
                $u = up(u_x, f(u_y))$ on the parabola, how can we get an object representing the line that is tangent the parabola at that point?
            </div>
            <div>
                The first thing we need to do is make sure the line is actually tangent to the parabola. We could achieve this by taking the point $u$
                and taking a small step $\delta_x$ along the parabola. We call the slightly offset point $v$.
                Then we need to build up the object representing the line that goes through those two points, so we start by joining the two points.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                u \\wedge v = up(u_x, f(u_x)) \\wedge up(u_x + \\delta_x, f(u_x + \\delta_x))
                \\end{equation}
                `}
            </div>
            <div>
                This will result in a bivector. But curves, including lines, are represented by pseudovectors (trivectors in this case) in our algebra, not bivectors.
                To get a trivector that represents a line curve, what we need to do is join the $x^2$ basis vector $e_2$ with our bivector.
                This ensures that when we look at the JNS, we will only have $1, x, y$ terms remaining because wedging the
                trivector with the $x^2$ basis vector again will give zero.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                t = u \\wedge v \\wedge e_2 = up(u_x, f(u_x)) \\wedge up(u_x + \\delta_x, f(u_x + \\delta_x)) \\wedge e_2
                \\label{eq:parabola-tangent-line}
                \\end{equation}
                `}
            </div>
            <div>
                So we arrive at the object we call $t$ that will (hopefully) represent the tangent line.
                The result of wedging three points into a parabola, and the tangent line through two close points on it is visualized below.
            </div>
            <CoffeeShop id="VbCYtdENd" title="Red, Green, Blue: Points, green and blue are close and lie on a parabola. Teal: Parabola from wedging red, green and blue. Pink: Tangent line to the parabola through green and blue." />
            <h4>Examining the tangent line object</h4>
            <div>
                To examine $t$ we will apply the JNS equation to it, which is
                wedging (joining) a variable point $up(x, y)$ with it.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                t \\wedge up(x, y) & = up(u_x, f(u_x)) \\wedge up(u_x + \\delta_x, f(u_x + \\delta_x)) \\wedge e_3 \\wedge up(x, y) = \\\\
                & = \\delta_x (-\\delta_x a u_x + \\delta_x a x - a u_x^2 + 2 a u_x x + b x + c - y) = 0
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                The result contains the small step $\delta_x$, the x coordinate of the point at which we want the tangent line,
                the parabola parameters $a, b, c$ and the variable x parameter of the parabola.
            </div>
            <div>
                If we now define the small step to square to $0$, we can simplify and solve for $y$.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                y = (2 a u_x + b) x + (a u_x^2 - c)
                \\end{aligned}
                \\label{eq:parabola-tangent-line-intrinsic}
                \\end{equation}
                `}
            </div>
            <div>
                What does this result mean?
            </div>
            <div>
                Let's start examining by taking the parabola with parameters $a=1, b=0, c=0$. This would be the parabola $f(x) = y = x^2$.
                For it, we would expect the tangent line at $x = 0$ to be the straight horizontal line $y = 0$.
            </div>
            <div>
                For equation {`\\eqref{eq:parabola-tangent-line-intrinsic}`} this means $u_x = 0$ because $u_x$ is the x coordinate of the point where we wanted to have the tangent line.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                y = 0
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                This is indeed what we expected, so equation {`\\eqref{eq:parabola-tangent-line-intrinsic}`} and thus the
                object $t$ from {`\\eqref{eq:parabola-tangent-line}`} passes this sanity check.
            </div>
            <div>
                Another check we can make is that the tangent line somehow encodes the derivative. Usually we say that the
                derivative is the slope of a function at a point on it. In our case our tangent line not only contains
                the slope, but also the vertical offset.
            </div>
            <div>
                If we only look at the slope of {`\\eqref{eq:parabola-tangent-line-intrinsic}`}, that is, the part proportional to $x$, we have
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                2 a u_x + b
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                This is indeed the derivative of the parabola $y' = 2ax + b$ evaluated at $x = u_x$.
            </div>
            <div>
                We conclude the example with a way to find the tangent space of a curve in 2 dimensions. As a recap, here is what we did:
                <ol>
                    <li>Choose basis vectors and an $up(x, y)$ function to map 2D points to vectors</li>
                    <li>Choose an equation for a curve $y = f(x)$</li>
                    <li>Choose a point on the curve $(x, f(x))$ and another point close the first $(x + \delta_x, f(x + \delta_x))$ where $\delta_x^2 = 0$</li>
                    <li>Join the two points and also the basis vectors that do not belong to lines (just the one for $x^2$ in our parabola example)</li>
                    <li>The resulting object represents our tangent line including position offset, its slope is the derivative of the object</li>
                </ol>
            </div>
            <h4>Tangent spaces for objects in general</h4>
            <div>
                There are two ways we need to generalize here:
            </div>
            <div>
                First we need to generalize from 2 dimensional space to O dimensional objects (curves are 1D, surfaces are 2D, regardless of the space they lie in).
                Instead of just just one close point we now have $O - 1$ close points offset by $\delta_x, \delta_y, ...$.
            </div>
            <div>
                Second, We can have $O$ dimensional objects in spaces of dimension $N$ where $N &gt; O$, so there are $N - O$ "extra" dimensions.
                This means for each extra dimension we need functions $f_i$ that map from the object's parameters to the values in the extra dimensions.
                In the parabola example, the parabola is a 1D object in 2D space, so we had $N = 2, O = 1$ and we got $2 - 1 = 1$ function for describing
                the $y$ coordinate of the parabola which depends on $x$. For curves in 3D space however we would get $3 - 1 = 2$ functions for the $y$ and $z$ coordinate depending on $x$.
            </div>
            <div>
                Third, to build a pseudovector for representing our object, we need to join all the basis vectors not belonging
                to lines. If $M$ represents the dimensionality of our GA then pseudovectors are $M - 1$ dimensional.
                We wedged $O$ points (the point for the tangent and $O - 1$ directions), so to get $M - 1$ we need to wedge with $M - O - 1$
                additional basis vectors. These are all the basis vectors that aren't contained in lines that make up the tangent object.
                This includes not only those terms with $x^2$ etc., but also those that aren't parameters to the $f_i$ functions.
            </div>
            <div>
                Another important point is that we need to make sure the basis vectors for representing tangent objects are
                present in the up function in the first place. If we do not have those, we can not represent the tangent objects at all with our GA.
            </div>
            <h4>Algorithm for finding tangent objects</h4>
            <div>
                Below I summarize the algorithm for finding tangent objects which we just derived.
                <ol>
                    <li>
                        Start with an M-dimensional GA and an up function $up(x_1, ..., x_n)$ that can represent our O-dimensional objects embedded in N-dimensional space,
                        including the tangent objects. In our parabola example, $M = 4$ (the GA has 4 basis vectors), $O = 1$ (a 1D curve) and $N = 2$ (the curve lies in a 2D space).
                    </li>
                    <li>We have an object defined by $N - O$ intrinsic equations $f_i(x_1, ..., x_O)$ (one for each extra "physical" dimension higher than the object itself) for which we want to find the tangent object at arbitrary points on it</li>
                    <li>Choose a point {`$u = (u_1, ..., u_O, f_1(u_1, ..., u_O), ..., f_{1+N-O}(u_1, ..., u_{O}))$`} where we want to find the tangent object that lies on the object.</li>
                    <li>
                        Choose $O - 1$ points that are close to the chosen point $u$. Do this by introducing $\delta_x, \delta_y, ...$ that square to zero and adding them to the
                        independent cooordinates of the first point (eg. for a 2D surface in 3D space $v = (u_x + \delta_x, u_y, f(u_x + \delta_x, u_y))$, $w = (u_x, u_y + \delta_y, f(u_x, u_y + \delta_y))$).
                    </li>
                    <li>Wedge together all the points, and also all the basis vectors that do not correspond to basis vectors for the lines of the object (those that aren't $1, x, y, ...$ and aren't arguments to $f_i$, there are $M - O$ of them).</li>
                    <li>
                        The resulting pseudovector (because we wedged $O - 1 + (M - O) = M - 1$ vectors) represents the tangent object including position offset.
                        Its slopes (terms proportional to $x, y, ...$ which are independent in $f$) are the derivatives in each direction on the object.
                    </li>
                </ol>
            </div>
            <h4>Further improvements and ideas</h4>
            <h5>Small step as a basis vector</h5>
            <div>
                For doing the small step sizes we used variable $\delta$ that square to zero.
                As a short note, we are already using GA, so we can just introduce new basis vectors for these which
                square to zero. This makes it very easy to do all of this if you already have access to a GA framework
                that can deal with basis vectors squaring to zero.
            </div>
            <h5>Higher order "tangent" spaces</h5>
            <div>
                If you have read my <a href="https://discourse.bivector.net/t/automatic-differentiation/289">article on automatic differentiation</a> you
                might remember that we can do higher order automatic differentiation by making the small steps equal to zero when raised to a certain power
                instead of two (squaring).
            </div>
            <div>
                We could do the same here to represent not only the first order derivatives (tangents) but also second order and higher ones.
                For a curve, this would give us a parabola at every point that represents not only represents first order change, but also the second order one-dimensional curvature.
                For a surface, we would get a paraboloid at every point which also encodes curvature.
            </div>
            <h4>Conclusion</h4>
            <div>
                We started our quest with objects represented in a GA and wanting to find tangent objects on them, which are also represented in our GA.
                We derived a method for achieving this by looking at a parabola example. Then we generalized the method so it works in any dimension and on
                shapes of any number of parameters. Finally we looked some more ideas for improving or expanding on this.
            </div>
            <h4>Bonus: Paraboloid surface in 3D and its tangent plane</h4>
            <div>
                I tried doing what I did for the parabola above, but for 3D space and a paraboloid in it ($f(x, y) = x^2 + y^2$).
                Its tangent space will be a plane. However, Coffeeshop isn't great at rendering these yet. Here it is anyway.
                Rotate the camera to see the teal paraboloid, the pink one is the tangent surface,
                red are points making up the paraboloid and the green points are the three close points making up the tangent plane.
            </div>
            <CoffeeShop id="sFauvBfVh" title="Paraboloid in 3D and its tangent plane" />
        </div>
    )
}