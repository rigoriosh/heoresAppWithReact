import React from 'react'

export const LoginScreen = ({history}) => {    
    const handleLogin = () => {
        history.replace('/');
    }
    return (
        <div className="container mt-5">
            <h3>LoginScreen</h3>
            <hr/>

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
