import React from "react";
import AuthContext from "./AuthContext";

function Login() {
    const authContext = React.useContext(AuthContext);
    if (!authContext) {
        throw new Error("AuthContext not found");
    }

    return(
        <div>
            <h1>Please Log in</h1>
            <button onClick={() => authContext.login()}>Login</button>
        </div>
    );
}

export default Login;