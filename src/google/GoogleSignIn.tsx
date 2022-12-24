import * as React from "react";
import { AuthContext, AuthContextType } from "../pages/AuthContext";

function GoogleSignIn() {
  const context = React.useContext(AuthContext)!;
  const { isAuthenticated, login } = context;

  const handleCredentialResponse = (
    response: google.accounts.id.CredentialResponse
  ) => {
    const token = response.credential;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    };

    fetch("http://localhost:8080/v1/auth/googleSignIn", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((jwt) => {
        setLocalStorage("sessionToken", jwt.value);

        login()
        // Redirect the user to the "/" page
        // window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function setLocalStorage(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  React.useEffect(() => {
    const signInButton = document.getElementById("buttonDiv");
    if (!signInButton) {
      throw new Error("Button div not found");
    }
    google.accounts.id.initialize({
      client_id:
        "140780352929-nf24d8t32j5vfvfj0lk6sre86ktc14pi.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      signInButton,
      { type: "standard", theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);

  return (
    <div>
      <div id="buttonDiv"></div>
    </div>
  );
}

export default GoogleSignIn;
