export type BladeScalar = { scalar: number }
export type BladeE0 = { e0: number }
export type BladeE1 = { e1: number }
export type BladeE2 = { e2: number }
export type BladeE01 = { e01: number }
export type BladeE02 = { e02: number }
export type BladeE12 = { e12: number }
export type BladeE012 = { e012: number }

export type Scalar = BladeScalar
export type Vector = BladeE0 & BladeE1 & BladeE2
export type BiVector = BladeE01 & BladeE02 & BladeE12
export type TriVector = BladeE012
export type PseudoTriVector = BladeScalar
export type PseudoBiVector = BladeE0 & BladeE1 & BladeE2
export type PseudoVector = BladeE01 & BladeE02 & BladeE12
export type PseudoScalar = BladeE012
export type Even = BladeScalar & BladeE01 & BladeE02 & BladeE12
export type Odd = BladeE0 & BladeE1 & BladeE2 & BladeE012
export type MultiVector = BladeScalar & BladeE0 & BladeE1 & BladeE2 & BladeE01 & BladeE02 & BladeE12 & BladeE012

export type OptionalMultiVector = {
    scalar?: number
    e0?: number
    e1?: number
    e2?: number
    e01?: number
    e02?: number
    e12?: number
    e012?: number
}

export type AddResultType<A, B> = (
    (A extends BladeScalar ? BladeScalar : {}) &
    (B extends BladeScalar ? BladeScalar : {}) &
    (A extends BladeE0 ? BladeE0 : {}) &
    (B extends BladeE0 ? BladeE0 : {}) &
    (A extends BladeE1 ? BladeE1 : {}) &
    (B extends BladeE1 ? BladeE1 : {}) &
    (A extends BladeE2 ? BladeE2 : {}) &
    (B extends BladeE2 ? BladeE2 : {}) &
    (A extends BladeE01 ? BladeE01 : {}) &
    (B extends BladeE01 ? BladeE01 : {}) &
    (A extends BladeE02 ? BladeE02 : {}) &
    (B extends BladeE02 ? BladeE02 : {}) &
    (A extends BladeE12 ? BladeE12 : {}) &
    (B extends BladeE12 ? BladeE12 : {}) &
    (A extends BladeE012 ? BladeE012 : {}) &
    (B extends BladeE012 ? BladeE012 : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) + (b.e2 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) + (b.e02 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) + (b.e12 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) + (b.e012 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) - (b.e2 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) - (b.e02 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) - (b.e12 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) - (b.e012 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeE012 : {}) &
    (A extends BladeE0 ? BladeE12 : {}) &
    (A extends BladeE1 ? BladeE02 : {}) &
    (A extends BladeE2 ? BladeE01 : {}) &
    (A extends BladeE01 ? BladeE2 : {}) &
    (A extends BladeE02 ? BladeE1 : {}) &
    (A extends BladeE12 ? BladeE0 : {}) &
    (A extends BladeE012 ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
        scalar: a.e012 !== undefined ? 1.0 * a.e012 : undefined,
        e0: a.e12 !== undefined ? 1.0 * a.e12 : undefined,
        e1: a.e02 !== undefined ? -1.0 * a.e02 : undefined,
        e2: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e01: a.e2 !== undefined ? 1.0 * a.e2 : undefined,
        e02: a.e1 !== undefined ? -1.0 * a.e1 : undefined,
        e12: a.e0 !== undefined ? 1.0 * a.e0 : undefined,
        e012: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE01 ? BladeE1 : {}) &
        (B extends BladeE02 ? BladeE2 : {}) &
        (B extends BladeE12 ? BladeE012 : {}) &
        (B extends BladeE012 ? BladeE12 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE01 ? BladeE0 : {}) &
        (B extends BladeE02 ? BladeE012 : {}) &
        (B extends BladeE12 ? BladeE2 : {}) &
        (B extends BladeE012 ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE2 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE012 : {}) &
        (B extends BladeE02 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE1 : {}) &
        (B extends BladeE012 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE0 ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeE0 : {}) &
        (B extends BladeE2 ? BladeE012 : {}) &
        (B extends BladeE01 ? BladeScalar : {}) &
        (B extends BladeE02 ? BladeE12 : {}) &
        (B extends BladeE12 ? BladeE02 : {}) &
        (B extends BladeE012 ? BladeE2 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE0 ? BladeE2 : {}) &
        (B extends BladeE1 ? BladeE012 : {}) &
        (B extends BladeE2 ? BladeE0 : {}) &
        (B extends BladeE01 ? BladeE12 : {}) &
        (B extends BladeE02 ? BladeScalar : {}) &
        (B extends BladeE12 ? BladeE01 : {}) &
        (B extends BladeE012 ? BladeE1 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {}) &
        (B extends BladeE1 ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeE1 : {}) &
        (B extends BladeE01 ? BladeE02 : {}) &
        (B extends BladeE02 ? BladeE01 : {}) &
        (B extends BladeE12 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {}) &
        (B extends BladeE0 ? BladeE12 : {}) &
        (B extends BladeE1 ? BladeE02 : {}) &
        (B extends BladeE2 ? BladeE01 : {}) &
        (B extends BladeE01 ? BladeE2 : {}) &
        (B extends BladeE02 ? BladeE1 : {}) &
        (B extends BladeE12 ? BladeE0 : {}) &
        (B extends BladeE012 ? BladeScalar : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e0 !== undefined && b.e0 !== undefined
    const scalar_2 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_3 = a.e2 !== undefined && b.e2 !== undefined
    const scalar_4 = a.e01 !== undefined && b.e01 !== undefined
    const scalar_5 = a.e02 !== undefined && b.e02 !== undefined
    const scalar_6 = a.e12 !== undefined && b.e12 !== undefined
    const scalar_7 = a.e012 !== undefined && b.e012 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3 || scalar_4 || scalar_5 || scalar_6 || scalar_7) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += 1.0 * (a.e0! * b.e0!)
        if (scalar_2) resultScalar += 1.0 * (a.e1! * b.e1!)
        if (scalar_3) resultScalar += 1.0 * (a.e2! * b.e2!)
        if (scalar_4) resultScalar += -1.0 * (a.e01! * b.e01!)
        if (scalar_5) resultScalar += -1.0 * (a.e02! * b.e02!)
        if (scalar_6) resultScalar += -1.0 * (a.e12! * b.e12!)
        if (scalar_7) resultScalar += -1.0 * (a.e012! * b.e012!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e2 !== undefined && b.e02 !== undefined
    const e0_4 = a.e01 !== undefined && b.e1 !== undefined
    const e0_5 = a.e02 !== undefined && b.e2 !== undefined
    const e0_6 = a.e12 !== undefined && b.e012 !== undefined
    const e0_7 = a.e012 !== undefined && b.e12 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += -1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += -1.0 * (a.e2! * b.e02!)
        if (e0_4) resultE0 += 1.0 * (a.e01! * b.e1!)
        if (e0_5) resultE0 += 1.0 * (a.e02! * b.e2!)
        if (e0_6) resultE0 += -1.0 * (a.e12! * b.e012!)
        if (e0_7) resultE0 += -1.0 * (a.e012! * b.e12!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e0 !== undefined && b.e01 !== undefined
    const e1_2 = a.e1 !== undefined && b.scalar !== undefined
    const e1_3 = a.e2 !== undefined && b.e12 !== undefined
    const e1_4 = a.e01 !== undefined && b.e0 !== undefined
    const e1_5 = a.e02 !== undefined && b.e012 !== undefined
    const e1_6 = a.e12 !== undefined && b.e2 !== undefined
    const e1_7 = a.e012 !== undefined && b.e02 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e0! * b.e01!)
        if (e1_2) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_3) resultE1 += -1.0 * (a.e2! * b.e12!)
        if (e1_4) resultE1 += -1.0 * (a.e01! * b.e0!)
        if (e1_5) resultE1 += 1.0 * (a.e02! * b.e012!)
        if (e1_6) resultE1 += 1.0 * (a.e12! * b.e2!)
        if (e1_7) resultE1 += 1.0 * (a.e012! * b.e02!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e0 !== undefined && b.e02 !== undefined
    const e2_2 = a.e1 !== undefined && b.e12 !== undefined
    const e2_3 = a.e2 !== undefined && b.scalar !== undefined
    const e2_4 = a.e01 !== undefined && b.e012 !== undefined
    const e2_5 = a.e02 !== undefined && b.e0 !== undefined
    const e2_6 = a.e12 !== undefined && b.e1 !== undefined
    const e2_7 = a.e012 !== undefined && b.e01 !== undefined
    if (e2_0 || e2_1 || e2_2 || e2_3 || e2_4 || e2_5 || e2_6 || e2_7) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e0! * b.e02!)
        if (e2_2) resultE2 += 1.0 * (a.e1! * b.e12!)
        if (e2_3) resultE2 += 1.0 * (a.e2! * b.scalar!)
        if (e2_4) resultE2 += -1.0 * (a.e01! * b.e012!)
        if (e2_5) resultE2 += -1.0 * (a.e02! * b.e0!)
        if (e2_6) resultE2 += -1.0 * (a.e12! * b.e1!)
        if (e2_7) resultE2 += -1.0 * (a.e012! * b.e01!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e0 !== undefined && b.e1 !== undefined
    const e01_2 = a.e1 !== undefined && b.e0 !== undefined
    const e01_3 = a.e2 !== undefined && b.e012 !== undefined
    const e01_4 = a.e01 !== undefined && b.scalar !== undefined
    const e01_5 = a.e02 !== undefined && b.e12 !== undefined
    const e01_6 = a.e12 !== undefined && b.e02 !== undefined
    const e01_7 = a.e012 !== undefined && b.e2 !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e2! * b.e012!)
        if (e01_4) resultE01 += 1.0 * (a.e01! * b.scalar!)
        if (e01_5) resultE01 += -1.0 * (a.e02! * b.e12!)
        if (e01_6) resultE01 += 1.0 * (a.e12! * b.e02!)
        if (e01_7) resultE01 += 1.0 * (a.e012! * b.e2!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e0 !== undefined && b.e2 !== undefined
    const e02_2 = a.e1 !== undefined && b.e012 !== undefined
    const e02_3 = a.e2 !== undefined && b.e0 !== undefined
    const e02_4 = a.e01 !== undefined && b.e12 !== undefined
    const e02_5 = a.e02 !== undefined && b.scalar !== undefined
    const e02_6 = a.e12 !== undefined && b.e01 !== undefined
    const e02_7 = a.e012 !== undefined && b.e1 !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3 || e02_4 || e02_5 || e02_6 || e02_7) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += -1.0 * (a.e1! * b.e012!)
        if (e02_3) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_4) resultE02 += 1.0 * (a.e01! * b.e12!)
        if (e02_5) resultE02 += 1.0 * (a.e02! * b.scalar!)
        if (e02_6) resultE02 += -1.0 * (a.e12! * b.e01!)
        if (e02_7) resultE02 += -1.0 * (a.e012! * b.e1!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e0 !== undefined && b.e012 !== undefined
    const e12_2 = a.e1 !== undefined && b.e2 !== undefined
    const e12_3 = a.e2 !== undefined && b.e1 !== undefined
    const e12_4 = a.e01 !== undefined && b.e02 !== undefined
    const e12_5 = a.e02 !== undefined && b.e01 !== undefined
    const e12_6 = a.e12 !== undefined && b.scalar !== undefined
    const e12_7 = a.e012 !== undefined && b.e0 !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3 || e12_4 || e12_5 || e12_6 || e12_7) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e0! * b.e012!)
        if (e12_2) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_3) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_4) resultE12 += -1.0 * (a.e01! * b.e02!)
        if (e12_5) resultE12 += 1.0 * (a.e02! * b.e01!)
        if (e12_6) resultE12 += 1.0 * (a.e12! * b.scalar!)
        if (e12_7) resultE12 += 1.0 * (a.e012! * b.e0!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e0 !== undefined && b.e12 !== undefined
    const e012_2 = a.e1 !== undefined && b.e02 !== undefined
    const e012_3 = a.e2 !== undefined && b.e01 !== undefined
    const e012_4 = a.e01 !== undefined && b.e2 !== undefined
    const e012_5 = a.e02 !== undefined && b.e1 !== undefined
    const e012_6 = a.e12 !== undefined && b.e0 !== undefined
    const e012_7 = a.e012 !== undefined && b.scalar !== undefined
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_5) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_6) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_7) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE1 : {}) &
        (B extends BladeE02 ? BladeE2 : {}) &
        (B extends BladeE012 ? BladeE12 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE2 : {}) &
        (B extends BladeE012 ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeScalar : {}) &
        (B extends BladeE02 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE1 : {}) &
        (B extends BladeE012 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE0 ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeE0 : {}) &
        (B extends BladeE01 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE2 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE0 ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeE0 : {}) &
        (B extends BladeE02 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE1 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE1 ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeE1 : {}) &
        (B extends BladeE12 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {}) &
        (B extends BladeE0 ? BladeE12 : {}) &
        (B extends BladeE1 ? BladeE02 : {}) &
        (B extends BladeE2 ? BladeE01 : {}) &
        (B extends BladeE01 ? BladeE2 : {}) &
        (B extends BladeE02 ? BladeE1 : {}) &
        (B extends BladeE12 ? BladeE0 : {}) &
        (B extends BladeE012 ? BladeScalar : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e0 !== undefined && b.e0 !== undefined
    const scalar_2 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_3 = a.e2 !== undefined && b.e2 !== undefined
    const scalar_4 = a.e01 !== undefined && b.e01 !== undefined
    const scalar_5 = a.e02 !== undefined && b.e02 !== undefined
    const scalar_6 = a.e12 !== undefined && b.e12 !== undefined
    const scalar_7 = a.e012 !== undefined && b.e012 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3 || scalar_4 || scalar_5 || scalar_6 || scalar_7) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += 1.0 * (a.e0! * b.e0!)
        if (scalar_2) resultScalar += 1.0 * (a.e1! * b.e1!)
        if (scalar_3) resultScalar += 1.0 * (a.e2! * b.e2!)
        if (scalar_4) resultScalar += -1.0 * (a.e01! * b.e01!)
        if (scalar_5) resultScalar += -1.0 * (a.e02! * b.e02!)
        if (scalar_6) resultScalar += -1.0 * (a.e12! * b.e12!)
        if (scalar_7) resultScalar += -1.0 * (a.e012! * b.e012!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e2 !== undefined && b.e02 !== undefined
    const e0_4 = a.e01 !== undefined && b.e1 !== undefined
    const e0_5 = a.e02 !== undefined && b.e2 !== undefined
    const e0_6 = a.e12 !== undefined && b.e012 !== undefined
    const e0_7 = a.e012 !== undefined && b.e12 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += -1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += -1.0 * (a.e2! * b.e02!)
        if (e0_4) resultE0 += 1.0 * (a.e01! * b.e1!)
        if (e0_5) resultE0 += 1.0 * (a.e02! * b.e2!)
        if (e0_6) resultE0 += -1.0 * (a.e12! * b.e012!)
        if (e0_7) resultE0 += -1.0 * (a.e012! * b.e12!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e0 !== undefined && b.e01 !== undefined
    const e1_2 = a.e1 !== undefined && b.scalar !== undefined
    const e1_3 = a.e2 !== undefined && b.e12 !== undefined
    const e1_4 = a.e01 !== undefined && b.e0 !== undefined
    const e1_5 = a.e02 !== undefined && b.e012 !== undefined
    const e1_6 = a.e12 !== undefined && b.e2 !== undefined
    const e1_7 = a.e012 !== undefined && b.e02 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e0! * b.e01!)
        if (e1_2) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_3) resultE1 += -1.0 * (a.e2! * b.e12!)
        if (e1_4) resultE1 += -1.0 * (a.e01! * b.e0!)
        if (e1_5) resultE1 += 1.0 * (a.e02! * b.e012!)
        if (e1_6) resultE1 += 1.0 * (a.e12! * b.e2!)
        if (e1_7) resultE1 += 1.0 * (a.e012! * b.e02!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e0 !== undefined && b.e02 !== undefined
    const e2_2 = a.e1 !== undefined && b.e12 !== undefined
    const e2_3 = a.e2 !== undefined && b.scalar !== undefined
    const e2_4 = a.e01 !== undefined && b.e012 !== undefined
    const e2_5 = a.e02 !== undefined && b.e0 !== undefined
    const e2_6 = a.e12 !== undefined && b.e1 !== undefined
    const e2_7 = a.e012 !== undefined && b.e01 !== undefined
    if (e2_0 || e2_1 || e2_2 || e2_3 || e2_4 || e2_5 || e2_6 || e2_7) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e0! * b.e02!)
        if (e2_2) resultE2 += 1.0 * (a.e1! * b.e12!)
        if (e2_3) resultE2 += 1.0 * (a.e2! * b.scalar!)
        if (e2_4) resultE2 += -1.0 * (a.e01! * b.e012!)
        if (e2_5) resultE2 += -1.0 * (a.e02! * b.e0!)
        if (e2_6) resultE2 += -1.0 * (a.e12! * b.e1!)
        if (e2_7) resultE2 += -1.0 * (a.e012! * b.e01!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e2 !== undefined && b.e012 !== undefined
    const e01_2 = a.e01 !== undefined && b.scalar !== undefined
    const e01_3 = a.e012 !== undefined && b.e2 !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e2! * b.e012!)
        if (e01_2) resultE01 += 1.0 * (a.e01! * b.scalar!)
        if (e01_3) resultE01 += 1.0 * (a.e012! * b.e2!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e1 !== undefined && b.e012 !== undefined
    const e02_2 = a.e02 !== undefined && b.scalar !== undefined
    const e02_3 = a.e012 !== undefined && b.e1 !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += -1.0 * (a.e1! * b.e012!)
        if (e02_2) resultE02 += 1.0 * (a.e02! * b.scalar!)
        if (e02_3) resultE02 += -1.0 * (a.e012! * b.e1!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e0 !== undefined && b.e012 !== undefined
    const e12_2 = a.e12 !== undefined && b.scalar !== undefined
    const e12_3 = a.e012 !== undefined && b.e0 !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e0! * b.e012!)
        if (e12_2) resultE12 += 1.0 * (a.e12! * b.scalar!)
        if (e12_3) resultE12 += 1.0 * (a.e012! * b.e0!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e012 !== undefined && b.scalar !== undefined
    if (e012_0 || e012_1) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE02 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE01 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {})
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
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e2 !== undefined && b.scalar !== undefined
    if (e2_0 || e2_1) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e2! * b.scalar!)
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
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e0 !== undefined && b.e2 !== undefined
    const e02_2 = a.e2 !== undefined && b.e0 !== undefined
    const e02_3 = a.e02 !== undefined && b.scalar !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_3) resultE02 += 1.0 * (a.e02! * b.scalar!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e1 !== undefined && b.e2 !== undefined
    const e12_2 = a.e2 !== undefined && b.e1 !== undefined
    const e12_3 = a.e12 !== undefined && b.scalar !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_2) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_3) resultE12 += 1.0 * (a.e12! * b.scalar!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e0 !== undefined && b.e12 !== undefined
    const e012_2 = a.e1 !== undefined && b.e02 !== undefined
    const e012_3 = a.e2 !== undefined && b.e01 !== undefined
    const e012_4 = a.e01 !== undefined && b.e2 !== undefined
    const e012_5 = a.e02 !== undefined && b.e1 !== undefined
    const e012_6 = a.e12 !== undefined && b.e0 !== undefined
    const e012_7 = a.e012 !== undefined && b.scalar !== undefined
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_5) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_6) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_7) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
        e1: a.e1 !== undefined ? a.e1 * b : undefined,
        e2: a.e2 !== undefined ? a.e2 * b : undefined,
        e01: a.e01 !== undefined ? a.e01 * b : undefined,
        e02: a.e02 !== undefined ? a.e02 * b : undefined,
        e12: a.e12 !== undefined ? a.e12 * b : undefined,
        e012: a.e012 !== undefined ? a.e012 * b : undefined,
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
        e1: a.e1 !== undefined ? a.e1 / b : undefined,
        e2: a.e2 !== undefined ? a.e2 / b : undefined,
        e01: a.e01 !== undefined ? a.e01 / b : undefined,
        e02: a.e02 !== undefined ? a.e02 / b : undefined,
        e12: a.e12 !== undefined ? a.e12 / b : undefined,
        e012: a.e012 !== undefined ? a.e012 / b : undefined,
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e2: a.e2 && a.e2,
        e01: a.e01 && -a.e01,
        e02: a.e02 && -a.e02,
        e12: a.e12 && -a.e12,
        e012: a.e012 && -a.e012,
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
    if (a.e2 !== undefined) {
        if (result === "") {
            result += a.e2.toFixed(digits) + "e2"
        } else {
            result += a.e2 >= 0 ? " + " + a.e2.toFixed(digits) + "e2" : " - " + Math.abs(a.e2).toFixed(digits) + "e2"
        }
    }
    if (a.e01 !== undefined) {
        if (result === "") {
            result += a.e01.toFixed(digits) + "e01"
        } else {
            result += a.e01 >= 0 ? " + " + a.e01.toFixed(digits) + "e01" : " - " + Math.abs(a.e01).toFixed(digits) + "e01"
        }
    }
    if (a.e02 !== undefined) {
        if (result === "") {
            result += a.e02.toFixed(digits) + "e02"
        } else {
            result += a.e02 >= 0 ? " + " + a.e02.toFixed(digits) + "e02" : " - " + Math.abs(a.e02).toFixed(digits) + "e02"
        }
    }
    if (a.e12 !== undefined) {
        if (result === "") {
            result += a.e12.toFixed(digits) + "e12"
        } else {
            result += a.e12 >= 0 ? " + " + a.e12.toFixed(digits) + "e12" : " - " + Math.abs(a.e12).toFixed(digits) + "e12"
        }
    }
    if (a.e012 !== undefined) {
        if (result === "") {
            result += a.e012.toFixed(digits) + "e012"
        } else {
            result += a.e012 >= 0 ? " + " + a.e012.toFixed(digits) + "e012" : " - " + Math.abs(a.e012).toFixed(digits) + "e012"
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
    if (gp.scalar === undefined) {
        throw new Error("Input to exponential needs to square to scalar")
    }
    const s = gp.scalar as number

    if (s < -0.1) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cos(rootS) }, multiply(a, Math.sin(rootS) / rootS))
    } else if (s > 0.1) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cosh(rootS) }, multiply(a, Math.sinh(rootS) / rootS))
    } else {
        return add({ scalar: 1 }, a)
    }
}