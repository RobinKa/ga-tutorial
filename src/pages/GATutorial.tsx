import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { InteractiveCode } from "./InteractiveCode"
import * as cnt from "./content"

export function GATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Geometric Algebra Basics</h3>
            <div>
                Usually introductions to GA begin by defining various rules and going over derivations
                before doing anything useful with them. I will also define some rules but try to
                get to the interesting stuff more quickly.
            </div>

            <h4>Vectors</h4>
            <div>
                Like for the standard 2D vector algebra in GA we have two basis vectors $e_x, e_y$
                using which arbitrary vectors $v = x e_x + y e_y$ can be formed. Below is some runnable and editable
                code that forms such vectors and then displays them as points. The basis vectors
                $e_x, e_y$ are labeled <code>e0</code> and <code>e1</code> in the code. We specify the non-zero
                coefficients for each basis vector when creating a new vector.
            </div>

            <InteractiveCode sourceCode={cnt.codeRenderPoint}
                hideOutput={true} withVisualizer={true}
            />

            <h4>Geometric Product</h4>
            <div>
                The product which defines Geometric Algebra and is its most important aspect is called the
                Geometric Product. There are two useful rules for using the geometric product which will now
                be introduced.
            </div>
            <h5>Rule 1: Basis vectors square to +1</h5>
            <div>
                 Multiplying two same basis vectors together with the geometric product
                will result in $+1$ (for now...) if they are the same.

                {`\\begin{equation}
                e_x e_x = 1, e_y e_y = 1
                \\end{equation}`}

                This is similar to how the dot product in standard vector algebra works.
                Let's verify these results with the code again, this time just logging some text instead of visualizing.
            </div>
            <InteractiveCode sourceCode={cnt.codeSquareBasisVectors} />

            <h5>Rule 2: Different basis vectors anti-commute</h5>
            <div>
                What is new is that we can also multiply two different basis vectors and the result will not be zero,
                but instead can't be simplified further.

                {`\\begin{equation}
                e_x e_y = e_{xy}
                \\end{equation}`}

                {`$e_{xy}$`} here is just shorthand for the two basis vectors multiplied together.
                Such elements made up of two basis vectors are called bivectors.
            </div>
            <div>
                Importantly the order of the product matters. A rule is that when you swap the factors
                of a product of basis vectors you pick up a minus sign. We say that the basis vectors anti-commute.

                {`\\begin{equation}
                e_{xy} = e_x e_y = -e_y e_x = -e_{yx}
                \\end{equation}`}
            </div>
            <InteractiveCode sourceCode={cnt.codeExteriorProduct} />

            <h5>Practice</h5>
            <div>
                Let's now use these two basic rules we just learnt and see what some results are when we use them:

                {`\\begin{aligned}
                e_x e_y e_x & = & \\text{(rewrite as shorthand)} \\\\
                e_{xyx} & = & \\text{(Swap neighbours on the right, pick up minus sign)} \\\\
                -e_{xxy} & = & \\text{(Multiplying same basis vectors results in 1, e_xx = e_x e_x = 1)} \\\\
                -e_y &
                \\end{aligned}`}

                We can verify these results with the code:
            </div>
            
            <InteractiveCode sourceCode={cnt.codeAntiCommute} />

            <h5>Terminology</h5>
            <div>
                <div>Here's a list of some more terminology that is often used in GA</div>
                <ul>
                    <li>
                        <b>Multivector</b>: any element of the algebra (eg. {`$1 + 2 e_x + 5 e_{xy}$`})
                        </li>
                    <li>
                        <b>Basis blade</b>: basis vectors and any combination of them
                        (eg. in 2D we have four in total: {`$1, e_x, e_y, e_{xy}$`})
                    </li>
                    <li><b>Grade</b>: the degree of a multivector
                        (eg. $1$ is grade $0$, $e_x$ is grade $1$,
                        $e_x + 5 e_y$ it also grade $1$, {`$e_{xy}$`} is grade $2$)
                    </li>
                </ul>
            </div>

            <h3>Rotors</h3>

            <h4>Squaring bivectors</h4>
            <div>
                Now for something more interesting, let's see what happens if we square the bivector {`$e_{xy}$`},
                that is, multiplying it with itself:
            </div>
            <InteractiveCode sourceCode={cnt.codeSquareBivector} />

            <div>
                {`\\begin{equation}
                e_{xy}^2 = e_{xy} e_{xy} = e_{xyxy} = -e_{xyyx} = -e_{xx} = -1
                \\end{equation}`}

                We can see the square of the bivector {`$e_{xy}$`} is $-1$. This shows that such a bivector is
                very similar to the imaginary unit $i$ of complex numbers which was specifically introduced to
                square to $-1$. Here we didn't have to introduce anything new and we automatically had such
                an element in our algebra.
            </div>

            <div>We shall now look at some things we can achieve with what we already know now.</div>

            <h4>Rotating 2D vectors using rotors</h4>
            <div>
                As mentioned before {`$e_{xy}$`} can be identified as the imaginary unit $i$ of complex numbers hence
                we can represent complex numbers as {`$a + b e_{xy}$`} and a rotation by an arbitrary angle $\phi$
                can be performed just like with complex numbers using Euler's formula

                {`\\begin{equation}
                R(\\phi) = e^{\\phi e_{xy}} = cos(\\phi) + e_{xy} sin(\\phi)
                \\end{equation}`}

                The object $R$ you get after exponentiating is called a rotor
                (because it rotates when you multiply with it).

                Unlike with complex numbers now however, we can multiply a vector by a rotor directly instead of
                having to treat vectors as if they were complex numbers.
            </div>
            <InteractiveCode sourceCode={cnt.codeRotate2D}
                hideOutput={true} withVisualizer={true}
            />
            <div>
                {`\\begin{equation}
                v R(\\phi) = (x e_x + y e_y) (cos(\\phi) + e_{xy} sin(\\phi)) =
                e_x (x cos(\\phi) -y sin(\\phi)) + e_y (x sin(\\phi) + y cos(\\phi))
                \\end{equation}`}

                We can see that the imaginary unit $i$ is actually a rotation in the XY plane as the bivector {`$e_{xy}$`}
                is formed by multiplying the two basis vectors together, so in some sense $i$ represents the XY plane.
            </div>

            <h4>Higher dimensions</h4>
            <div>
                It turns out that the two dimensional rotor application formula $v' = v R$ was slightly special.
                In the general case it is necessary to use a two sided product
                
                {`
                \\begin{equation}
                v' = R v \\widetilde{R}
                \\end{equation}
                `}
                
                which is also called the sandwich product. {"$\\widetilde{R}$"} here stands for reversion which just means
                reversing the order of all basis vectors. For example {"$e_{xy}$"} becomes {"$e_{yx}$"}.
                As we already know from the second rule of the geometric product, such a change of order just produces a
                minus sign for the bivectors, so {"$\\widetilde{e_{xy}} = -e_{xy}$"}.
            </div>
            <div>    
                Another thing that changes with the sandwich product
                is that we multiply with the rotor twice, so our rotor will only need to contain half of the rotation angle.

                {`
                \\begin{equation}
                R(\\phi) = e^{e_{xy} \\frac{\\phi}{2}}
                \\end{equation}
                `}
            </div>

            <div>
                We can now verify that this will indeed give the same results in 2D as the simple one-sided product
            </div>

            <InteractiveCode sourceCode={cnt.codeGeneralRotor2D}
                hideOutput={true} withVisualizer={true}
            />

            <div>
                 In the three dimensional case, if we wanted to create
                a rotor that rotates in the XZ plane by $\phi$ our rotor would look like this:

                {`
                \\begin{equation}
                R(\\phi) = e^{e_{xz} \\frac{\\phi}{2}}
                \\end{equation}
                `}

                We can then also combine rotations in different planes into a single rotor by multiplying them. A rotor that rotates by $\phi$ in the
                XZ plane followed by a rotation of $\theta$ in the XY plane looks like this

                {`
                \\begin{equation}
                R(\\phi, \\theta) = e^{e_{xy} \\frac{\\theta}{2}} e^{e_{xz} \\frac{\\phi}{2}}
                \\end{equation}
                `}
            </div>

            <InteractiveCode sourceCode={cnt.codeGeneralRotor3D} editorStyle={{height: 500}} />

            <div>
                These elements that are like the 3D version of Complex Numbers are called <a href="https://en.wikipedia.org/wiki/Quaternion">Quaternions</a>.
            </div>

            <h3>Conclusion</h3>
            <div>
                In this section we introduced Geometric Algebra. We learnt the basic rules of the Geometric Product and how to work with them.
                We also learnt about rotors which generalize the rotations created by complex numbers to any dimension and also puts them
                directly in the context of vectors.
            </div>
            <br />
            <div>
                In the next section we will learn how we can introduce translation in the rotors so we can do both translation and rotation
                using the same rotor and just one sandwich product. This will prove to have many advantages allow even further generalization.
            </div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}