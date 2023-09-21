import style from "./Footer.module.css"
import {useAuth} from "../../hooks/useAuth";

export const Footer = () => {
    const {isAuthReady, user} = useAuth();

    return (
        <div>
            Footer
        </div>
    )
}