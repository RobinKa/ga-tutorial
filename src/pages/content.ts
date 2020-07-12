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

export const codeRenderPoint = `// Render point at x=10, y=-60
renderPointGA({ e0: 10, e1: -60 })

// Render point at x=-50, y=80
renderPointGA({ e0: -50, e1: 80}, "red")`

export const codeSquareBasisVectors = `log("e0^2:", ga.geometricProduct({ e0: 1 }, { e0: 1 }))
log("e1^2:", ga.geometricProduct({ e1: 1 }, { e1: 1 }))`

export const codeExteriorProduct = `log("e0 e1:", ga.geometricProduct({ e0: 1 }, { e1: 1 }))
log("e1 e0:", ga.geometricProduct({ e1: 1 }, { e0: 1 }))`

export const codeAntiCommute = `// e_x e_y
var a = ga.geometricProduct({ e0: 1 }, { e1: 1 })

// e_x e_y e_x
var b = ga.geometricProduct(a, { e0: 1 })

log("e0 e1 e0:", b)`

export const codeSquareBivector = `log("e01^2", ga.geometricProduct({ e01: 1 }, { e01: 1 }))`

export const codeRotate2D = `var phi = Math.PI * 3 / 4 // 3/4 pi is 135°

// e^(phi e_{xy})
var r = ga.exponential(
    ga.geometricProduct(
        { scalar: phi },
        { e01: 1 }
    )
)

var p = { e0: 70, e1: 0 }

// p rotated by 135°
var rotatedP = ga.geometricProduct(r, p) 

renderPointGA(p)
renderPointGA(rotatedP, "red")
renderInfo(ga.repr(rotatedP), "red")`

export const codeGeneralRotor2D = `var phi = Math.PI * 3 / 4 // 3/4 pi is 135°

// e^(phi/2 e_{xy})
// Only half the angle required with sandwich product
var r = ga.exponential(
    ga.geometricProduct(
        { scalar: phi / 2 },
        { e01: 1 }
    )
)

var p = { e0: 70, e1: 0 }

// R p ~R
// p rotated by 135° using two-sided product
var rotatedP = ga.geometricProduct(
    r,
    ga.geometricProduct(p, ga.reversion(r)) 
)

renderPointGA(p)
renderPointGA(rotatedP, "red")
renderInfo(ga.repr(rotatedP), "red")`

export const codeGeneralRotor3D = `var phi = Math.PI * 3 / 4
var theta = Math.PI / 2

// XZ rotation by phi
var r1 = ga3d.exponential(
    ga3d.geometricProduct(
        { scalar: phi / 2 },
        { e02: 1 }
    )
)

// XY rotation by theta
var r2 = ga3d.exponential(
    ga3d.geometricProduct(
        { scalar: theta / 2 },
        { e01: 1 }
    )
)

// Compose XY and XZ rotation
var r = ga3d.geometricProduct(r2, r1)

var p = { e0: 70, e1: 0, e2: 0 }

// p first rotated by phi in XZ, then by theta in XY
var rotatedP = ga3d.geometricProduct(
    r,
    ga3d.geometricProduct(p, ga3d.reversion(r))
)

log("Rotated P:", ga3d.repr(rotatedP))`