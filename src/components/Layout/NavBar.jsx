import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button'

export const NavBar = () => {
    const username = useLogin()

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/";
    };
    return (
        <div className="w-full bg-green-500 py-5 justify-end flex text-white items-center px-6 font-bold">
            {username}
            <Button classname="ml-5 bg-black px-4" onClick={handleLogout}>
                logout
            </Button>
            
        </div>
    )
}
