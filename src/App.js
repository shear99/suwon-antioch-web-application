import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Edit from "./pages/edit/Edit";
import TodayQT from "./pages/todayQT/TodayQT";
import {useAuth} from "./hooks/useAuth";
import Signup from "./pages/signup/Signup";
import {useEffect} from "react";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

function App() {
    const {isAuthReady, user} = useAuth();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                {isAuthReady ? (
                    <Routes>
                        <Route path="/qt" element={<ProtectedRoute>{user ? <TodayQT/> :
                            <Navigate to="/login" replace/>}</ProtectedRoute>}/>
                        <Route path="/edit" element={<ProtectedRoute>{user ? <Edit/> :
                            <Navigate to="/login" replace/>}</ProtectedRoute>}/>
                        <Route path="/login" element={!user ? <Login/> : <Navigate to="/" replace/>}/>
                        <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/" replace/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                ) : "Loading..."}
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
