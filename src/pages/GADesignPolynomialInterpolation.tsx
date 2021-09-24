import React from "react"
import { ImageWithSub, useMathJax } from "../util"

export function GADesignPolynomialInterpolation() {
    useMathJax()

    return (
        <div>
            <h3>Designing Geometric Algebras - Curve Interpolating</h3>
            <div>
                Let's start with a concrete example. We have three points which are also shown in the figure below. We want to find $y$ values for other values of $x$ between our three points.
                This is called interpolation for $x$ between our known points, and extrapolation for $x$ outside of our known points. In other words, we want to find a curve that reasonably interpolates our points.
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                (x_1, y_1) & = (-3, 2) \\\\
                (x_2, y_2) & = (0, 3) \\\\
                (x_3, y_3) & = (1, 1)
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <ImageWithSub src="/images/polynomial-interpolation-points.svg" width="100%" text="Blue: Points we want to interpolate." />
            <div>
                A natural choice for a family of curves are polynomials in $x$. It turns out that $N$ points unique determine the coefficients of a degree $N-1$ polynomial.
                For our example, $y = c_0 + c_1 x + c_2 x^2$ is of degree two so its coefficients can be found given three points. The solution we want to find is shown below.
            </div>
            <ImageWithSub src="/images/polynomial-interpolation-solution.svg" width="100%" text="Blue: Points we want to interpolate. Green: Second degree polynomial interpolating the points." />
            <h5>Representing polynomials in Geometric Algebra</h5>
            <div>
                In the first section we learnt that we can represent polynomials in Geometric Algebra by introducing a basis vector for each term of it, including the $y$ term.
                For our concrete example we would have four basis vectors corresponding to $1, x, x^2, y$ and the up function which maps $(x, y)$ points to vectors in the 4D space is
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    up(x, y) = 1 e_0 + x e_1 + x^2 e_2 + y e_3
                \\end{equation}
                `}
            </div>
            <h5>Finding the interpolating polynomial object</h5>
            <div>
                Now we can represent points. How do we arrive at the polynomial curve that goes through all points?
                We know we can join points together to make shapes which go through all of them with the wedge product.
                In general we have the following equation which results in the pseudovector $p$:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    p = \\bigwedge_{n=1}^{N-1} up(x_n, y_n)
                \\end{equation}
                `}
            </div>
            <div>
                This should give us some object representing a shape that goes through all of the points that were joined.
            </div>
            <h5>Getting the interpolating polynomial coefficients from object</h5>
            <div>
                We can examine this object by applying the Outer Product Null Space / Join Null Space equation:
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                \\begin{aligned}
                    p \\wedge up(x, y) & = (p_0 e_0^* + p_1 e_1^* + p_2 e_2^* + p_3 e_3^*) \\wedge (1 e_0 + x e_1 + x^2 e_2 + y e_3) = \\\\
                    & = e_{1234} (p_0 + p_1 x + p_2 x^2 + p_3 y) = 0
                \\end{aligned}
                \\end{equation}
                `}
            </div>
            <div>
                Where $N$ is the dimensionality of the space so wedge together $N - 1$ points as that is what was required to uniquely determine a degree $N$ polynomial.
            </div>
            <div>
                To bring it into the usual form we still need to bring $y$ on the other side with a coefficient of $1$. We can also get rid of the pseudoscalar {`$e_{1234}$`}. This results in
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    y =  -\\frac{p_0}{p_3} - \\frac{p_1}{p_3} x - \\frac{p_2}{p_3} x^2
                \\end{equation}
                `}
            </div>
            <div>
                and in general, to get the ordinary coefficients $c_n$ from $p$ we have
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                c_n = -\\frac{p_n}{p_{N-1}}
                \\end{equation}
                `}
            </div>
            <div>
                We can see that the coefficients of the polynomial can be directly read off of $p$'s coefficients. This is the solution! We wedged together some points
                into a pseudovector, we know that the object goes through all of our points, and the pseudovector's coefficients are the interpolating polynomial's coefficients.
            </div>
            <div>
                For our concrete example we have the following pseudovector for representing the polynomial
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    p = up(-3, 2) \\wedge up(0, 3) \\wedge up(1, 1) = 36 e_1^* - 17 e_2^* - 7 e_3^* - 12 e_4^*
                \\end{equation}
                `}
            </div>
            <div>
                Reading off the coefficients and dividing by $y$'s coefficient yields the interpolating polynomial equation
            </div>
            <div style={{ padding: 20 }}>
                {`
                \\begin{equation}
                    y = -\\frac{36}{-12} - \\frac{-17}{-12} x - \\frac{-7}{-12} x^2 = 3 - \\frac{17}{12} x - \\frac{7}{12} x^2
                \\end{equation}
                `}
            </div>
            <div>
                which corresponds exactly to the green curve in the figure.
            </div>
            <h4>Algorithm Summary</h4>
            <div>
                To summarize the procedure, given N points $(x_n, y_n)$
            </div>
            <ol>
                <li>We want to interpolate with a polynomial of degree $N$ with coefficients $c_n$: {`$y = \\sum_{n=0}^{N - 1} c_n x^n$`}</li>
                <li>Use GA with N basis vectors and up function: {`$up(x, y) = y e_{N-1} + \\sum_{n=0}^{N - 2} x^n e_n$`}</li>
                <li>Build polynomial object $p$ by wedging together N up projected points: {`$p = \\bigwedge_{n=1}^{N-1} up(x_n, y_n)$`}</li>
                <li>Extract interpolating polynomial coefficients $c_n$ from $p$: {`$c_n = \\frac{p_n}{p_N}$`}</li>
            </ol>
            <h4>Conclusion</h4>
            <div>
                We started by looking at what interpolation is and we chose to use polynomials for interpolation. We then applied our knowledge from the
                previous section to represent polynomials in Geometric Algebra. With the wedge product we constructed an object representing the interpolating
                polynomial from which we could just read off the coefficients.
            </div>
            <div>
                This process generalizes to any number of points and it uses only very simple operations, so it might be preferable over the usual methods like
                using matrices or Lagrange polynomials. Also while we were focusing on polynomials here, this process works identically with other
                functions too, as no assumptions about the basis functions were made.
            </div>
        </div>
    )
}