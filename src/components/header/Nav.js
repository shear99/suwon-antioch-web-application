import style from "./Nav.module.css"
import {useEffect, useRef, useState} from "react";
import {Link, Navigate, useNavigate,} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useLogout} from "../../hooks/useLogout";

export const Nav = () => {
    const {isAuthReady, user} = useAuth();
    const [isToggled, setIsToggled] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const {logout} = useLogout();

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

    const handleClick = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsToggled(false)
        }
    }

    const handleLogout = () => {
        logout();
        navigate("/home");
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, []);


    return (
        <div className="nav" ref={navRef}>
            <button onClick={handleChange}>=</button>
            {isToggled && (
                <div className="nav-menu">
                    <Link to="/">홈 화면</Link>
                    <Link to="/qt">QT 페이지</Link>
                    <Link to="/edit">편집 페이지</Link>
                    {user ? (
                        <>
                            <button onClick={handleLogout}>
                                로그아웃
                            </button>
                            <Link to="/">개인정보</Link>
                        </>
                    ) : (
                        <Link to="/login">로그인</Link>
                    )}
                </div>
            )}
        </div>
    )
}

