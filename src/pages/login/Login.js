import styles from './Login.module.css'
import {useState} from "react";
import {useLogin} from "../../hooks/useLogin";

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [login] = useLogin();

    const handleChange = (event) => {
        const [name, value] = event.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(loginData.email, loginData.password);
    }


    return (
        <form className="style.login_form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="text" id="myEmail" name="email" value={loginData.email} onChange={handleChange}
                       placeholder="이메일"/>
                <label htmlFor="myPassword">password : </label>
                <input type="password" id="myPassword" name="password" value={loginData.password}
                       onChange={handleChange}
                       placeholder="비밀번호"/>

                <button type="submit" className="btn">로그인</button>

            </fieldset>


        </form>
    )
}