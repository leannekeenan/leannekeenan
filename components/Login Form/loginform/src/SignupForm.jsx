import React from "react";

let SignupForm = () => {
    return (
        <form>
            <h2>Signup</h2>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input type="email" />
            </div>

            <div>
                <label htmlFor="username">username</label>
                <input type="text" id="username" />
            </div>

            <div>
                <label htmlFor="setpassword">Set Password</label>
                <input type="password" id="setpassword"/>
            </div>

            <div>
                <label htmlFor="checkpassword">Confirm Password</label>
                <input type="password" id="checkpassword" />
            </div>

            <div>
                <a href="#">Submit</a>
            </div>

            <span>
                Have an account?
            </span>

            <div>
                <a href="#">Sign In</a>
            </div>
        </form>
    )
}

export default SignupForm