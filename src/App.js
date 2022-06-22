import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import UserPage from "./pages/user-details/userPage";
import HomePage from "./pages/main/mainPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/user/:id" element={<UserPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
