export const codeRenderPoint = `// Render point at x=10, y=-60
renderPointGA({ e0: 10, e1: -60 })

// Render point at x=-50, y=80
renderPointGA({ e0: -50, e1: 80 }, "red")`

export const codeSquareBasisVectors = `var exSquared = ga.geometricProduct({ e0: 1 }, { e0: 1 })
var eySquared = ga.geometricProduct({ e1: 1 }, { e1: 1 })

log("e0^2:", exSquared)
log("e1^2:", eySquared)`

export const codeExteriorProduct = `var exEy = ga.geometricProduct({ e0: 1 }, { e1: 1 })
var eyEx = ga.geometricProduct({ e1: 1 }, { e0: 1 })

log("e0 e1:", exEy)
log("e1 e0:", eyEx)`

export const codeAntiCommute = `var exEy = ga.geometricProduct({ e0: 1 }, { e1: 1 })
var exEyEx = ga.geometricProduct(exEy, { e0: 1 })

log("e0 e1 e0:", exEyEx)`

export const codeSquareBivector = `var exEy = { e01: 1 }
var exEySquared = ga.geometricProduct(exEy, exEy)

log("e01^2", exEySquared)`

export const codeRotate2DOrientation = `var eXy = { e01: 1 }
var eYx = { e01: -1 } // e_yx = -e_xy

var p = { e0: 70, e1: 0 }

var a = ga.geometricProduct(eXy, p)
var b = ga.geometricProduct(eYx, p)

renderPointGA(p)
renderPointGA(a, "red")
renderPointGA(b, "blue")
`

export const codeRotate2D = `var phi = Math.PI * 3 / 4 // 135°

// e^(phi e_{yx}) = e^(-phi e_{xy})
var r = ga.exponential({ e01: -phi })

var p = { e0: 70, e1: 0 }

// p rotated by 135° counter-clockwise
var rotatedP = ga.geometricProduct(r, p)

renderPointGA(p)
renderPointGA(rotatedP, "red")
renderInfo(ga.repr(rotatedP), "red")`

export const codeGeneralRotor2D = `var phi = Math.PI * 3 / 4 // 135°

// e^(phi/2 e_{yx}) = e^(-phi/2 e_{xy})
// Only half the angle required with sandwich product
var r = ga.exponential({ e01: -phi / 2 })

var p = { e0: 70, e1: 0 }

// R p ~R (sandwich product)
// p rotated by 135° counter-clockwise
var rotatedP = ga.geometricProduct(
    r,
    ga.geometricProduct(p, ga.reversion(r)) 
)

renderPointGA(p)
renderPointGA(rotatedP, "red")
renderInfo(ga.repr(rotatedP), "red")`

export const codeGeneralRotor3D = `var phi = Math.PI * 3 / 4 // 135°
var theta = Math.PI / 2 // 90°

// CCW XZ rotation by phi
var r1 = ga3d.exponential({ e02: -phi / 2 })

// CCW XY rotation by theta
var r2 = ga3d.exponential({ e01: -theta / 2 })

// Compose XY and XZ rotation
var r = ga3d.geometricProduct(r2, r1)

var p = { e0: 70, e1: 0, e2: 0 }

// p first rotated by phi in XZ, then by theta in XY
var rotatedP = ga3d.geometricProduct(
    r,
    ga3d.geometricProduct(p, ga3d.reversion(r))
)

log("Rotated P:", rotatedP)`

export const codeReversionIdentity = `var phi = Math.PI * 3 / 4 // 135°
var theta = Math.PI / 2 // 90°

var r1 = ga3d.exponential({ e02: -phi / 2 })
var r2 = ga3d.exponential({ e01: -theta / 2 })

// Compose XY and XZ rotation
var r = ga3d.geometricProduct(r2, r1)

var p = { e0: 70, e1: 0, e2: 0 }

// (R ~R) p (R ~P)
var q = ga3d.sandwichProduct(
    p,
    ga3d.geometricProduct(r, ga3d.reversion(r))
)

log("q:", q)`