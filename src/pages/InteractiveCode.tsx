/* eslint-disable no-eval */
import React, { useState, useCallback, useRef, useMemo } from "react"
import styles from "./InteractiveCode.module.css"
import AceEditor from "react-ace"
import "brace/mode/javascript"
import "brace/theme/monokai"
import { SceneView } from "../ga/viz2d"


export type InteractiveCodeProps = {
    style?: React.CSSProperties

    sourceCode: string
    editorStyle?: React.CSSProperties

    hideOutput?: boolean
    outputStyle?: React.CSSProperties

    withVisualizer?: boolean
    visualizerStyle?: React.CSSProperties
}

const formatObject = (obj: any) => {
    return JSON.stringify(obj, null, 4)
}

export function InteractiveCode(props: InteractiveCodeProps) {
    const {
        sourceCode, editorStyle, hideOutput, withVisualizer, visualizerStyle,
        outputStyle, style
    } = props

    // Store the edited code
    const [code, setCode] = useState(sourceCode)

    // Store the result of runs
    const [runResult, setRunResult] = useState("Press run")

    // Run the code.
    const run = useCallback(() => {
        const oldLog = console.log

        const newRunResults: string[] = []

        console.log = (message?: any, ...optionalParams: any[]) => {
            newRunResults.push(
                (message !== undefined ? formatObject(message) + " " : "") +
                optionalParams.map(formatObject).join(" ")
            )
            oldLog(message, ...optionalParams)
        }

        let codeToRun = code;
        const renderTarget = withVisualizer && visualizerRef.current

        // Add helpers when using visualizer
        if (renderTarget) {
            codeToRun = `
                var points = [];
                var lines = [];
                var infos = [];
                var renderPointPGA = (p, color) => points.push({point: p, radius: 4, fill: color});
                var renderLinePGA = (l, color) => lines.push({line: l, width: 2, stroke: color});
                var renderPointGA = (p, color) => renderPointPGA({e02: -p.e0, e01: p.e1, e12: 1}, color);
                var renderInfo = info => infos.push({text: info, fontSize: 4});
            ` + codeToRun + `
                renderScene({ points: points, lines: lines, infos: infos }, document.getElementById("${renderTarget.id}"));
            `
        }

        // Declare log() so we can write shorter code
        codeToRun = "var log = console.log;" + codeToRun

        try {
            eval(codeToRun)
            setRunResult(newRunResults.join("\n"))
        } catch (e) {
            setRunResult(e.toString())
        }

        console.log = oldLog
    }, [code, withVisualizer])

    // Unique id so we can refer to the div element that contains the 
    // svg render target later if we use a visualizer.
    const uniqueId = useMemo(() => {
        return (Math.random().toString(36) + "00000000000000000").slice(2, 18)
    }, [])

    const visualizerRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles["interactive-code"]} style={style}>
            <div style={{ position: "relative", width: "100%" }}>
                <button style={{ border: 0, background: "#505050", color: "#FFFFFF", position: "absolute", right: 10, top: 10, fontSize: 24, zIndex: 10 }} onClick={run}>Run</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch" }}>
                <div style={{ display: "flex", flexDirection: "row", alignContent: "stretch", flexWrap: "wrap" }}>
                    <AceEditor className={withVisualizer ? styles["interactive-code-editor-with-viz"] : styles["interactive-code-editor-without-viz"]}
                        style={{ ...{ width: undefined, height: undefined, border: undefined }, ...editorStyle }}
                        mode="javascript" theme="monokai" value={code} onChange={e => setCode(e)}
                        showPrintMargin={false}
                    />

                    {withVisualizer &&
                        <div id={`#${uniqueId}`} ref={visualizerRef} className={styles["interactive-code-viz"]} style={visualizerStyle}>
                            <SceneView scene={{}} />
                        </div>
                    }
                </div>

                {!hideOutput &&
                    <AceEditor style={{ ...{ width: "100%", height: "200px" }, ...outputStyle }}
                        mode="javascript" theme="monokai" value={runResult} readOnly={true}
                        showPrintMargin={false}
                    />
                }
            </div>
        </div>
    )
}
