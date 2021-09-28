import React, { useCallback, useEffect, useState } from "react"
import { mathJaxTypesetPromise, useMathJax } from "../util"

type BasicRowProps = {
    name: string
    notation?: string
    description?: string
    examples?: React.ReactElement | string
    alias?: string
}

function BasicRow(props: BasicRowProps) {
    const { name, notation, description, examples, alias } = props

    const [showExamples, setShowExamples] = useState(false)

    const onToggleShowExamples = useCallback(() => {
        setShowExamples(!showExamples)
    }, [showExamples])

    useEffect(() => {
        mathJaxTypesetPromise()
    }, [showExamples])

    return (
        <tr>
            <td style={{ verticalAlign: "top" }}><div data-tip={alias && `Other names: ${alias}`}>{name}</div></td>
            <td style={{ verticalAlign: "top" }}>{notation}</td>
            <td style={{ verticalAlign: "top" }}>
                <div>
                    <div>{examples && <button onClick={onToggleShowExamples}>{showExamples ? "-" : "+"}</button>}{description}</div>
                    {showExamples && <div>{examples}</div>}
                </div>
            </td>
        </tr>
    )
}

type EquationRowProps = {
    equation: string
    notes?: string
    examples?: React.ReactElement | string
}

function EquationRow(props: EquationRowProps) {
    const { equation, notes, examples } = props

    const [showExamples, setShowExamples] = useState(false)

    const onToggleShowExamples = useCallback(() => {
        setShowExamples(!showExamples)
    }, [showExamples])

    useEffect(() => {
        mathJaxTypesetPromise()
    }, [showExamples])

    return (
        <tr>
            <td style={{ verticalAlign: "top" }} data-tip={notes}>{equation}</td>
            <td style={{ verticalAlign: "top" }}>
                {examples && <div>
                    <div><button onClick={onToggleShowExamples}>{showExamples ? "-" : "+"}</button></div>
                    {showExamples && <div>{examples}</div>}
                </div>}
            </td>
        </tr>
    )
}

const terminologyRowProps: BasicRowProps[] = [
    {
        name: "Geometric Algebra",
        alias: "Clifford Algebra",
        notation: "$Cl^{p,q,r}, Cl^{p,q}, Cl^p$",
        description: "Geometric algebra with $p$ basis vectors squaring to $+1$, $q$ basis vectors squaring to $-1$ and $r$ basis vectors squaring to $0$. If indices are omitted they are assumed to be zero. $r > 0$ algebras are called degenerate.",
        examples: <ul>
            <li>{`$Cl^2: e_1^2 = 1, e_2^2 = 1$`}</li>
            <li>{`$Cl^{1, 1}: e_1^2 = 1, e_2^2 = -1$`}</li>
            <li>{`$Cl^{2, 0, 1}: e_1^2 = 1, e_2^2 = 1, e_3^2 = 0$`}</li>
        </ul>
    },
    {
        name: "Scalar",
        notation: "$s$",
        description: "Ordinary numbers, usually real numbers."
    },
    {
        name: "Basis vector",
        notation: "$e_i$",
        description: "Basis vectors of a geometric algebra."
    },
    {
        name: "Vector",
        notation: "$a = a_1 e_2 + a_2 e_2 + ...$",
        description: "Linear combination of basis vectors."
    },
    {
        name: "Basis blade",
        notation: "$e_{ij...}$",
        description: "Product of basis vectors.",
        examples: <ul>
            <li>{`$e_{123} = e_1 e_2 e_3$`}</li>
        </ul>
    },
    {
        name: "Blade",
        notation: "$B$",
        description: "Product of vectors.",
        examples: <ul>
            <li>{`$B = (e_1 + e_2) e_3 = e_{12} + e_{23}$`}</li>
        </ul>
    },
    {
        name: "Grade",
        description: "The grade of a basis blades is how many basis vectors it is made of. A pure grade element can be a linear combination of identically graded basis blades. A mixed grade element can be a combination of differently graded basis blades.",
        examples: <ul>
            <li>Scalars are grade 0</li>
            <li>{`$e_1$`} is grade 1</li>
            <li>{`$e_{12}$`} is grade 2</li>
            <li>{`$e_1 + e_{12}$`} is mixed grade (1 and 2)</li>
        </ul>
    },
    {
        name: "Bivector, Trivector, Quadvector, ...",
        alias: "1/2/3/...-vector",
        description: "Multivector of grade denoted by the prefix (eg. bi is grade $2$, tri is grade $3$).",
        examples: <ul>
            <li>{`$e_{12}$ is a bivector`}</li>
            <li>{`$e_{123}$ is a trivector`}</li>
        </ul>
    },
    {
        name: "Pseudoscalar, Pseudovector, Pseudobivector, ...",
        description: "Opposite grade element. For an $n$ dimensional algebra, a pseudovector has grade $n - 1$, a pseudobivector has grade $n - 2$, ...",
        examples: <ul>
            <li>{`$e_{12}$ is a pseudovector in $Cl^3$`}</li>
            <li>{`$e_{123}$ is the pseudoscalar of $Cl^3$`}</li>
            <li>{`$e_{12}$ is a pseudobivector in $Cl^4$`}</li>
            <li>{`$e_{123}$ is a pseudovector in $Cl^4$`}</li>
            <li>{`$e_{1234}$ is the pseudoscalar of $Cl^4$`}</li>
        </ul>
    },
    {
        name: "Multivector",
        notation: "$A$",
        description: "Sum of elements of the algebra. Can be of mixed grade in general.",
        examples: <ul>
            <li>{`$A = e_1 + e_{23}$`}</li>
        </ul>
    },
    {
        name: "Simple",
        description: "Elements are simple if they square to scalars.",
        examples: <ul>
            <li>{`$e_{12}$ is simple because $e_{12}^2 = -1$`}</li>
        </ul>
    },
    {
        name: "Exponential of a simple element",
        notation: "$e^{s B}$",
        description: "If an element is simple (ie. squares to a scalar) we have easy formulas for the exponential of them (see examples).",
        examples: <ul>
            <li>{`$B^2 = -1 \\implies e^{s B} = \\cos(s) + \\sin(s) B$`} </li>
            <li>{`$B^2 = 1 \\implies e^{s B} = \\cosh(s) + \\sinh(s) B$`} </li>
            <li>{`$B^2 = 0 \\implies e^{s B} = 1 + s B$`} </li>
        </ul>
    },
    {
        name: "Exponential of a general element",
        notation: "$e^A$",
        description: "We can often decompose general elements into simple elements using the invariant decomposition and then apply the exponential to the simple elements.",
    },
    {
        name: "Rotor",
        notation: "$R$",
        description: "Product of an even number of normalized vectors. Used for example for performing rotations. Often obtained by exponentiating bivectors.",
        examples: <ul>
            <li>{`$R_{xy} = e^{-\\frac{\\varphi}{2} e_{xy}}, v' = R_{xy} v \\widetilde{R}_{xy}$`} Rotates the vector $v$ by $\varphi$ clockwise in the XY plane.</li>
        </ul>
    },
]

const operationRowProps: BasicRowProps[] = [
    {
        name: "Inner Product",
        notation: "$a \\cdot b$",
        alias: "Hestenes Inner Product, Fat-Dot Product",
        description: "Inner product acting on multivectors. For basis vectors gives the values as defined by the algebra.",
        examples: <ul>
            <li>{`$e_1 \\cdot e_1 = e_1^2 = 1$`} ($e_1^2 = 1$)</li>
            <li>{`$e_1 \\cdot e_2 = 0$`}</li>
            <li>{`$(e_1 + e_2) \\cdot e_2 = e_1 \\cdot e_2 + e_2 \\cdot e_2 = 0 + 1 = 1$`} ($e_2^2 = 1$)</li>
        </ul>
    },
    {
        name: "Wedge Product",
        notation: "$a \\wedge b$",
        alias: "Exterior Product, Outer Product",
        description: "Used for join in ordinary representations and meet in dual representations. Zero for parallel vectors. Orthogonal vectors don't simplify and are written with a shorthand notation. Orthogonal vectors anti-commute.",
        examples: <ul>
            <li>{`$e_1 \\wedge e_1 = 0$`}</li>
            <li>{`$e_1 \\wedge e_2 = e_{12}$`}</li>
            <li>{`$e_2 \\wedge e_1 = e_{21} = -e_{12}$`}</li>
            <li>{`$(e_1 + e_2) \\wedge e_2 = e_1 \\wedge e_2 + e_2 \\wedge e_2 = e_{12}$`}</li>
        </ul>
    },
    {
        name: "Geometric Product",
        alias: "Product, Multiplication",
        notation: "$a b$",
        description: "The ordinary product. For vectors can be expanded into a sum of inner and wedge product.",
        examples: <ul>
            <li>For vectors $a, b$: {`$a b = a \\cdot b + a \\wedge b$`}</li>
            <li>{`$e_1 e_2 = e_{12}$`}</li>
            <li>{`$(e_1 + e_2) e_2 = e_{12} + e_2^2 = e_{12} + 1$`} ($e_2^2 = 1$)</li>
        </ul>
    },
    {
        name: "Square",
        notation: "$A^2$",
        description: "Ambiguous. Often $A A$ or $A \\widetilde{A}$ which sometimes give the same result and sometimes don't.",
        examples: <ul>
            <li>{`$e_1^2 = e_1 e_1 = 1 = e_1 \\widetilde{e_1}$`}</li>
            <li>{`$e_{12}^2 = e_{12} e_{12} = -1 \\neq e_{12} \\widetilde{e_{12}} = 1$`}</li>
        </ul>
    },
    {
        name: "Commutator",
        notation: "$a \\times b, [a, b]$",
        description: "$a \\times b = a b - b a$, Zero if $a$ and $b$ commute under the geometric product. $2 a b$ if they anti-commute.",
    },
    {
        name: "Grade Selection",
        notation: "$\\langle A \\rangle_n$",
        description: "Keeps only the grade $n$ parts",
        examples: <ul>
            <li>{`$A = a + a_1 e_1 + a_{12} e_{12}, \\langle A \\rangle_1 = a_1 e_1$`}</li>
        </ul>
    },
    {
        name: "Scalar Grade Selection",
        notation: "$\\langle A \\rangle$",
        description: "Same as Grade Selection with $n = 0$. Keeps only the scalar part.",
        examples: <ul>
            <li>{`$A = a + a_1 e_1 + a_{12} e_{12}, \\langle A \\rangle = a$`}</li>
        </ul>
    },
    {
        name: "Reverse",
        notation: "$\\widetilde{A}, (a + b + c)^\\sim$",
        alias: "Reversion conjugation",
        description: "Reverses the order of basis vectors in products.",
        examples: <ul>
            <li>{`$\\widetilde{e_1} = e_1$`}</li>
            <li>{`$\\widetilde{e_{12}} = e_{21} = -e_{12}$`}</li>
            <li>{`$\\widetilde{e_{123}} = e_{321} = -e_{123}$`}</li>
            <li>{`$(e_1 + e_{12})^\\sim = \\widetilde{e_1} + \\widetilde{e_{12}} = e_1 - e_{12}$`}</li>
        </ul>
    },
    {
        name: "Dual",
        alias: "Hodge star, Orthogonal complement, Metric complement",
        notation: "$A^*$",
        description: "Gives a complementary element. For degenerate algebras the dual is zero. However we can still get a useful non-metric complement by assuming $I = I_{euclidean}$ which is usually just called the dual too.",
        examples: <ul>
            <li>{`$A \\wedge A^* = \\widetilde{A} A I$`}</li>
            <li>{`$A^* = \\widetilde{A} I$`}</li>
            <li>{`$Cl^3$: $e_1^* = \\widetilde{e_1} I = e_1 e_{123} = e_{23}$`}</li>
        </ul>
    },
    {
        name: "Polar",
        description: "Often also called dual, but is not the same as the dual above!",
        notation: "$I A, A I$",
        examples: <ul>
            <li>{`$Cl^3$: $e_{12} I = e_{12} e_{123} = -e_3 \\neq e_{12}^* = e_3$`}</li>
        </ul>
    },
    {
        name: "Vee Product",
        alias: "Regressive Product",
        notation: "$a \\vee b$",
        description: "Used for meet in ordinary representations and join in dual representations. Usually implemented with the wedge product and taking duals.",
        examples: <ul>
            <li>{`$(a \\vee b)^* = a* \\wedge b*$`}</li>
            <li>{`$a \\vee b = (a^* \\wedge b^*)^{***}$`}</li>
        </ul>
    },
]

const equationRowProps: EquationRowProps[] = [
    {
        equation: "$e_i \\wedge e_j = -e_j \\wedge e_i$",
    },
    {
        equation: "$e_i \\wedge e_i = 0$",
    },
    {
        equation: "$e_i \\cdot e_i = e_i^2$",
    },
    {
        equation: "$e_i \\cdot e_j = 0$",
    },
    {
        equation: "$e_i e_j = e_i \\wedge e_j$",
    },
    {
        equation: "$e_i \\wedge e_j = e_i e_j = e_{ij}$",
    },
    {
        equation: "$a b = a \\cdot b + a \\wedge b$ for vectors $a, b$",
    },
    {
        equation: "$A^* = \\widetilde{A} I$ for non-degenerate algebras",
    },
    {
        equation: "$a \\cdot (b \\wedge c) + c \\cdot (a \\wedge b) + b \\cdot (c \\wedge a) = 0$  for vectors $a, b, c$",
    },
]

function Expander(props: { title: string, children: React.ReactElement, initialExpanded?: boolean }) {
    const { title, children, initialExpanded } = props

    const [expanded, setExpanded] = useState(initialExpanded ?? false)

    const onToggle = useCallback(() => {
        setExpanded(!expanded)
    }, [expanded])

    return <div>
        <div style={{ cursor: "pointer" }} onClick={onToggle}><h4>{expanded ? "⥣" : "⥥"} {title}</h4></div>
        {expanded && <div>
            {children}
        </div>}
    </div>
}

export function CheatSheet() {
    useMathJax()

    return (
        <div>
            <h3>Geometric Algebra Cheat Sheet</h3>
            <div>
                This is a list of terminology, notation and equations that are useful in Geometric Algebra.
                If you have more additions, corrections or suggestions please send me (Tora) a
                message in the <a href="https://discord.gg/vGY6pPk">Bivector discord</a> or <a href="mailto:tora@warlock.ai">email me</a>.
            </div>
            <Expander title="Terminology" initialExpanded={true}>
                <table style={{ width: "100%", padding: "2%" }}>
                    <tr>
                        <th style={{ textAlign: "left", width: "30%" }}>Name</th>
                        <th style={{ textAlign: "left", width: "20%" }}>Notation</th>
                        <th style={{ textAlign: "left", width: "50%" }}>Description</th>
                    </tr>
                    {terminologyRowProps.map((rowProp, i) => <BasicRow key={i} {...rowProp} />)}
                </table>
            </Expander>
            <Expander title="Operations">
                <table style={{ width: "100%", padding: "2%" }}>
                    <tr>
                        <th style={{ textAlign: "left", width: "30%" }}>Name</th>
                        <th style={{ textAlign: "left", width: "20%" }}>Notation</th>
                        <th style={{ textAlign: "left", width: "50%" }}>Description</th>
                    </tr>
                    {operationRowProps.map((rowProp, i) => <BasicRow key={i} {...rowProp} />)}
                </table>
            </Expander>
            <Expander title="Equations">
                <table style={{ width: "100%", padding: "2%" }}>
                    <tr>
                        <th style={{ textAlign: "left", width: "60%" }}>Equation</th>
                        <th style={{ textAlign: "left", width: "40%" }}>Examples</th>
                    </tr>
                    {equationRowProps.map((rowProp, i) => <EquationRow key={i} {...rowProp} />)}
                </table>
            </Expander>
        </div>
    )
}