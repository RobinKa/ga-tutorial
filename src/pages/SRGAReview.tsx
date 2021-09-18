import React from "react"
import { Link } from "react-router-dom"
import { ImageWithSub, useMathJax } from "../util"


export function SRGAReview() {
    useMathJax()

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Geometric Algebra Review</h3>
            <h4>Ordinary 3D Geometric Algebra</h4>
            <div>
                Let's review a couple of properties of ordinary 3D Geometric Algebra. If you are not yet familiar with it there are a few excellent
                videos on YouTube as well as a couple of books going into GA in more detail. A few were mentioned in the previous section.
            </div>
            <ImageWithSub src="/images/sr-ordinary-ga.png" text="Figure 1 - Blue: Orthonormal basis vectors. Red: Position vectors $a, b$. Yellow: difference vector $v$ from $a$ to $b$." width="50%" />
            <div>
                We have three <u style={{ textDecorationColor: "#3721FF", textDecorationThickness: 3 }}>orthonormal basis vectors $e_x, e_y, e_z$</u>. Written using the <a href="https://en.wikipedia.org/wiki/Kronecker_delta">Kronecker delta</a> we have {`$e_i \\cdot e_j = \\delta^i_j$`},
                which says that the inner product of two same basis vectors is $1$, and the inner product of two different basis vectors is $0$. For example we have $e_x \cdot e_x = 1$ and $e_x \cdot e_y = 0$.
            </div>
            <div>
                The <u style={{ textDecorationColor: "#FF4760", textDecorationThickness: 3 }}>position vectors $a$ and $b$</u> from figure 1 can be written terms of the basis vectors as follows
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                    a & = a_x e_x + a_y e_y \\\\
                    b & = b_x e_x + b_y e_y
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                We can form the <u style={{ textDecorationColor: "#FFD900", textDecorationThickness: 3 }}>difference vector $v$</u> from $a$ to $b$ by subtracting $a$ from $b$ to get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    v = b - a = (b_x - a_x) e_x + (b_y - a_y) e_y = \\Delta x e_x + \\Delta y e_y
                \\end{equation}
                `}
            </div>
            <div>
                To get the length squared $||v||^2$ we have to square $v$, which yields the same result as the Pythagorean theorem
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    ||v||^2 = v^2 = (\\Delta x e_x + \\Delta y e_y)^2 = \\Delta x^2 + \\Delta y^2
                \\end{equation}
                `}
            </div>
            <h4>Active and Passive Transformations</h4>
            <div>
                You might not have heard the terms <a href="https://en.wikipedia.org/wiki/Active_and_passive_transformation">active and passive transformations</a> before,
                but it is often a useful distinction to make. We will review these two types of transformations now too.
            </div>
            <h5>Active Transformations</h5>
            <ImageWithSub src="/images/sr-active-transformation.png" text="Figure 2 - Blue: Orthonormal basis vectors. Yellow: Original vector. Teal: Active transformation rotor. Purple: Original vector transformed using rotor." width="50%" />
            <div>
                Active transformations change objects. The active transformations we are interested in here are those with rotors.
                In ordinary 3D GA we have three basis blades {`$e_{xy}, e_{yz}, e_{xz}$`} which can be used to rotate in the planes denoted by their subscripts.
                For example, as in figure 2, a <u style={{ textDecorationColor: "#00FFFF", textDecorationThickness: 3 }}>rotor</u> that rotates by an angle $\varphi$ in the XY plane is formed like this
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    R_{xy} = e^{-\\frac{e_{xy}}{2} \\varphi} = cos(-\\frac{e_{xy}}{2}) + sin(-\\frac{e_{xy}}{2}) e_{xy}
                \\end{equation}
                `}
            </div>
            <div>
                The rotor is then applied to an object, such as our <u style={{ textDecorationColor: "#FFD900", textDecorationThickness: 3 }}>vector $v$</u>, with a two-sided product often called the sandwich product
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    v' = R_{xy} v \\widetilde{R}_{xy}
                \\end{equation}
                `}
            </div>
            <div>
                The <u style={{ textDecorationColor: "#B200FE", textDecorationThickness: 3 }}>resulting vector $v'$</u> will in general be different from $v$, so this is an active transformation as the object did actually change.
            </div>
            <div>
                Rotating a vector does not change its length (verify this as an excercise if you wish by squaring the rotated vector), so applying rotors preserves distances.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    ||v'||^2 = ||R_{xy} v \\widetilde{R}_{xy}||^2 = v_x'^2 + v_y'^2 = v_x^2 + v_y^2 = ||v||^2
                \\end{equation}
                `}
            </div>
            <h5>Passive Transformations</h5>
            <ImageWithSub src="/images/sr-passive-transformation-before.png" text="Figure 3 - Coordinate system using original orthonormal basis vectors. Blue: Original orthonormal basis vectors. Yellow: Passive transformation rotor. Green: Original orthonormal basis vectors transformed with rotor. Teal: Vector." width="50%" />
            <div>
                Passive transformations act on the coordinate basis vectors. They do not actually change the objects, only the perspective on them.
                They are also called change of basis. We are interested in passive transformations performed by rotors.
            </div>
            <div>
                Let's say our first set of <u style={{ textDecorationColor: "#0026FF", textDecorationThickness: 3 }}>basis vectors $e_x, e_y$</u> belonged to one person. We have another person
                with <u style={{ textDecorationColor: "#00FF22", textDecorationThickness: 3 }}>basis vectors $e_x', e_y'$</u> who is looking in another direction from the first person such as in figure 3.
                The rotation between the first and second set of basis vectors can be performed by a <u style={{ textDecorationColor: "#FFD900", textDecorationThickness: 3 }}>rotor $R$</u>
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                    e_x' & = R e_x \\widetilde{R} \\\\
                    e_y' & = R e_y \\widetilde{R}
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <ImageWithSub src="/images/sr-passive-transformation-after.png" text="Figure 4 - Coordinate system using transformed orthonormal basis vectors. Blue: Original orthonormal basis vectors. Yellow: Passive transformation rotor. Green: Original orthonormal basis vectors transformed with rotor. Teal: Vector." width="50%" />
            <div>
                We can now see how the second person views the world by drawing the coordinate system using their basis vectors. The <u style={{ textDecorationColor: "#00F1F1", textDecorationThickness: 3 }}>vector $v$</u> <i>appears</i> to rotate  in the opposite
                direction. It is very important to note though that the vector does not actually change. It is merely viwed in a different basis but it is fundamentally the same vector. The vector $v$ expressed in the old and the new basis is
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    v = v_x e_x + v_y e_y v_x' e_x' + v_y' e_y'
                \\end{equation}
                `}
            </div>
            <div>
                As the vector did not actually change, it's length when expressed in the new basis is still be the same as before too
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    ||v||^2 = (v_x' e_x' + v_y' e_y')^2 = v_x'^2 + v_y'^2 = v_x^2 + v_y^2
                \\end{equation}
                `}
            </div>
            <div>
                Another important property of passive transformations with rotors is that they keep the basis vectors orthonormal.
            </div>
            <div>
                Important note: In this series we will only be dealing with orthonormal bases to simplify things. This excludes coordinate system such as spherical coordinates.
                In order to deal with more general bases a concept called reciprocal frames is required. Overall this is not a big change to make however, and it would be easy to adjust
                all our upcoming results to use them.
            </div>
            <h4>Conclusion</h4>
            <div>
                We shortly reviewed position and difference vectors. We looked at active transformations which change objects, in particular active transformations with rotors
                which perserve lengths. We also looked at passive transformations which only affect coordinate basis vectors but do not actually affect any objects. For these
                we also noticed that the length of vectors can obtained using the coefficients of the vector in the transformed basis. Furthermore passive transformations with
                rotors keep orthonormal bases orthonormal.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Orthonormal basis for ordinary GA: {`$e_i \\cdot e_j = \\delta^i_j$`}</li>
                    <li>Vector expressed in basis: {`$v = v_x e_x + v_y e_y$`}</li>
                    <li>Vector length squared: {`$||v||^2 = v^2 = v_x^2 + v_y^2$`} </li>
                    <li>Active transformation with rotor: {`$v' = R v \\widetilde{R}, ||v'||^2 = ||v||^2$`} </li>
                    <li>Passive transformation with rotor: {`$e_i' = R e_i \\widetilde{R}, e_i \\cdot e_j = \\delta^i_j \\iff e_i' \\cdot e_j' = \\delta^i_j$`} </li>
                </ul>
            </div>
            <h4><Link to="/sr-spacetime-algebra">Special Relativity with Geometric Algebra - Spacetime Algebra</Link></h4>
        </div>
    )
}