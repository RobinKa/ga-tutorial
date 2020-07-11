import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { InteractiveCode } from "./InteractiveCode"
import * as ga from "./ga/ga_pp"
import * as pga from "./ga/ga_zpp"
import * as viz from "./ga/viz2d"

const visualizerExample = `// Render a point at x: 50, y: 10
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
}, "orange");
`

const textA = `
Usually introductions to GA begin by defining various rules and going over derivations before doing anything useful with them. I will also define some rules but try to get to the interesting stuff more quickly.
`

const textA2 = `
Like for the standard 2D vector algebra in geometric algebra we have two basis vectors $e_x, e_y$ using which arbitrary vectors $v = x e_x + y e_y$ can be formed. Below is some runnable and editable code that forms
such a vector and then displays them. The basis vectors $e_x, e_y$ are labeled e0 and e1 in the code.
`

const codeA2 = `// Render point at x=10, y=-60
renderPointGA({ e0: 10, e1: -60 })

// Render point at x=-50, y=80
renderPointGA({ e0: -50, e1: 80}, "red")
`

const textA3 = `Multiplying two same basis vectors together will result in $+1$ if they are the same (ie. $e_x e_x = 1, e_y e_y = 1$) similarly to how the dot product in standard vector algebra works.
The product which defines Geometric Algebra and is its most important aspect is called the Geometric Product. Let's verify these results with the code again this time just logging some text instead of visualizing.
`

const codeA3 = `console.log("e0^2:", ga.geometricProduct({ e0: 1 }, { e0: 1 }))
console.log("e1^2:", ga.geometricProduct({ e1: 1 }, { e1: 1 }))
`

const textB = `What is new is that we can also multiply two different basis vectors and the result will not be zero, but can't be simplified further $e_x e_y = e_{xy}$.
$e_xy$ here is not something new, it just stands for the two basis vectors multiplied together as a shorthand way of writing. These elements made up of two basis vectors are called bivectors.
`

const textB2 = `
Importantly the order of the product matters. A rule is that when you swap the factors of a product of basis vectors you pick up a minus sign, for example: $e_{xy} = e_x e_y = -e_y e_x = -e_{yx}$.
`

const codeB = `console.log("e0 e1:", ga.geometricProduct({ e0: 1 }, { e1: 1 }))
console.log("e1 e0:", ga.geometricProduct({ e1: 1 }, { e0: 1 }))
`

const textC = `
Let's now use these three basic rules we just learnt and see what some results are when we use them:

\\begin{aligned}
e_x e_y e_x & = & \\text{(rewrite as shorthand)} \\\\
e_{xyx} & = & \\text{(Swap neighbours on the right, pick up minus sign)} \\\\
-e_{xxy} & = & \\text{(Multiplying same basis vectors results in 1, e_xx = e_x e_x = 1)} \\\\
-e_y &
\\end{aligned}

We can verify these results with the code:
`

const codeC = `var a = ga.geometricProduct({ e0: 1 }, { e1: 1 }) // e_x e_y
var b = ga.geometricProduct(a, { e0: 1 }) // e_x e_y e_x
console.log("e0 e1 e0:", b)
`

const textD = `Hopefully this gives some idea of how the rules work and how to use them. Now for something more interesting, let's see what happens if we multiply of these together, that is, squaring it:
`

const codeD = `console.log("e01^2", ga.geometricProduct({ e01: 1 }, { e01: 1 }))`

const textE = `
\\begin{equation}
e_{xy}^2 = e_{xy} e_{xy} = e_{xyxy} = -e_{xyyx} = -e_{xx} = -1
\\end{equation}

We can see the square of the bivector $e_{xy}$ is $-1$, the same as the square of the imaginary unit of the complex numbers.
`

const textF = `
As mentioned before $e_{xy}$ can be identified as the imaginary unit $i$ of complex numbers hence we can represent complex numbers as $a + b e_{xy}$ and a rotation by an arbitrary angle $\\phi$
can be performed just like with complex numbers using Euler's formula

\\begin{equation}
R(\\phi) = e^{\\phi e_{xy}} = cos(\\phi) + e_{xy} sin(\\phi)
\\end{equation}

The object $R$ you get after exponentiating is called a rotor (because it rotates when you multiply with it, d'uh).

Unlike with complex numbers now however, we can multiply a vector by a rotor directly instead of having to treat vectors as if they were complex numbers.
`

const codeF = `var phi = Math.PI * 3 / 4 // 3/4 pi is 135°

// e^(phi e_xy)
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
renderPointGA(rotatedP, "red")`

const textG = `
\\begin{equation}
v R(\\phi) = (x e_x + y e_y) (cos(\\phi) + e_{xy} sin(\\phi)) = e_x (x cos(\\phi) - y sin(\\phi)) + e_y (x sin(\\phi) + y cos(\\phi))
\\end{equation}

We can see that the imaginary unit is actually a rotation in the XY plane as the bivector $e_{xy}$ is formed by multiplying the two basis vectors together, so in some sense it represents the XY plane.
`

function App() {
    useEffect(() => {
        // Set variables on window so we can use it in interactive code
        const wnd = window as any
        wnd.ga = ga
        wnd.pga = pga
        wnd.viz = viz
        wnd.renderScene = (scene: viz.Scene, renderTarget: HTMLElement) => {
            ReactDOM.render(viz.SceneView({ scene: scene }), renderTarget)
        }

        // eslint-disable-next-line no-eval
        eval(`
            var ga = wnd.ga;
            var pga = wnd.pga;
            var viz = wnd.viz;
            var renderScene = wnd.renderScene;
        `)
    }, [])

    return (
        <div>
            <h3>Geometric Algebra Basics</h3>
            <div>{textA}</div>
            <div>{textA2}</div>

            <InteractiveCode sourceCode={codeA2}
                hideOutput={true} withVisualizer={true}
            />

            <div>{textA3}</div>
            <InteractiveCode sourceCode={codeA3} />

            <div>{textB}</div>
            <div>{textB2}</div>
            <InteractiveCode sourceCode={codeB} />

            <div>{textC}</div>
            <InteractiveCode sourceCode={codeC} />

            <div>{textD}</div>
            <InteractiveCode sourceCode={codeD} />

            <div>{textE}</div>

            <h3>Using GA to perform 2D rotations</h3>
            <div>{textF}</div>
            <InteractiveCode sourceCode={codeF}
                hideOutput={false} withVisualizer={true} />

            <div>{textG}</div>

            <h3>Points and Lines</h3>
            <InteractiveCode sourceCode={visualizerExample}
                hideOutput={true} withVisualizer={true} />
        </div>
    )
}

export default App
