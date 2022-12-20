function GoogleSignIn() {
  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-client_id="140780352929-jbnhqp6010lfo2lql69p5je4k8fbjqbg.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="localhost:3000/login"
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
