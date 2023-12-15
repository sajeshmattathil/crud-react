import React from "react";

function Login() {
    return (
        <div>
            <div className="login-item">
                <input type="email" placeholder="Email" />
            </div>
            <div className="login-item">
                <input type="password" placeholder="Email" />
            </div>
            <div className="login-item d-flex">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Login