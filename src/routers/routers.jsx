import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LadingPage";
export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    )
}