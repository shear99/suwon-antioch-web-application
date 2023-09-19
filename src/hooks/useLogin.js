import {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {appAuth} from "../firebase/config";
import {useAuth} from "./useAuth";


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [ispending, setIsPending] = useState(false);
    const {dispatch} = useAuth();
    const login = (email, password) => {
        setError(null);
        setIsPending(true);
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsPending(false);
                setError(null);
                if (!user) {
                    throw new Error('로그인에 실패했습니다.');
                }
                dispatch({ type: 'login', payload: user });
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });
    }
    return {login}
}