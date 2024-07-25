import React from 'react'

const LoginForm = () => {
    return (
        <form>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" id="username" />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" />
            </div>

            <div>
                <a href="#">Submit</a>
            </div>

            <span>
                Don't have an account?
            </span>

            <div>
                <a id='signup-link' href="#">Sign Up</a>
            </div>
        </form>
    )
}

export default LoginForm