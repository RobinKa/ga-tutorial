export type BladeScalar = { scalar: number }
export type BladeE0 = { e0: number }
export type BladeE1 = { e1: number }
export type BladeE01 = { e01: number }

export type Scalar = BladeScalar
export type Vector = BladeE0 & BladeE1
export type BiVector = BladeE01
export type PseudoBiVector = BladeScalar
export type PseudoVector = BladeE0 & BladeE1
export type PseudoScalar = BladeE01
export type Even = BladeScalar & BladeE01
export type Odd = BladeE0 & BladeE1
export type MultiVector = BladeScalar & BladeE0 & BladeE1 & BladeE01

export type OptionalMultiVector = {
    scalar?: number
    e0?: number
    e1?: number
    e01?: number
}

export type AddResultType<A, B> = (
    (A extends BladeScalar ? BladeScalar : {}) &
    (B extends BladeScalar ? BladeScalar : {}) &
    (A extends BladeE0 ? BladeE0 : {}) &
    (B extends BladeE0 ? BladeE0 : {}) &
    (A extends BladeE1 ? BladeE1 : {}) &
    (B extends BladeE1 ? BladeE1 : {}) &
    (A extends BladeE01 ? BladeE01 : {}) &
    (B extends BladeE01 ? BladeE01 : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeE01 : {}) &
    (A extends BladeE0 ? BladeE1 : {}) &
    (A extends BladeE1 ? BladeE0 : {}) &
    (A extends BladeE01 ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
        scalar: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e0: a.e1 !== undefined ? 1.0 * a.e1 : undefined,
        e1: a.e0 !== undefined ? -1.0 * a.e0 : undefined,
        e01: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE01 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE01 ? BladeE1 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE0 ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeE0 : {}) &
        (B extends BladeE01 ? BladeScalar : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e0 !== undefined && b.e0 !== undefined
    const scalar_2 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_3 = a.e01 !== undefined && b.e01 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += 1.0 * (a.e0! * b.e0!)
        if (scalar_2) resultScalar += 1.0 * (a.e1! * b.e1!)
        if (scalar_3) resultScalar += -1.0 * (a.e01! * b.e01!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e01 !== undefined && b.e1 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += -1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += 1.0 * (a.e01! * b.e1!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e0 !== undefined && b.e01 !== undefined
    const e1_2 = a.e1 !== undefined && b.scalar !== undefined
    const e1_3 = a.e01 !== undefined && b.e0 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e0! * b.e01!)
        if (e1_2) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_3) resultE1 += -1.0 * (a.e01! * b.e0!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e0 !== undefined && b.e1 !== undefined
    const e01_2 = a.e1 !== undefined && b.e0 !== undefined
    const e01_3 = a.e01 !== undefined && b.scalar !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE01 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE1 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE0 ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeE0 : {}) &
        (B extends BladeE01 ? BladeScalar : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e0 !== undefined && b.e0 !== undefined
    const scalar_2 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_3 = a.e01 !== undefined && b.e01 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += 1.0 * (a.e0! * b.e0!)
        if (scalar_2) resultScalar += 1.0 * (a.e1! * b.e1!)
        if (scalar_3) resultScalar += -1.0 * (a.e01! * b.e01!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e01 !== undefined && b.e1 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += -1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += 1.0 * (a.e01! * b.e1!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e0 !== undefined && b.e01 !== undefined
    const e1_2 = a.e1 !== undefined && b.scalar !== undefined
    const e1_3 = a.e01 !== undefined && b.e0 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e0! * b.e01!)
        if (e1_2) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_3) resultE1 += -1.0 * (a.e01! * b.e0!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e01 !== undefined && b.scalar !== undefined
    if (e01_0 || e01_1) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE01 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {})
    ) : {})

export const exteriorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): ExteriorProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    if (e0_0 || e0_1) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e1 !== undefined && b.scalar !== undefined
    if (e1_0 || e1_1) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e0 !== undefined && b.e1 !== undefined
    const e01_2 = a.e1 !== undefined && b.e0 !== undefined
    const e01_3 = a.e01 !== undefined && b.scalar !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
        e1: a.e1 !== undefined ? a.e1 * b : undefined,
        e01: a.e01 !== undefined ? a.e01 * b : undefined,
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
        e1: a.e1 !== undefined ? a.e1 / b : undefined,
        e01: a.e01 !== undefined ? a.e01 / b : undefined,
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e01: a.e01 && -a.e01,
    }
    return result as A
}

export const repr = <A extends OptionalMultiVector>(a: A, digits: number = 3): string => {
    let result = ""
    if (a.scalar !== undefined) {
        if (result === "") {
            result += a.scalar.toFixed(digits) + ""
        } else {
            result += a.scalar >= 0 ? " + " + a.scalar.toFixed(digits) + "" : " - " + Math.abs(a.scalar).toFixed(digits) + ""
        }
    }
    if (a.e0 !== undefined) {
        if (result === "") {
            result += a.e0.toFixed(digits) + "e0"
        } else {
            result += a.e0 >= 0 ? " + " + a.e0.toFixed(digits) + "e0" : " - " + Math.abs(a.e0).toFixed(digits) + "e0"
        }
    }
    if (a.e1 !== undefined) {
        if (result === "") {
            result += a.e1.toFixed(digits) + "e1"
        } else {
            result += a.e1 >= 0 ? " + " + a.e1.toFixed(digits) + "e1" : " - " + Math.abs(a.e1).toFixed(digits) + "e1"
        }
    }
    if (a.e01 !== undefined) {
        if (result === "") {
            result += a.e01.toFixed(digits) + "e01"
        } else {
            result += a.e01 >= 0 ? " + " + a.e01.toFixed(digits) + "e01" : " - " + Math.abs(a.e01).toFixed(digits) + "e01"
        }
    }
    return result
}

export const regressiveProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    dual(exteriorProduct(dual(a), dual(b)))

export const sandwichProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    geometricProduct(b, geometricProduct(a, reversion(b)))

export const commutatorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    multiply(sub(geometricProduct(a, b), geometricProduct(b, a)), 0.5)

export const exponential = <A extends OptionalMultiVector>(a: A) => {
    const gp = geometricProduct(a, a) as any
    const s = gp.scalar || 0

    // TODO: Check if non-scalar parts are non-zero

    if (s < 0) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cos(rootS) }, multiply(a, Math.sin(rootS) / rootS))
    } else if (s > 0) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cosh(rootS) }, multiply(a, Math.sinh(rootS) / rootS))
    } else {
        return add({ scalar: 1 }, a)
    }
}