import React, { useEffect, useMemo } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom"
import './App.css'
import { InteractiveCode } from "./InteractiveCode"
import * as ga from "./ga/ga_pp"
import * as pga from "./ga/ga_zpp"
import * as viz from "./ga/viz2d"
import * as cnt from "./content"

const pathToBreadcrumbs = (path: string) => {
    const pathNames = ["Geometric Algebra"]
    const pathUrls = ["/"]

    let pathSplit = path.substr(1).split("/")

    while (pathSplit.length > 0) {
        pathNames.push(pathSplit[0])
        pathUrls.push(`${pathUrls[pathUrls.length - 1]}/${pathSplit[0]}`)
        pathSplit.splice(0, 1)
    }

    return pathNames.map((name, i) => {
        return { name: name, url: pathUrls[i] }
    })
}

function GATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Geometric Algebra Basics</h3>
            <div>{cnt.textA}</div>
            <div>{cnt.textA2}</div>

            <InteractiveCode sourceCode={cnt.codeA2}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textA3}</div>
            <InteractiveCode sourceCode={cnt.codeA3} />

            <div>{cnt.textB}</div>
            <div>{cnt.textB2}</div>
            <InteractiveCode sourceCode={cnt.codeB} />

            <div>{cnt.textC}</div>
            <InteractiveCode sourceCode={cnt.codeC} />

            <div>{cnt.textD}</div>
            <InteractiveCode sourceCode={cnt.codeD} />

            <div>{cnt.textE}</div>

            <h3>Using GA to perform 2D rotations</h3>
            <div>{cnt.textF}</div>
            <InteractiveCode sourceCode={cnt.codeF}
                hideOutput={true} withVisualizer={true}
            />

            <div>{cnt.textG}</div>

            <h4><Link to="/pga">2. Projective Geometric Algebra</Link></h4>
        </div>
    )
}

function PGATutorial() {
    // Need to retrigger equation typesetting as it's only done once on startup
    useEffect(() => {
        // eslint-disable-next-line no-eval
        eval("if (MathJax && MathJax.typeset) MathJax.typeset();")
    }, [])

    return (
        <div>
            <h3>Points and Lines</h3>
            <InteractiveCode sourceCode={cnt.visualizerExample}
                hideOutput={true} withVisualizer={true} />
        </div>
    )
}

function TutorialIndex() {
    return (
        <div>
            <h3>Index</h3>
            <div>
                This tutorial tries to teach Geometric Algebra (GA) in an interactive way with runnable code and visualizations.
                It is not meant to be an entirely bottom-up way where we try to derive every single result.
                Instead the focus is on trying to create an understanding for GA and gradually introduce new things while
                directly applying the learnt concepts.
            </div>
            <h4>Sections</h4>
            <ol>
                <li><Link to="/ga-basics">Geometric Algebra Basics</Link></li>
                <li><Link to="/pga">Projective Geometric Algebra</Link></li>
            </ol>
        </div>
    )
}

function TutorialSite() {
    const location = useLocation()

    const breadcrumbs = useMemo(() => {
        const crumbs = pathToBreadcrumbs(location.pathname)

        return crumbs
            .map(c => <a href={c.url}>{c.name}</a>)
            .reduce((l, r) => <> {l} &gt; {r}  </>)
    }, [location])

    return (
        <>
            <div className="demo-container mdl-grid">
                <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                <div
                    className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                    <div className="demo-crumbs mdl-color-text--grey-500">
                        {breadcrumbs}
                    </div>
                    <Switch>
                        <Route path="/ga-basics">
                            <GATutorial />
                        </Route>
                        <Route path="/pga">
                            <PGATutorial />
                        </Route>
                        <Route path="/">
                            <TutorialIndex />
                        </Route>
                    </Switch>
                </div>
            </div>
            <footer className="demo-footer mdl-mini-footer">
                <div className="mdl-mini-footer--left-section">
                    <ul className="mdl-mini-footer--link-list">
                    </ul>
                </div>
            </footer>
        </>
    )
}

function App() {
    useEffect(() => {
        // Set variables on window so we can use it in interactive code
        const wnd = window as any
        wnd.ga = ga
        wnd.pga = pga
        wnd.viz = viz
        wnd.renderScene = (scene: viz.Scene, renderTarget: HTMLElement) => {
            ReactDOM.render(viz.SceneView({ scene: scene }), renderTarget)
        }

        // eslint-disable-next-line no-eval
        eval(`
            var ga = wnd.ga;
            var pga = wnd.pga;
            var viz = wnd.viz;
            var renderScene = wnd.renderScene;
        `)
    }, [])

    return (
        <Router>
            <TutorialSite />
        </Router>
    )
}

export default App
