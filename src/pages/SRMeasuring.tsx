import React from "react"
import { Link } from "react-router-dom"
import { ImageWithSub, useMathJax } from "../util"

export function SRMeasuring() {
    useMathJax()

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Measuring in Spacetime</h3>
            <div>
                In the previous section we derived the Spacetime Algebra used all over GA formualtions of physics. As a next step we need to take a look at
                how space and time measurements are done in it. For this we will first look at how it is done in ordinary space, and then we will try to figure out
                how to do it for spacetime.
            </div>
            <h4>Measuring in Ordinary Space</h4>
            <div>
                We want to measure the size of an object in ordinary space. The thing we want to measure has endpoints $a$ and $b$, for example a stick.
                The endpoints can be represented by position vectors, and we can form a difference vector $v$ which encodes the extents in each dimension of space.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                a & = a_x e_x + a_y e_y \\\\
                b & = b_x e_x + b_y e_y \\\\
                v & = b - a
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                To measure the length of the stick in the X direction, we calculate the inner product with the $e_x$ basis vector, because then
                we pick out exactly the X component of the difference vector. And same for the Y component.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                v & = v_x e_x + v_y e_y \\\\
                v \\cdot e_x & = (v_x e_x + v_y e_y) \\cdot e_x = v_x \\\\
                v \\cdot e_y & = (v_x e_x + v_y e_y) \\cdot e_y = v_y
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <h4>Measuring in Spacetime</h4>
            <div>
                Does this idea still work in Spacetime? We start by doing exactly the same thing as in ordinary space. We have two events (points in spacetime, having position and time)
                and we want to measure the difference vector. The difference vector contains both a spatial distance (its $e_x$ component) as well as a time difference (its $e_t$ component).
            </div>
            <div>
                As before, we try doing the inner product with $e_t$ and $e_x$ to attempt picking out their respective components:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                v & = v_t e_t + v_x e_x \\\\
                v \\cdot e_t & = (v_x e_x + v_t e_t) \\cdot e_t = v_t \\\\
                v \\cdot e_x & = (v_x e_x + v_y e_y) \\cdot e_x = -v_x
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                Did we succeed? Not exactly. The t component is fine, however the x component picked up a minus sign because our spatial basis vectors square to $-1$ in
                the Spacetime Algebra. How do we fix this?
            </div>
            <h4>Reciprocal frames</h4>
            <ImageWithSub src="/images/sr-reciprocal-frames.png" width="60%" text="Light blue: Basis vectors. Blue: Reciprocal basis vectors. Orange: Vector we want to measure. Yellow: Desired measurement results." />
            <div>
                What we really wanted for measuring the component along one basis vector is a vector whose inner product with it is $1$, and $0$ with all other basis vectors.
                We call these vectors reciprocal. For ordinary space with an orthonormal basis, each basis vector is already its own reciprocal basis vector.
            </div>
            <div>
                In the Spacetime Algebra the spatial basis vectors square to $-1$ so this is not the case anymore.
                For example the reciprocal vector for $e_x$ is $-e_x$ because $e_x \cdot -e_x = 1$ and $e_t \cdot -e_x = 0$.
            </div>
            <div>
                The collection of reciprocal basis vectors is called a reciprocal frame.
                We write the reciprocal basis vectors using upstairs letters. For example $e^x$ is the reciprocal basis vector for $e_x$.
                For the 4 dimensional Spacetime Algebra we have the following reciprocal frame:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                e^t & = e_t \\\\
                e^x & = -e_x \\\\
                e^y & = -e_y \\\\
                e^z & = -e_z
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                Applying this to the first example where we initially failed we get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                v \\cdot e^x = (v_x e_x + v_y e_y) \\cdot -e_x = v_x
                \\end{equation}
                `}
            </div>
            <div>
                which is the result we wanted.
            </div>
            <h4>General formula for Reciprocal Frames</h4>
            <div>
                Another application for reciprocal frames are curvilinear coordinate systems. Here we can have basis vectors which
                square to neither $1$ nor $-1$. For example the radial basis vector in spherical coordinates will square to $r^2$.
                For our Spacetime Algebra basis vectors it was easy to find the reciprocal basis vectors just by inspection, but here it is trickier.
            </div>
            <div>
                Fortunately a very simple formula exists for finding the reciprocal frame for a set of basis vectors in general:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                e^i = \\frac{\\bigwedge_{j \\neq i} e_j}{\\bigwedge_j e_j} = \\frac{\\bigwedge_{j \\neq i} e_j}{I}
                \\end{equation}
                `}
            </div>
            <div>
                In words, we take the wedge product of all our basis vectors in order except for the one we try to find the reciprocal for and divide by the pseudoscalar.
                For example applying this to our Spacetime Algebra's $e_x$ we get
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                e^x = \\frac{e_t \\wedge e_y \\wedge e_z}{e_t \\wedge e_x \\wedge e_y \\wedge e_z} = -e_{tyztxyz} = -e_x
                \\end{equation}
                `}
            </div>
            <div>
                We won't use this formula nor curvilinear coordinate systems in the rest of this series but I thought it is simple and important enough to mention here.
            </div>
            <h4>Conclusion</h4>
            <div>
                We looked at how measurements are done in ordinary space. Then we saw this way of measuring breaks for our Spacetime Algebra. We found
                that using reciprocal frames solves this and we wrote down the reciprocal basis vectors for our Spacetime Algebra's basis vectors.
            </div>
            <h4>Formulas</h4>
            <div>
                <ul>
                    <li>Reciprocal basis vectors: {`$e^i \\cdot e_j = \\delta_j^i$`}</li>
                    <li>Measure $e_i$ component of vector: {`$e^i \\cdot v = v_i$`}</li>
                    <li>Spacetime Algebra reciprocal basis vectors: {`$e^t = e_t, e^x = -e_x, e^y = -e_y, e^z = -e_z$`}</li>
                    <li>Finding reciprocal basis vectors in general: {`$e^i = \\frac{\\bigwedge_{j \\neq i} e_j}{\\bigwedge_j e_j} = \\frac{\\bigwedge_{j \\neq i} e_j}{I}$`}</li>
                </ul>
            </div>
            <h4>Up next</h4>
            <div>
                Now that we know how to take measurements of vectors, we will look at how observers at different relative speeds measure the same objects.
            </div>
            <h4><Link to="/sr-time-dilation">Special Relativity with Geometric Algebra - Time Dilation</Link></h4>
        </div>
    )
}