import React, { useCallback, useState, useEffect, useMemo } from "react"
import * as pga from "./ga_zpp"


export const pointCoordinates = (a: pga.BiVector): [number, number] => {
    const magInv = 1 / a.e12
    return [-a.e02 * magInv, a.e01 * magInv]
}

export type PointElementPGA2DProps = {
    point: pga.BiVector
    radius?: number
    fill?: string
    label?: string
    trailCount?: number
    trailStroke?: string
}

const getPolyLinePoints = (points: [number, number][]): string =>
    points.flat().join(" ")


export function PointElementPGA2D(props: PointElementPGA2DProps) {
    const { point, radius, fill, label, trailCount, trailStroke } = props

    const x = -point.e02 / point.e12
    const y = point.e01 / point.e12

    const [trail, setTrail] = useState<[number, number][]>([])

    const trailPolyPoints = useMemo(() => getPolyLinePoints(trail), [trail])

    const updateTrail = useCallback(() => {
        if (trailCount) {
            if (trail.length === 0 || (trail[trail.length - 1][0] !== x || trail[trail.length - 1][1] !== y)) {
                let newTrail = [...trail]
                if (newTrail.length > trailCount) {
                    newTrail = newTrail.slice(1)
                }
                newTrail.push([x, y])
                setTrail(newTrail)
            }
        } else {
            setTrail([])
        }
    }, [x, y, trail, trailCount])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(updateTrail, [x, y])

    return (
        <g>
            <title>{pga.repr(point)}</title>
            {trail.length > 0 &&
                <polyline fill="none" stroke={trailStroke || "#F37121"}
                    strokeWidth={0.5 * (radius || 1)}
                    points={trailPolyPoints} />
            }

            <circle cx={x} cy={-y} r={radius || 1} fill={fill || "#F37121"} stroke="white" />

            {label &&
                <text x={x} y={-y} dominantBaseline="middle"
                    fontWeight="800"
                    textAnchor="middle" fontSize={radius || 1}>
                    {label}
                </text>
            }
        </g>
    )
}

export type LineElementPGA2DProps = {
    line: pga.Vector
    width?: number
    stroke?: string
    label?: string
}

export function LineElementPGA2D(props: LineElementPGA2DProps) {
    let { line, width, stroke, label } = props

    const lineCoords = useMemo(() => {
        if (Math.abs(line.e2) > Math.abs(line.e1)) {
            const startX = -100
            const endX = 100
            const startY = -(line.e1 * startX + line.e0) / line.e2
            const endY = -(line.e1 * endX + line.e0) / line.e2
            return [startX, startY, endX, endY]
        } else {
            const startY = -100
            const endY = 100
            const startX = -(line.e2 * startY + line.e0) / line.e1
            const endX = -(line.e2 * endY + line.e0) / line.e1
            return [startX, startY, endX, endY]
        }
    }, [line])

    return (
        <g>
            <title>{pga.repr(line)}</title>
            <line x1={lineCoords[0]} y1={-lineCoords[1]} x2={lineCoords[2]} y2={-lineCoords[3]}
                strokeWidth={width || 1} stroke={stroke || "#F37121"} />

            {label &&
                <text x={(lineCoords[0] + lineCoords[2]) / 2} y={-0.5 * (lineCoords[1] + lineCoords[3])}
                    dominantBaseline="middle" fontWeight="800"
                    textAnchor="middle" fontSize={1}>
                    {label}
                </text>
            }
        </g>
    )
}

export type InfoElementProps = {
    text: string
    fontSize?: number
    color?: string
}

export type Scene = {
    points?: PointElementPGA2DProps[]
    lines?: LineElementPGA2DProps[]
    infos?: InfoElementProps[]
}

export type SceneViewProps = {
    scene: Scene
    style?: React.CSSProperties
}

function SVGGrid() {
    const rows: number[] = []
    const cols: number[] = []
    for (let i = -10; i <= 10; i++) {
        rows.push(i)
        cols.push(i)
    }

    const getThickness = useCallback((index: number) => {
        if (index === 0) {
            return 1
        } else if (index % 5 === 0) {
            return 0.5
        }

        return 0.25
    }, [])

    return (
        <g>
            <g>
                {cols.map(x =>
                    <g key={x}>
                        <line x1={x * 10} x2={x * 10} y1={100} y2={-100} stroke="#CCCCCC" strokeWidth={getThickness(x)} />
                        {x % 2 === 0 && x !== 0 && (
                            <text x={10 * x} y={-2} fill="white" fontSize={5} textAnchor="middle">
                                {`${(10 * x).toFixed(0)}`}
                            </text>
                        )}
                    </g>
                )}
            </g>

            <g>
                {rows.map(y =>
                    <g key={y}>
                        <line x1={-100} x2={100} y1={-y * 10} y2={-y * 10} stroke="#CCCCCC" strokeWidth={getThickness(y)} />
                        {(y % 2 === 0) && (
                            <text x={5} y={-(10 * y + 2)} fill="white" fontSize={5} textAnchor="middle">
                                {`${(10 * y).toFixed(0)}`}
                            </text>
                        )}
                    </g>
                )}
            </g>
        </g>
    )
}

export function SceneView(props: SceneViewProps) {
    const { scene, style } = props

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMin slice" style={style}>
            <rect fill="#111D6E" width="100%" height="100%" />

            <g transform="translate(50, 50) scale(0.5)">
                <SVGGrid />

                {scene.lines && scene.lines.map((l, i) =>
                    <LineElementPGA2D {...l} key={i} />
                )}

                {scene.points && scene.points.map((p, i) =>
                    <PointElementPGA2D {...p} key={i} />
                )}
            </g>

            {scene.infos && scene.infos.map((info, i) => {
                return (
                    <text key={i} fontWeight="100" x={1} y={5 + 5 * i} fontSize={info.fontSize || 1} fill={info.color || "white"}>
                        {info.text}
                    </text>
                )
            })}
        </svg>
    )
}