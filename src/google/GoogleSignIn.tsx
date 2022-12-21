function GoogleSignIn() {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="140780352929-nf24d8t32j5vfvfj0lk6sre86ktc14pi.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:8080/v1/auth/createUser"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}

export default GoogleSignIn;
