// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";

// Adding necessary sdks including auth
import { connectAuthEmulator, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = undefined

// !!! Delete this block after defining firebaseConfig above !!!
if (!firebaseConfig) {
  import("react-dom")
    .then(ReactDOM => {
      ReactDOM.render(
        <>
          <p>You have to initialize firebaseConfig in <code style={{ color: "hotpink" }}>src/providers/firebase.js</code></p>
          <p>Also, you should probably read the <code style={{ color: "hotpink" }}>README.md</code> at this point as well.</p>
        </>,
        document.getElementById("root")
      )
    })

}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = initializeAnalytics(firebaseApp, {
  config: {
    cookie_domain: window.location.hostname,
    cookie_flags: "SameSite=None;Secure"
  }
});

export const auth = getAuth(firebaseApp)

if (process.env.REACT_APP_ENABLE_EMULATORS === "true") {
  connectAuthEmulator(auth, "http://localhost:9099")
}