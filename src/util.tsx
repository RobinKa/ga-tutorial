import { useEffect } from "react"

export function useMathJax() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) { MathJax.texReset(); MathJax.typeset(); }")
    }, [])
}

export function ImageWithSub(props: { src: string, text: string, width?: string }) {
    const { src, text, width } = props
    return (
        <div style={{ padding: 20, textAlign: "center" }}>
            <div>
                <img src={src} alt={text} style={{ width: width ?? "100%" }} />
            </div>
            <sub>{text}</sub>
        </div>
    )
}