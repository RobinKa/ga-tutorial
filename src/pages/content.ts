export const visualizerExample = `// Render a point at x: 50, y: 10
renderPointPGA({
    e02: -50,
    e01: 10,
    e12: 1
}, "lime");

// Render the line 1x + 1y = 10
renderLinePGA({
    e0: 10,
    e1: 1,
    e2: -1
}, "orange");`

export const textA = `
Usually introductions to GA begin by defining various rules and going over derivations before doing anything useful with them. I will also define some rules but try to get to the interesting stuff more quickly.
`

export const textA2 = `
Like for the standard 2D vector algebra in geometric algebra we have two basis vectors $e_x, e_y$ using which arbitrary vectors $v = x e_x + y e_y$ can be formed. Below is some runnable and editable code that forms
such vectors and then displays them as points. The basis vectors $e_x, e_y$ are labeled e0 and e1 in the code.
`

export const codeA2 = `// Render point at x=10, y=-60
renderPointGA({ e0: 10, e1: -60 })

// Render point at x=-50, y=80
renderPointGA({ e0: -50, e1: 80}, "red")`

export const textA3 = `The product which defines Geometric Algebra and is its most important aspect is called the geometric product.
Multiplying two same basis vectors together with the geometric product will result in $+1$ (for now...) if they are the same.

\\begin{equation}
e_x e_x = 1, e_y e_y = 1
\\end{equation}

This is similar to how the dot product in standard vector algebra works.
Let's verify these results with the code again, this time just logging some text instead of visualizing.
`

export const codeA3 = `log("e0^2:", ga.geometricProduct({ e0: 1 }, { e0: 1 }))
log("e1^2:", ga.geometricProduct({ e1: 1 }, { e1: 1 }))`

export const textB = `What is new is that we can also multiply two different basis vectors and the result will not be zero, but can't be simplified further.

\\begin{equation}
e_x e_y = e_{xy}
\\end{equation}

$e_{xy}$ here is not something new, it just stands for the two basis vectors multiplied together as a shorthand way of writing.
Such elements made up of two basis vectors are called bivectors.
`

export const textB2 = `
Importantly the order of the product matters. A rule is that when you swap the factors of a product of basis vectors you pick up a minus sign.
We say that the basis vectors anti-commute.

\\begin{equation}
e_{xy} = e_x e_y = -e_y e_x = -e_{yx}
\\end{equation}
`

export const codeB = `log("e0 e1:", ga.geometricProduct({ e0: 1 }, { e1: 1 }))
log("e1 e0:", ga.geometricProduct({ e1: 1 }, { e0: 1 }))`

export const textC = `
Let's now use these two basic rules we just learnt and see what some results are when we use them:

\\begin{aligned}
e_x e_y e_x & = & \\text{(rewrite as shorthand)} \\\\
e_{xyx} & = & \\text{(Swap neighbours on the right, pick up minus sign)} \\\\
-e_{xxy} & = & \\text{(Multiplying same basis vectors results in 1, e_xx = e_x e_x = 1)} \\\\
-e_y &
\\end{aligned}

We can verify these results with the code:
`

export const codeC = `var a = ga.geometricProduct({ e0: 1 }, { e1: 1 }) // e_x e_y
var b = ga.geometricProduct(a, { e0: 1 }) // e_x e_y e_x
log("e0 e1 e0:", b)`

export const textD = `Now for something more interesting, let's see what happens if we square the bivector $e_{xy}$, that is, multiplying it by itself:
`

export const codeD = `log("e01^2", ga.geometricProduct({ e01: 1 }, { e01: 1 }))`

export const textE = `
\\begin{equation}
e_{xy}^2 = e_{xy} e_{xy} = e_{xyxy} = -e_{xyyx} = -e_{xx} = -1
\\end{equation}

We can see the square of the bivector $e_{xy}$ is $-1$. This shows that such a bivector is very similar to
the imaginary unit $i$ of complex numbers which was specifically introduced to square to $-1$. Here we didn't have to
introduce anything new and we automatically had such an element in our algebra.
`

export const textF = `
As mentioned before $e_{xy}$ can be identified as the imaginary unit $i$ of complex numbers hence we can represent complex numbers as $a + b e_{xy}$ and a rotation by an arbitrary angle $\\phi$
can be performed just like with complex numbers using Euler's formula

\\begin{equation}
R(\\phi) = e^{\\phi e_{xy}} = cos(\\phi) + e_{xy} sin(\\phi)
\\end{equation}

The object $R$ you get after exponentiating is called a rotor (because it rotates when you multiply with it, d'uh).

Unlike with complex numbers now however, we can multiply a vector by a rotor directly instead of having to treat vectors as if they were complex numbers.
`

export const codeF = `var phi = Math.PI * 3 / 4 // 3/4 pi is 135°

// e^(phi e_{xy})
var r = ga.exponential(
    ga.geometricProduct(
        { scalar: phi },
        { e01: 1 }
    )
)

var p = { e0: 70, e1: 0 }

var rotatedP = ga.geometricProduct(r, p) // p rotated by 45°

renderPointGA({ e0: 0, e1: 0 }, "purple") // Origin
renderPointGA(p)
renderPointGA(rotatedP, "red")
renderInfo(ga.repr(rotatedP), "red")`

export const textG = `
\\begin{equation}
v R(\\phi) = (x e_x + y e_y) (cos(\\phi) + e_{xy} sin(\\phi)) = e_x (x cos(\\phi) - y sin(\\phi)) + e_y (x sin(\\phi) + y cos(\\phi))
\\end{equation}

We can see that the imaginary unit is actually a rotation in the XY plane as the bivector $e_{xy}$ is formed by multiplying the two basis vectors together, so in some sense it represents the XY plane.
`