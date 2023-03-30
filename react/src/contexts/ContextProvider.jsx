import {createContext, useContext, useState} from 'react';

const StateContext = createContext({
    currentUser: null,
    token: null,
    rol: null,
    setUser: () => {},
    setToken: () => {},
    setRol: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [rol, setRol] = useState(localStorage.getItem('NUM_ROL'));

    localStorage.setItem('NUM_ROL', rol);
    const setToken = (token) => {
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('NUM_ROL');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            rol,
            setRol
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)