import style from "./Header.module.css"
import {Nav} from "./Nav";
import {useAuth} from "../../hooks/useAuth";
import {Link, Router, Routes} from "react-router-dom";

export const Header = () => {
    const {isAuthReady, user} = useAuth();

    return (
        <div>
            <Nav/>
            {isAuthReady ? (
                "프로필"
            ) : (
                <Link to="/login">로그인을 해주세요</Link>

            )}

        </div>
    )
}