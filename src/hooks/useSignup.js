import {useState} from "react";
import {appAuth} from "../firebase/config";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [ispending, setIsPending] = useState(false);

    const signup = (email, password, username,) => {
        setError(null);
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                    const user = userCredential.user;
                    if (!user) {
                        throw new Error('회원가입에 실패했습니다.');
                    }
                    updateProfile(appAuth.currentUser, {displayName: username})
                        .then(() => {
                            setError(null);
                            setIsPending(false);
                        })
                        .catch((err) => {
                        setError(err.message);
                        setIsPending(false)
                        console.log(err.message);
                    });
                }
            )
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });

        return { signup }
    }
}