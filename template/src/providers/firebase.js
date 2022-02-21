// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Adding necessary sdks including auth
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// This block is left in to explicitly fix google analytics cookie issues
// and prevent the cookies from being blocked in the future.
// github issue reference: https://github.com/firebase/firebase-js-sdk/issues/4123
window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); }

window.gtag("config", firebaseConfig.measurementId, {
  cookie_domain: window.location.hostname,
  cookie_flags: "SameSite=None;Secure",
});

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);