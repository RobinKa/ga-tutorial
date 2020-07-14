export const pgaPoints = `// Render a point at x: 40, y: 60
renderPointPGA({
    e02: -40, // -e_0y = e_y0
    e01: 60,
    e12: 1
}, "lime")

// Render a point at x: 20, y: 30
// Point coordinates divided by e_xy part
renderPointPGA({
    e02: -40,
    e01: 60,
    e12: 2
}, "red")`

export const translators = `var p = {
    e02: -40,
    e01: 60,
    e12: 1
}

// Translator that moves by 80 along X.
// Same as exp(d/2 e_0y).
var t = {
    scalar: 1,
    e01: 40
}

var q = pga.sandwichProduct(p, t)

renderPointPGA(p, "lime")
renderPointPGA(q, "red")`

export const motors = `var p = {
    e02: -40,
    e01: 60,
    e12: 1
}

var t = pga.exponential({
    e01: 40
})

var r = pga.exponential({
    // 90°/2; e_yx = -e_xy
    e12: -Math.PI / 4
})

var m = pga.geometricProduct(r, t)

var q = pga.sandwichProduct(p, m)

renderPointPGA(p, "lime")
renderPointPGA(q, "red")`

export const motorsBox = `var t = pga.exponential({
    e01: 40
})

var r = pga.exponential({
    e12: -Math.PI / 8
})

// Translate -80 in X, then rotate 45° CCW
var m = pga.geometricProduct(r, t)

// Identity motor to visualize the initial box
// at the origin
var identity = { scalar: 1 }

renderBoxPGA(identity, "lime")
renderBoxPGA(m, "red")`

export const motorBlendingMotivation = `var a1 = {
    e01: 40,
    e02: 30
}

var a2 = {
    e01: -40,
    e02: -10,
    e12: -Math.PI / 6
}

var m1 = pga.exponential(a1)
var m2 = pga.exponential(a2)

renderBoxPGA(m1, "black")
renderBoxPGA(m2, "red")`

export const motorBlending = `var a1 = {
    e01: 40,
    e02: 30
}

var a2 = {
    e01: -40,
    e02: -10,
    e12: -Math.PI / 6
}

for (var alpha = 0; alpha <= 1; alpha += 0.1) {
    var m = pga.exponential(pga.add(
        pga.geometricProduct(a1, { scalar: 1 - alpha }),
        pga.geometricProduct(a2, { scalar: alpha })
    ))
    var c = "rgb(" + (255 * alpha).toString() + ", 0, 0)"
    renderBoxPGA(m, c)
}`

export const motorBlendingLog = `var m1 = { scalar: 1, e01: 20, e02: 40 }
var m2 = { scalar: 1, e01: -250, e12: -Math.PI * 1.3 }

function motorLog(m) {
    var divisor = Math.sqrt(
        pga.geometricProduct(
            m,
            pga.reversion(m)
        ).scalar
    )
    var allGrades = pga.div(m, divisor)
    return {
        e01: allGrades.e01,
        e02: allGrades.e02,
        e12: allGrades.e12
    }
}

var a1 = motorLog(m1)
var a2 = motorLog(m2)
renderInfo("a1: " + pga.repr(a1))
renderInfo("a2: " + pga.repr(a2))

for (var alpha = 0; alpha <= 1; alpha += 0.1) {
    var m = pga.exponential(pga.add(
        pga.geometricProduct(a1, { scalar: 1 - alpha }),
        pga.geometricProduct(a2, { scalar: alpha })
    ))
    var c = "rgb(" + (255 * alpha).toString() + ", 0, 0)"
    renderBoxPGA(m, c)
}`

export const visualizerExample = `// Render a point at x: 50, y: 10
renderPointPGA({
    e02: -50,
    e01: 10,
    e12: 1
}, "lime")

// Render the line 2x + 1y - 10 = 0
renderLinePGA({
    e0: -10,
    e1: 2,
    e2: 1
}, "orange")`