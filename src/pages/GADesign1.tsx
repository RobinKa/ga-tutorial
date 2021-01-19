import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export function GADesign1() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Designing Geometric Algebras - Part 1</h3>
            <div>
                Typically we choose a Geometric Algebra that will work well with our problem.
                First there are the object types the different GAs can represent.
                If we want flat objects such as lines and planes going through the origin ordinary GA works.
                If we additionally want the objects to be at arbitrary positions PGA is a good choice.
                For spheres we can choose CGA which can directly represent them.
                Secondly we might need certain operations which also dictates our choice of GA.
                Ordinary GA has rotors that can do rotations only.
                With both PGA and CGA we get rotors which can do translation and rotation.

                Below is a table of a few already explored GAs and their properties.

                <table style={{ width: "100%", padding: "2%" }}>
                    <tr>
                        <th style={{ textAlign: "left" }}>Name</th>
                        <th style={{ textAlign: "left" }}>Signature</th>
                        <th style={{ textAlign: "left" }}>Objects</th>
                        <th style={{ textAlign: "left" }}>Rotors</th>
                    </tr>
                    <tr>
                        <td>Ordinary GA</td>
                        <td>N, 0, 0</td>
                        <td>Flat (through origin)</td>
                        <td>Rotation</td>
                    </tr>
                    <tr>
                        <td>Projective Geometric Algebra</td>
                        <td>N, 0, 1</td>
                        <td>Flat</td>
                        <td>Rotation, Translation</td>
                    </tr>
                    <tr>
                        <td>Conformal Geometric Algebra</td>
                        <td>N+1, 1, 0</td>
                        <td>Flat, Round</td>
                        <td>Rotation, Translation</td>
                    </tr>
                    <tr>
                        <td><a href="https://link.springer.com/article/10.1007/s00006-018-0879-2">Conic Geometric Algebra</a></td>
                        <td>5, 3, 0</td>
                        <td>Conics (2D)</td>
                        <td>Rotation, Translation, Uniform scaling</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.researchgate.net/publication/324067465_Quadric_Conformal_Geometric_Algebra_of_mathbb_R96R96">Quadric Geometric Algebra</a></td>
                        <td>9, 6, 0</td>
                        <td>Quadrics (3D)</td>
                        <td>Rotation, Translation, Uniform scaling</td>
                    </tr>
                </table>

                So if what we need is contained in one of these we can simply use them and
                benefit from the previous exploration done within them.
                What if we need something that is not contained in one of these pre-made
                GAs though? Is there a way to create exactly what we need?
                
                In the first part of this article we will try to figure out how to create a
                GA that contains the objects we want. Specifically we will try to create a
                GA containing arbitrary polynomial shapes such as parabolas and <a href="https://en.wikipedia.org/wiki/Elliptic_curve">elliptic curves</a>.
                In the second part we will also look at the rotors.
            </div>

            <h4>How are objects represented outside of GA?</h4>
            <div>
                <div>
                    Before jumping into GA we should take a step back and remember how we represented 
                    objects in algebra before.
                </div>
                <div>
                    Usually we represent a 2D line by the linear equation $y = a x + b$, a circle at the origin
                    by $x^2 + y^2 = r^2$ and so on. Rearranging this a bit to bring everything to the same
                    side we get equivalently $ax + b - y = 0$ and $x^2 + y^2 - r^2 = 0$. The object is then
                    represented by all the points $(x, y)$ for which these equations are true, that is, for which
                    the left hand side evaluates to zero. We call this the null space or kernel of the function.
                </div>
            </div>

            <h4>Object representation in GA</h4>
            <div>
                <div>
                    Now jumping to GA, in 2D PGA a point is represented by a bivector {`$x e_{0y} + y e_{x0} + 1 e_{xy}$`} and 
                    a line is represented by a vector {`$x e_x + y e_y - d e_0$`}. Let's call the mapping for points
                    the $up$  function:
                    {`\\begin{equation}
                    up: \\mathbb{R}^N \\mapsto \\mathbb{Cl}(...)
                    \\end{equation}`}

                    Here's a table of the previously mentioned algebras and their up functions. Note that some of these use a dual representation 
                    for points (points as pseudovectors) and some use the usual representation (points as vectors).

                    <table style={{ width: "100%", padding: "2%" }}>
                        <tr>
                            <th style={{ textAlign: "left" }}>Name</th>
                            <th style={{ textAlign: "left" }}>Up</th>
                        </tr>
                        <tr>
                            <td>Ordinary GA</td>
                            <td>$x e_x + y e_y + z e_z + ...$</td>
                        </tr>
                        <tr>
                            <td>Projective Geometric Algebra</td>
                            <td>$x e_x^* + y e_y^* + ... + 1 e_0^*$</td>
                        </tr>
                        <tr>
                            <td>Conformal Geometric Algebra</td>
                            <td>$1 e_o + x e_x + y e_y + ... + \frac{1}{2} (x^2 + y^2 + ...) e_\infty$</td>
                        </tr>
                        <tr>
                            <td>Conic Geometric Algebra</td>
                            <td>{`$e_{o+} + x e_x + y e_y + \\frac{1}{2} (x^2 + y^2) e_{\\infty +} + \\frac{1}{2} (x^2 - y^2) e_{\\infty +} + x y e_{\\infty \\times}$`}</td>
                        </tr>
                        <tr>
                            <td>Quadric Geometric Algebra</td>
                            <td>{`$x e_x + ... + \\frac{1}{2} (x^2 e_{\\infty 1} + ...) + x y e_{\\infty 4} + ... + 1 e_{o 1} + ... $`}</td>
                        </tr>
                    </table>

                    How do we connect these representations to the usual null-space representation?
                    There are two almost equivalent ways of doing this.
                </div>
                <h5>Inner Product Null Space Representation</h5>
                <div>
                    The first one is the Inner Product Null Space (IPNS) representation. Here we say that the inner product
                    of our object, let's call it $o$, is zero for an arbitrary point produced by our up function.

                    {`\\begin{equation}
                    up(...) \\cdot o = 0
                    \\end{equation}`}
                    
                    The IPNS representation has the downside that we need to define a metric so the inner product works.
                    This means that the representation depends on what our basis vectors square to. This also doesn't work
                    for degenerate metrics such as the one used by PGA.
                </div>
                <h5>Outer Product Null Space Representation</h5>
                <div>
                    The second representation is the Outer Product Null Space (OPNS) representation. Instead of the inner product 
                    we use the outer product which means we don't need to define a metric either and this will work the same regardless 
                    of what our basis vectors square to. We wedge our object $o$ with an arbitrary point produced by our up function.

                    {`\\begin{equation}
                    up(...) \\wedge o = 0
                    \\end{equation}`}

                    The intuition here is that if points are represented by vectors then $\wedge$ represents the join operation. If 
                    we try to join a point that already lies on the object we get zero. Note that if we're using a dual representation 
                    (points as pseudovectors) then we need to use $\vee$ instead as that is then the join operation (maybe a better name 
                    would then be the Vee Product Null Space (VPNS)?). 
                </div>
                <div>
                    We will continue using OPNS from now on and apply it to recover more familiar equations for the objects.
                </div>
                <h5>Example: OPNS applied to PGA 2D</h5>
                <div>
                    Let's apply the OPNS equation to see what a vector in 2D PGA represents. For the arbitrary $X$ 
                    we need to use a pseudovector. The $up(x, y)$ function gives us a pseudovector (bivector in this case) 
                    so let's use it in place of $X$ and remember that we need to use $\vee$ for dual representations.

                    {`\\begin{aligned}
                    up(x, y) \\vee vector & = (x e_{0y} + y e_{x0} + 1 e_{xy}) \\vee (a e_x + b e_y + d e_0) \\\\
                    & = a x + b y + d  \\\\
                    & = a x + b y + d = 0
                    \\end{aligned}`}

                    We have recovered the usual equation for a line. Unlike the previous one, this one also has a coefficient for $y$ which makes 
                    it possible to represent vertical lines (by setting $b = 0$ we get $a x = -d$). Hence the vectors in 2D PGA represent lines.
                </div>
                <div>
                    What happens when we apply the OPNS to PGA points (pseudovectors, bivectors in 2D)?

                    {`\\begin{aligned}
                    up(x, y) \\vee vector & = (x e_{0y} + y e_{x0} + 1 e_{xy}) \\vee (a e_{0y} + b e_{x0} + c e_{xy}) \\\\
                    & = b x e_{xy} + c x e_{x0} + a y e_{xy} + c y e_{0y} - a e_{x0} - b e_{y0}  \\\\
                    & = e_{x0} (c x - a) + e_{0y} (c y - b) + e_{xy} (b x + a y)
                    \\end{aligned}`}

                    We get three equations that have to vanish, only two of which are independent.

                    {`\\begin{aligned}
                    & c x - a = 0 & \\implies x = \\frac{a}{c} \\\\
                    & c y - b = 0 & \\implies y = \\frac{b}{c} \\\\
                    & b x + a y = b \\frac{a}{c} + a y = 0 & \\implies y = \\frac{b}{c}
                    \\end{aligned}`}

                    The coordinates we extract get divided by the {`$e_{xy}$`} part of the point. We automatically get homogeneous space and
                    projective points just by defining the up function the way we did with the constant coefficient term {`$1 e_{xy}$`}.
                </div>
                <div>
                    As a final note, applying OPNS is like finding an inverse for the up function. For points it indeed gives 
                    the inverse mapping (ie. as if we just inverted the function directly) but the OPNS also generalizes it to 
                    apply to elements other than points in a consistent manner.
                </div>
            </div>

            <h4>Representing polynomials in GA</h4>
            <div>
                Looking at how we arrived at the equation for a line from the OPNS equation we can see that the 
                coefficients $a, b, d$ came from the object whose representation we're trying to understand, but the 
                variables $x$, $y$ and $1$ (for $d$) came from how we defined the $up$ function.
                This means that if we wanted to represent different shapes we need to change the $up$ function.
            </div>
            <div>
                As an example, if we wanted to represent parabolas, we would need to have a basis vector that has $x^2$ as a 
                coefficient in $up$. For example {`$up(x, y) = x^2 e_{0y} + y e_{x0} + 1 e_{xy}$`} 
                would give us $a x^2 + b y + d = 0$ after applying the OPNS equation.
            </div>
            <div>
                Another interesting observation here is that we have a constant term in the polynomial 
                which comes from the fact that we add a constant bivector {`$1 e_{xy}$`} 
                in the up function. This allows PGA to represent translated objects unlike ordinary GA which 
                can only represent objects through the origin.
            </div>
            <div>
                Furthermore the number of basis vectors is arbitrary. For each term we want we can simply add another basis vector 
                with our desired coefficient.
                Finally as already mentioned before, the OPNS does not depend on the metric so the interpretation works 
                regardless of what the basis vectors square to.
            </div>

            <h5>Example: Elliptic curves in GA</h5>
            <div>
                Looking at the <a href="https://en.wikipedia.org/wiki/Elliptic_curve">Wikipedia article for elliptic curves</a> 
                we can find that the equation for an elliptic curve is $y^2 = x^3 + a x + b 1$. So to represent them we need 
                4 terms in our up function with coefficients $y^2, x^3, x, 1$. As a result we will need 4 basis vectors (with any signature). 

                {`\\begin{aligned}
                up(x, y) & = x^3 e_1^* + y^2 e_2^* + x e_3^* + 1 e_4^* \\\\
                & = x^3 e_{234} + y^2 e_{134} + x e_{124} + 1 e_{123}
                \\end{aligned}`}

                Vectors will now be able to represent elliptic curves as well as other simpler curves (parabolas, cubics, lines, ...).
                You can verify this by hand (or ideally using symbolic math software) by applying the OPNS equation to a vector as 
                before in the 2D PGA example.
            </div>

            <h4>Join and meet</h4>
            <div>
                <div>
                    If points are represented by vectors the join is $\wedge$ and meet is $\vee$.
                    In algebras that uses a dual representation for points such as PGA this is swapped and join is $\vee$ 
                    and meet is $\wedge$.
                </div>
                <div>
                    Something interesting happens when we look at the meet operation which returns the intersection object of two objects.
                    In PGA when we intersected two straight lines we get a single point (or point at infinity if the lines are parallel).
                    However with more complicated curves such as parabolas or elliptic curves we will get more than one intersection point.
                    For example intersecting a parabola with a line (assuming they intersect) will result in two points.
                    However the representation for such a point pair is identical to the representation of a single point in PGA.
                    The difference will only be visible once we apply the OPNS equation to find out what our object is actually representing.
                </div>
                <h5>Example: parabola at origin intersects horizontal line</h5>
                <div>
                    Let's apply what we have just learnt and look at some actual results to see if they make sense.
                    We want to intersect a parabola at the origin of the form $y = a x^2$ with a horizontal line of the form 
                    $y = c 1$. We would expect the intersection to contain 2 points (assuming they intersect).
                </div>
                <div>
                    From the two equations we see that we need the terms $x^2$, $y$ and $1$ and thus we require 3 basis vectors. We'll use a dual 
                    representation (points as pseudovectors) and define our up function as follows

                    {`\\begin{aligned}
                    up(x, y) & = x^2 e_1^* + y e_2^* + 1 e_3^* \\\\
                    & = x^2 e_{23} + y e_{31} + 1 e_{12}
                    \\end{aligned}`}

                    Now curves should be represented by vectors. For our parabola $p$ we need the $x^2$ and $y$ basis vectors, that is $e_1$ and $e_2$ respectively.
                    For our line $l$ we will need the $y$ and $1$ basis vectors, that is $e_2$ and $e_3$ respectively.

                    {`\\begin{aligned}
                    p & = a e_1 - e_2 \\\\
                    l & = -e_2 + b e_3
                    \\end{aligned}`}

                    Let's look at the OPNS (using $\vee$) for $p$ to confirm it indeed represents the desired parabola.

                    {`\\begin{aligned}
                    up(x, y) \\vee p & = (x^2 e_1^* + y e_2^* + 1 e_3^*) \\vee (a e_1 - e_2) \\\\
                    & = a x^2 - y = 0 \\\\
                    \\end{aligned}`}

                    {`\\begin{aligned}
                    up(x, y) \\vee l & = (x^2 e_1^* + y e_2^* + 1 e_3^*) \\vee (-e_2 + b e_3) \\\\
                    & = b - y = 0 \\\\
                    \\end{aligned}`}

                    Looks like we're good! Now we can intersect the two objects using $\wedge$ as that is the meet operation in the dual representation.
                    We will call the intersection object $i$.
                    
                    {`\\begin{aligned}
                    i = p \\wedge l = -a e_{12} + a b e_{13} - b e_{23}
                    \\end{aligned}`}

                    Now let's look at the OPNS of the intersection object to see if it gives us what we expect (two points of intersection).

                    {`\\begin{aligned}
                    up(x, y) \\vee i & = (x^2 e_1^* + y e_2^* + 1 e_3^*) \\vee (-a e_{12} + a b e_{13} - b e_{23}) \\\\
                    & = a (-b + y) e_1 + (-a x^2 + b) e_2 + b (a x^2 - y) e_3 = 0
                    \\end{aligned}`}

                    Now we have three vectors that need to each be equal to zero.

                    {`\\begin{aligned}
                    a (-b + y) = 0 & \\implies y = b \\\\
                    (-a x^2 + b) = 0 & \\implies x^2 = \\frac{b}{a} \\\\
                    b (a x^2 - y) = 0 & \\implies x^2 = \\frac{y}{a} \\\\
                    \\end{aligned}`}

                    The three equations aren't independent (combining the first and third one gives the second one). So now we see that 
                    the intersection object represents {`$x^2 = \\frac{b}{a}$`} and $y = b$. This has two solutions {`$x_{1,2} = \\pm \\sqrt{\\frac{b}{a}}$`} as expected 
                    and the solutions are the correct ones too (eg. $y$ is just the vertical offset $b$ of the line).
                </div>
                <div>
                    Great, we have shown that what we learnt makes sense and can be applied without much thought required. We could even plot the solutions 
                    using a library that can plot the null space of the algebraic equations implicitly.
                </div>
                <h5>Example: Intersecting Elliptic Curves</h5>
                <div>
                    To be continued.
                </div>
            </div>
            <h4>Conclusion</h4>
            <div>
                We have learnt how to represent arbitrary polynomials using GA and that intersection and joining them works and makes sense. 
                There are some other things that we could explore. For example nothing stops us from using more complicated up functions than 
                polynomials and there is no reason they should not make sense anymore.
            </div>
            <div>
                The major thing we are still missing are operations on objects such as rotation and translation for which we want rotors. 
                For these the metric and whether we use a dual representation or not will actually matter. That will be the topic of the next section.
            </div>
            <h4><Link to="/ga-design-2">Next: Design of Geometric Algebras - Part 2</Link></h4>
        </div>
    )
}