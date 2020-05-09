import { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null
}

export default ResolveAuthScreen;

//This screen use for show the user an empty screen while 
//we figure out if there is token in local storage