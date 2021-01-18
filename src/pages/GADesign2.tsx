import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function CoffeeShop(props: { id: string, title?: string }) {
    const { id, title } = props

    const url = `https://enkimute.github.io/ganja.js/examples/coffeeshop.html#${id}`

    return (
        <div>
            <iframe src={`${url}&amp;fullscreen`} title={title} width="100%" height="600px" frameBorder={0}>
            </iframe>
            <sub><a href={url}>Link to CoffeeShop with code</a></sub>
        </div>
    )
}

export function GADesign2() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Designing Geometric Algebras - Part 2</h3>
            <div>
                In the first part of this series we learnt how to create geometric algebras that
                can represent arbitrary objects. In this second part we will learn about how to
                create the rotors we want to perform translation, rotation and so on.
            </div>
            <h4>Rotor Recap</h4>
            <div>
                With each pair of basis vectors we can form a bivector. The bivector can be exponentiated which results
                in a rotor that, when an object is sandwiched with it, will perform one of three operations depending
                on what the bivector $B$ squares to:

                <table style={{ width: "100%", padding: "2%" }}>
                    <tr>
                        <th style={{ textAlign: "left" }}>$B^2$</th>
                        <th style={{ textAlign: "left" }}>{`$e^{t B}$`}</th>
                        <th style={{ textAlign: "left" }}>Sandwich action on vector</th>
                    </tr>
                    <tr>
                        <td>-1</td>
                        <td>$cos(t) + B sin(t)$</td>
                        <td>Rotates between B's two vectors</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>$1 + t B$</td>
                        <td>Translates orthogonal to B's two vectors</td>
                    </tr>
                    <tr>
                        <td>+1</td>
                        <td>$cosh(t) + B sinh(t)$</td>
                        <td><a href="https://en.wikipedia.org/wiki/Lorentz_transformation#Physical_formulation_of_Lorentz_boosts">Boosts</a> between B's two vectors</td>
                    </tr>
                </table>

                Let's take a look at ordinary 3-space GA. We have three basis vectors $e_x, e_y, e_z$ that each square to +1.
                We have three bivectors {`$e_{xy}, e_{yz}, e_{xz}$`} that each square to -1. Thus the bivectors perform a rotation
                in their planes, meaning, between the components of the two basis vectors they are composed of when applied with the
                sandwich product to a vector.
            </div>
            <h4>Rotors for different up functions</h4>
            <div>
                With a more complicated up function this is no different. The bivectors will still eg. rotate between two components of two
                basis vectors. The result looks more interesting though. If we have a basis vector for the $x^2$ term and another basis vector
                for a constant term, we can rotate between a parabola and a straight line! This is demonstrated below with an algebra that has 3 basis
                vectors and corresponding terms in the up function $x^2, y, 1$.

                <div style={{ padding: "2%" }}>
                    <CoffeeShop id="_NodUfCGt" title="Parabola and line rotor example" />
                </div>

                Here's another example where we rotate an elliptic curve into vertical lines (the algebra can represent vertical line tuples).

                <div style={{ padding: "2%" }}>
                    <CoffeeShop id="siFF2jGCi" title="Elliptic curve rotor example" />
                </div>
            </div>
            <h4>Basis vectors as mirrors</h4>
            <div>
                If you've seen <a href="https://www.youtube.com/watch?v=ichOiuBoBoQ">Steven De Keninck's presentation on dual quaternions</a> you 
                have seen how the rotors arise naturally from viewing the action of the basis vectors as mirrors in the dual view. 
                For example using ordinary 3-space again, each basis vector when applied with the sandwich product will 
                reflect the components along its axis.
            </div>
            <div>
                As you might have hoped or expected, nothing changes. If we reflect in a basis vector that has an $x^2$ coefficient in the up function, 
                sandwiching with that basis vector will reflect in a parabola instead of a line. This is hard to visualize, 
                especially for understanding how the rotors arise from these mirrors but it does all work out the same.
            </div>
            <h4>Rotor exploration</h4>
            <b style={{color: "red"}}>
                Here are some things I tried. I might remove this section later or move it to a new page later once I figure out a good pattern 
                for constructing our desired rotors.
            </b>
            <h5>PGA-like rotors for rotation and translation</h5>
            <div>
                Depending on what our basis vectors square to we will get different squares for the bivectors. This makes it tricky 
                to get all the transformations we want. For example we can't easily get both rotation between $e_1, e_2$ and translation 
                orthogonal to it.
            </div>
            <div>
                However we can introduce a new basis vector $e_3$ that squares to zero and add it to our up function with a constant coefficient. 
                Assuming our two basis vectors $e_1, e_2$ we started with both square to one, we get rotors for rotation between $e_1, e_2$ as 
                well as translations in either direction if we sandwich with the exponential of the dual of a vector. That is, 
                the exponential of a point, for example exponential of the dual of e_x is {`$e^{\\frac{d}{2} e_1^*} $`} will give a translator (a rotor 
                doing translation) in the 1-direction by d when applied with the sandwich product.
            </div>
            <h5>Shear rotors</h5>
            <div>
                So far this was all relatively specific to the up function used by PGA where the extra basis vector has a constant 
                coefficient. How does the action of such a rotor look like if the coefficient is not a constant?
            </div>
            <div>
                Let's look at the simple case with two basis vectors and up function $up(x, y) = x e_1 + y e_2$ and $e_1^2 = 1$ but $e_2^2 = 0$.
                We have the bivector {`$e_{12}$`} which squares to zero. When we exponentiate it and apply it with the sandwich product to a vector 
                we get

                {`\\begin{aligned}
                & (1 + \\frac{d}{2} e_{12}) (x e_1 + y e_2) (1 - \\frac{d}{2} e_{12}) \\\\
                = & (1 + \\frac{d}{2} e_{12}) (x e_1 + y e_2 - \\frac{d}{2} x e_2) \\\\
                = & x e_1 + y e_2 - d x e_2 \\\\
                = & x e_1 + (y - d x) e_2
                \\end{aligned}`}

                It does some sort of translation in the $e_2$ direction proportional to the $e_1$ value. 
                For $x = 0$ the $e_2$ direction is unaffected. The bigger the $e_1$ component gets the more 
                the $e_2$ direction gets translated. This is a shear in the $e_2$ direction, the vector which 
                squares to zero.
            </div>
            <h5>"Opposite-PGA" exploration</h5>
            <div>
                <div>
                    Let's try the previous PGA rotor example but instead make $e_1^2 = e_2^2 = 0$ and $e_3^2 = 1$.
                </div>
                <br />
                <div>
                    Applying {`$e_{13}$`} to a vector (line)

                    {`\\begin{aligned}
                    & (1 + \\frac{d}{2} e_{13}) (x e_1 + y e_2 + 1 e_3) (1 - \\frac{d}{2} e_{13}) \\\\
                    = & (1 + \\frac{d}{2} e_{12}) (x e_1 + y e_2 + 1 e_3 + \\frac{d}{2} e_1 + \\frac{d}{2} y e_{123}) \\\\
                    = & x e_1 + y e_2 + 1 e_3 + d e_1 + d y e_{123} \\\\
                    = & (x + d) e_1 + y e_2 + 1 e_3 + d y e_{123}
                    \\end{aligned}`}

                    This does translation in the $e_1$ direction and also some kind of shear in {`$e_{123}$`} proportional to the $e_2$ component.
                    $e_23$ does the same thing but with $e_1$ and $e_2$ swapped.
                </div>
                <br />
                <div>
                    Applying {`$e_{12}$`} to a vector (line):
                    
                    {`\\begin{aligned}
                    & (1 + \\frac{d}{2} e_{12}) (x e_1 + y e_2 + 1 e_3) (1 - \\frac{d}{2} e_{12}) \\\\
                    = & (1 + \\frac{d}{2} e_{12}) (x e_1 + y e_2 + 1 e_3 - \\frac{d}{2} e_{123}) \\\\
                    = & x e_1 + y e_2 + 1 e_3 - d e_{123}
                    \\end{aligned}`}

                    This does translation in {`$e_{123}$`}.
                </div>
                <br />
                <div>
                    Applying {`$e_{12}$`} to a bivector (point):

                    {`\\begin{aligned}
                    & (1 + \\frac{d}{2} e_{12}) (x e_{31} + y e_{23} + 1 e_{12}) (1 - \\frac{d}{2} e_{12}) \\\\
                    = & (1 + \\frac{d}{2} e_{12}) (x e_{31} + y e_{23} + 1 e_{12}) \\\\
                    = & x e_{31} + y e_{23} + 1 e_{12}
                    \\end{aligned}`}

                    This is the identity map.
                </div>
                <br />
                <div>
                    Applying {`$e_{13}$`} to a bivector (point):

                    {`\\begin{aligned}
                    & (1 + \\frac{d}{2} e_{13}) (x e_{31} + y e_{23} + 1 e_{12}) (1 - \\frac{d}{2} e_{13}) \\\\
                    = & (1 + \\frac{d}{2} e_{12}) (x e_{31} + y e_{23} + 1 e_{12} + \\frac{d}{2} y e_{12}) \\\\
                    = & x e_{31} + y e_{23} + 1 e_{12} + d y e_{12} \\\\
                    = & x e_{31} + y e_{23} + (1 + d y) e_{12}
                    \\end{aligned}`}

                    This is a shear in the {`$e_{12}$`} direction proportional to the {`$e_{23}$`} component. 
                    The last bivector {`$e_{23}$`} will do the same thing in the but proportional to the {`$e_{13}$`} component.
                    Since this is a projective point (which follows from inverting the up function, not conjecture!) 
                    it's a division of both x and y by $1 + x$ or $1 + y$. Also composing the two rotors will give us the following:

                    {`\\begin{aligned}
                    & R = (1 + \\frac{d_x}{2} e_{23})(1 + \\frac{d_y}{2} e_{13}) = 1 + \\frac{d_x}{2} e_{23} + \\frac{d_y}{2} e_{13} + \\frac{d_x d_y}{4} e_{12}\\\\
                    & R p \\widetilde{R} = \\frac{x}{1 + d_x x + d_y y} e_{31} + \\frac{y}{1 + d_x x + d_y y} e_{23} + 1 e_{12}
                    \\end{aligned}`}

                    Interestingly the composed rotor picks up the {`$e_{12}$`} part for which we already showed that it is the identity map.
                    In different notation, the composed map is

                    {`\\begin{aligned}
                    (x, y) \\rightarrow (\\frac{x}{1 + d_x x + d_y y}, \\frac{y}{1 + d_x x + d_y y})
                    \\end{aligned}`}

                    Perhaps it is possible to construct scaling rotors for each direction this way if we could 
                    change the $x$ and $y$ in the denominator by adjusting our up function and basis vectors.
                </div>
            </div>
            <h5>Non-uniform scaling rotor</h5>
            <div>
                We want rotors that only scale in one direction, instead of scaling all directions equally. 
                Start with PGA, but for up instead use the logarithm on the coordinates

                {`\\begin{aligned}
                up(x, y) = log(x) e_1^* + log(y) e_2^* + 1 e_0^*
                \\end{aligned}`}

                If we try to find the inverse mapping (ie. get the $(x, y)$ coordinates a bivector represents) we have 

                {`\\begin{aligned}
                x = exp(\\frac{\\langle p \\rangle_{1^*}}{\\langle p \\rangle_{0^*}}), y = exp(\\frac{\\langle p \\rangle_{2^*}}{\\langle p \\rangle_{0^*}})
                \\end{aligned}`}

                If we now apply a translator $T_x(log(s_x))$ that translates by $log(s_x)$ in the $e_x^*$ direction (just like in the usual PGA), we get 

                {`\\begin{aligned}
                & T_x(log(s_x)) up(x, y) \\widetilde{T_x}(log(s_x)) \\\\
                = & (log(x) + log(s_x)) e_x^* + log(y) e_y^* + 1 e_0^* \\\\
                = & log(x s_x) e_x^* + log(y) e_y^* + 1 e_0^*
                \\end{aligned}`}

                Recovering the $(x', y')$ coordinates this result represents using the inverse up mapping we get 

                {`\\begin{aligned}
                x' & = exp(\\frac{log(x s_x)}{1}) = x s_x \\\\
                y' & = exp(\\frac{log(y)}{1}) = y
                \\end{aligned}`}

                And we have non-uniform scaling, yay! Of course the same will work for scaling $y$ too. 
                There is still a big issue though: $x$ and $y$ have to be greater than zero since the logarithm 
                is not defined otherwise.
            </div>
            <h4><Link to="/ga-design-3">Next: Design of Geometric Algebras - Part 3</Link></h4>
        </div >
    )
}