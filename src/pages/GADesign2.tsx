import React from "react"
import { Link } from "react-router-dom"
import { useMathJax } from "../util"
import { CoffeeShop } from "./CoffeeShop"

export function GADesign2() {
    useMathJax()

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
                    <CoffeeShop id="j6gKZCgwS" title="Parabola and line rotor example" />
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
                Here are some things I tried. I might remove this section later or move it to a new page once I figure out a good pattern 
                for constructing our desired rotors. Beware of mistakes.
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
                well as translations in either direction if we sandwich with the exponential of the dual of a vector.
                For example {`$e^{\\frac{d}{2} e_1^*} = 1 + \\frac{d}{2} e_1^*$`} is a translator (a rotor 
                doing translation) in the 1-direction by $d$ when applied with the sandwich product.
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
                    (x, y) \\to (\\frac{x}{1 + d_x x + d_y y}, \\frac{y}{1 + d_x x + d_y y})
                    \\end{aligned}`}

                    Perhaps it is possible to construct scaling rotors for each direction this way if we could 
                    change the $x$ and $y$ in the denominator by adjusting our up function and basis vectors.
                </div>
            </div>
            <h5>Non-isotropic scaling rotor</h5>
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

                And we have non-isotropic scaling, yay! Of course the same will work for scaling $y$ too. 
                There is still a big issue though: $x$ and $y$ have to be greater than zero since the logarithm 
                is not defined otherwise (or we could just use the complex logarithm? although maybe there's a nicer GA way 
                of avoiding arbitrary complex numbers here).

                <CoffeeShop id="dg4qW2Vqs" title="Non-isotropic scaling with rotors" />
            </div>
            <h5>Translators in any variable for polynomial up functions</h5>
            <b style={{color: "red"}}>This part is flawed / wrong, but I left it up since it still contains some useful ideas.</b>
            <div>
                Assume we have an up function $up(x, ...) = x e_1^* + x^2 e_2^* + 1 e_0^* + ...$ which can represent parabolas, lines, points and so on.
                If we want to have translation as rotors (translators), it's not that easy. In PGA we only have one basis vector with an $x$ coefficient 
                so we can do the translation using a single rotor {`$e^{\\frac{d}{2} e_{x0}}$`}, but if we did with the above up function we would change 
                the $x$ coefficient while leaving the $x^2$ coefficient untouched. If we look at the OPNS / VPNS of a point that was only translated in $e_1^*$ 

                {`\\begin{aligned}
                & (x e_1^* + x^2 e_2^* + 1 e_0^*) \\vee ((a + d) e_1^* + b e_2* + c e_0*) \\\\
                = & x b e_{12}^* + x c e_{10}^* + x^2 (a + d) e_{21}^* + x^2 c e_{20}* + (a + d) e_{01}* + b e_{02}* \\\\
                = & (x c - a - d) e_{10}^* + (x b - a - d) e_{12}^* + (x^2 c - b) e_{20}^* = 0
                \\end{aligned}`}

                we get three equations that have to vanish

                {`\\begin{aligned}
                x c - a - d & = 0 \\\\
                x b - a - d & = 0 \\\\
                x^2 c - b & = 0 \\\\
                \\end{aligned}`}

                Notice the first and second equation together give $x b = x c$. But the third equation gives $b = x^2 c$. 
                Both of these together give $x^3 c = x c$ which can only be true for $x = 0$. and our wrongly translated point does indeed not 
                represent anything useful.
            </div>
            <div>
                To get something useful again we need to translate all coefficients where $x$ appears in the up function. For instance $x^2$ should get translated as
                
                {`\\begin{equation}
                x^2 \\to (x + d)^2 = x^2 + d^2 + 2 d x
                \\end{equation}`}
                
                First we need to translate the $e_2^*$ coefficient by $d^2$ which is easy using the rotor {`$e^{\\frac{d^2}{2} e_{20}}$`}. 
                Next we need to translate the $e_2^*$ part by $2 d x$ which is a shear. 
                This is not possible with the current set of basis vectors we have available as we can only translate by constants and not in proportion to $x$ as required here.
            </div>
            <div>
                We introduce a new basis vector $e_3^2 = 0$ with coefficient $x$ in the up function. Then we get the rotors we need as {`$e^{d e_{13}}$`} (note, no division by 2 as we need twice 
                the amount). This solves the issue of translating the $x^2$ part. However this introduces a new problem. The new basis vector we introduced has coefficient $x$ so in order 
                to keep it consistent (non-empty OPNS / VPNS) we need to translate it too. 
            </div>
            <div>
                Again this is not that easy because usually we use the bivectors containing $e_0$ to do translations. We can't do that here to translate $e_3$ because it squares to zero and thus 
                the bivector {`$e_{30}$`} will result in zero when multiplied with {`$e_0^* = e_{123}$`} which is the part that usually enables us to do translation for non-zero squaring basis vectors.
            </div>
            <div>
                <b style={{color: "red"}}>The idea in this step is wrong which makes the entire thing not work out. The bivector will give a shearor not a translator, and will also affect the wrong dual basis vector.</b>
                We introduce a new basis vector $e_4^2 = 1$ with coefficient $1$ in the up function. This will allow us to do translations in $e_3^*$ with the bivector {`$e_{34}$`} 
                because it squares to zero (ie. does translation) and {`$e_{34} e_4^* = e_{34} e_{0123} = -e_{0124}$`} instead of zero.
            </div>
            <div>
                Now we can compose all the rotors we just came up with to get a single rotor that does translation in $x$ by $d$. In conclusion, we introduced two new basis vectors, one for 
                allowing us to do translation in proportional to $x$ and another to allow us to translate the new basis vector by a constant. The composed rotor is a lot more complicated too. 
                However this will work for any polynomial if we apply this idea recursively. For example for $x^3$ we want $(x + d)^3 = x^3 + d^3 + 3 d^2 x + 3 d x^2$. Here we could do the same thing:
                
                <ol>
                    <li>Translate $x^3$ part by $d^3$</li>
                    <li>Introduce new basis vector with coeff. $x$ for translation by $d x$</li>
                    <li>Introduce new basis vector for translating the new basis vector by $d$</li>
                    <li>Introduce new basis vector for translation relative to $x^2$</li>
                    <li>New basis vector needs to be translated as $(x + d)^2$ so we can apply the same idea</li>
                    <li>...</li>
                    <li>Tears, lots of new basis vectors, complicated rotors, but it works out</li>
                </ol>

                Finally here's an example of this in action, however the renderer doesn't seem to like this very much as the points don't get rendered correctly (or I made a mistake somewhere?) but you get the idea hopefully.

                <CoffeeShop id="OoWAStmiP" />

                Perhaps there's a better way. I don't know whether this works for functions other than polynomials either, it might for some, but it certainly doesn't for many because the correction terms 
                can not be done with translators, although if we had more rotors in our toolbox than just translators this might be fixable.
            </div>
            <h4><Link to="/ga-design-3">Next: Design of Geometric Algebras - Part 3</Link></h4>
        </div >
    )
}