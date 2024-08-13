// Create a local storage to store profile login
const CREDENTIAL_AUTH = "credential_auth";

// Set static data for username and password
const username = "admin";
const password = "admin123";

// create data on local storage

function SignIn(data) {
  // match data with local storage
  const credential = JSON.parse(localStorage.getItem(CREDENTIAL_AUTH));
  if (data.username === username && data.password === password) {
    localStorage.setItem(
      CREDENTIAL_AUTH,
      JSON.stringify({ username, password })
    );
    alert("Login Berhasil!");
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 100);
  } else {
    alert("Kredensial yang Anda masukkan salah!");
    window.location.href = "/login";
  }
}

function SignOut() {
  localStorage.removeItem(CREDENTIAL_AUTH);
  window.location.href = "/login";
}

export { SignIn, SignOut };
