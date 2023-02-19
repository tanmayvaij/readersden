import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Intro from "./pages/Intro";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={ <Intro/> } />
                <Route exact path="/signin" component={ <Signin/> } />
                <Route exact path="/signup" component={ <Signup/> } />
            </Routes>
        </BrowserRouter>
    )
}
