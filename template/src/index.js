import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

// Importing reactfire providers
import { AuthProvider, FirebaseAppProvider } from "reactfire";

/**
 * Importing initialized firebase sdks,
 * allowing for optional emulator enabling later.
 * 
 * This is personal preference but I prefer to have all firebase declarations 
 * in a shared file so I intentionally firebaseApp and each sdk separate.
 * This is not how it is listed in reactfire docs but it works exactly the same as their solution.
 */
import { auth, firebaseApp } from "providers/firebase";

ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseApp={firebaseApp}>
        <AuthProvider sdk={auth}>
          <App />
        </AuthProvider>
      </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
