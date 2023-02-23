import { Routes, Route, Navigate } from "react-router-dom";
import Authbar from "./components/Authbar";
import SideBarWithNavbar from "./components/SideBarWithNavbar";

import Home from "./pages/Home";

import Intro from "./pages/Intro";
import MyBooks from "./pages/MyBooks";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const RoutesWithUser = () => {
    return (
        <>
        <SideBarWithNavbar/>
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/my_books" element={ <MyBooks/> } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </>
    )
}

const RoutesWithoutUser = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Intro/> } />
            <Route exact path="/signin" element={ <Signin/> } />
            <Route exact path="/signup" element={ <Signup/> } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>        
    )
}

export default function App() {

    const authtoken = localStorage.getItem("authtoken")

    return (
        <>
        <Authbar/>
        { (authtoken) ? <RoutesWithUser/> : <RoutesWithoutUser/> }
        </>
    )
}
