import React, { useEffect, useMemo } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import './App.css'
import { TutorialIndex, GATutorial, PGATutorial } from "./pages"
import * as ga from "./ga/ga_pp"
import * as pga from "./ga/ga_zpp"
import * as viz from "./ga/viz2d"

export const pathToBreadcrumbs = (path: string) => {
    const pathNames = ["Geometric Algebra"]
    const pathUrls = [""]

    let pathSplit = path.substr(1).split("/")

    while (pathSplit.length > 0) {
        pathNames.push(pathSplit[0])

        pathUrls.push(`${pathUrls[pathUrls.length - 1]}/${pathSplit[0]}`)

        pathSplit.splice(0, 1)
    }

    // Make the first breadcrumb url a slash.
    pathUrls[0] = "/"

    return pathNames.map((name, i) => {
        return { name: name, url: pathUrls[i] }
    })
}

function NotFound() {
    return <h3>Not Found</h3>
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
                        <Route exact path="/">
                            <TutorialIndex />
                        </Route>
                        <Route path="*">
                            <NotFound />
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
