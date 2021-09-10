import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function ImageWithSub(props: { src: string, text: string, width?: string }) {
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

export function SRIntro() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Special Relativity with Geometric Algebra - Introduction</h3>
            <h4>What is Special Relativity?</h4>
            <div>
                Special Relativity published by Albert Einstein in 1905 makes clearer the relation between time and space in physics.
                It does this by unifying them and introducing two postulates:
            </div>
            <h5>Postulate 1</h5>
            <code>
                The laws of physics are the same in all inertial reference frames.
            </code>
            <div>
                What this means is that for observers moving we can write down laws of physics that are true for all of them
                regardless of their speed. The restriction to only inertial reference frames means that the acceleration for the
                observers needs to be zero. The more general case with accelerated reference frames is treated in Einstein's General Relativity.
            </div>
            <h5>Postulate 2</h5>
            <code>
                The speed of light (in vacuum) is the same for all observers.
            </code>
            <div>
                Meaning, no matter the motion of the observer, light will always move at the speed of light.
            </div>
            <div>
                These postulates might seem trivial for now (everybody knows that light always moves at the speed of light right?), but we will see that
                that they have huge consequences. If you are already familiar with Special Relativity, you will probably also see that the treatment
                with Geometric Algebra simplifies a lot of things.
            </div>
            <ImageWithSub src="/images/sr-einstein.png" text="Albert Einstein and some formulas derived from the postulates of Special Relativity" width="70%" />
            <h5>References</h5>
            <b>Geometric Algebra</b>
            <div>
                This series assumes you already know the basics of Geometric Algebra and rotors. There are a couple of articles about that on this website but there are also fantastic
                introductions on YouTube:
                <ul>
                    <li><a href="https://youtu.be/60z_hpEAtD8">A Swift Introduction to Geometric Algebra</a> by Sudgy who is also working on a complete Geometric Algebra series</li>
                    <li><a href="https://www.youtube.com/watch?v=PNlgMPzj-7Q&amp;list=PLpzmRsG7u_gqaTo_vEseQ7U8KFvtiJY4K">Geometric Algebra playlist</a> by Mathoma</li>
                    <li><a href="https://youtu.be/Idlv83CxP-8">Let's remove Quaternions from every 3D Engine: Intro to Rotors from Geometric Algebra</a> by Marc ten Bosch (with <a href="https://marctenbosch.com/quaternions/">accompanying article</a>)</li>
                    <li>Various videos on the <a href="https://www.youtube.com/user/EnkiOrigami">Bivector channel</a></li>
                </ul>
            </div>
            <div>
                There are also various books that cater to different audiences, to name a few:
                <ul>
                    <li><a href="https://geometricalgebra.org/">Geometric Algebra for Computer Science</a> by Leo Dorst</li>
                    <li><a href="https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091">Geometric Algebra for Physicists</a> by Anthony Lasenby and Chris Doran: Mostly assumes knowledge of physics in the ordinary formalism and introduces them with GA, covers a lot of topics and even General Relativity. I used this book a lot to learn about Special Relatiivty (and other topics).</li>
                    <li><a href="http://peeterjoot.com/writing/geometric-algebra-for-electrical-engineers/">Geometric Algebra for Electrical Engineers</a> by Peeter Joot: What I like about this one is that it does not contain much "noise", just straight usefulness</li>
                    <li><a href="http://www.faculty.luther.edu/~macdonal/laga/index.html">Linear and Geometric Algebra</a> by Alan Macdonald</li>
                </ul>
            </div>
            <div>
                The website <a href="https://bivector.net/">bivector.net</a> also contains links to more resources as well as our community discord. Feel free to join and ask questions!
            </div>
            <b>Special Relativity</b>
            <div>
                There are many excellent videos on YouTube about Special Relativity, for example <a href="https://www.youtube.com/watch?v=FdWMM6aXpYE">The Science Asylum's video</a> great.
                Leonard Susskind has a recorded lecture series about Special Relativity <a href="https://www.youtube.com/watch?v=toGH5BdgRZ4&amp;list=PLD9DDFBDC338226CA">here</a>. His lectures are always amazing.
                For books I can only recommend "Geometric Algebra for Physicists" mentioned above. I haven't looked into any specific non-GA books about Special Relativity.
            </div>
            <h4><Link to="/sr-spacetime-algebra">Special Relativity with Geometric Algebra - Spacetime Algebra</Link></h4>
        </div >
    )
}