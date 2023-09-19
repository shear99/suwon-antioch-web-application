import styles from './Signup.module.css'
import {useSignup} from "../../hooks/useSignup";
import {useState} from "react";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        nickname: ""
    })
    const [signup] = useSignup()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(formData.email, formData.password, formData.username);
    }


    return (
        <form className="style.signup_form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>회원가입</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="text" id="myEmail" name="email" value={formData.email} onChange={handleChange}
                       placeholder="이메일"/>
                <label htmlFor="myPassword">password : </label>
                <input type="password" id="myPassword" name="password" value={formData.password} onChange={handleChange}
                       placeholder="비밀번호"/>
                <label htmlFor="myName">name : </label>
                <input type="text" id="myName" name="name" value={formData.username} onChange={handleChange}
                       placeholder="이름"/>
                <label htmlFor="myNickName">nickname : </label>
                <input type="text" id="myNickName" name="nickname" value={formData.nickname} onChange={handleChange}
                       placeholder="닉네임"/>

                <button type="submit" className="btn">회원가입</button>
            </fieldset>

        </form>
    )
}