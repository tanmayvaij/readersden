import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"
import Context from "./context"
import "./index.css"

const root = document.getElementById("root")

createRoot(root).render(
    <Context>
        <HashRouter>
            <App/>
        </HashRouter>
    </Context>
)
