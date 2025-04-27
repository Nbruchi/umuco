import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Museum from "./pages/Museum";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <main className="w-full h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/museum" element={<Museum />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;
