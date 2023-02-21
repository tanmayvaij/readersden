import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import Context from "./context"
import "./index.css"

const root = document.getElementById("root")

createRoot(root).render(
    <Context>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context>
)
