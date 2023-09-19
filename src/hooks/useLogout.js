import {useState} from 'react';
import {signOut} from 'firebase/auth'
import {appAuth} from '../firebase/config';
import {useAuth} from "./useAuth";


export const useLogout = () => {
    const [error, setError] = useState(null);
    const [ispending, setIsPending] = useState(false);
    const {dispatch} = useAuth();

    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(appAuth).then(() => {
            setError(null);
            setIsPending(false);
            dispatch({ type: 'logout'});
        }).catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        });
    }
    return {error, ispending, logout}
}