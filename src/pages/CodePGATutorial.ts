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

export const motorBlending = `var p = {
    e02: -40,
    e01: -30,
    e12: 1
}

var a1 = {
    e02: 20,
    e12: -Math.PI
}

var a2 = {
    e01: -20,
    e02: 50,
    e12: -Math.PI / 2
}

for (var alpha = 0; alpha <= 1; alpha += 0.1) {
    var m = pga.exponential(pga.add(
        pga.geometricProduct(a1, { scalar: 1 - alpha }),
        pga.geometricProduct(a2, { scalar: alpha })
    ))
    var q = pga.sandwichProduct(p, m)
    var c = "rgb(" + (255 * alpha).toString() + ", 0, 0)"
    renderPointPGA(q, c)
}

renderPointPGA(p, "lime")`

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