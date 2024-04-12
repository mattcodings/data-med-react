import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContext from "./context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7vfazwu1qjkuoi0t.us.auth0.com"
    clientId="Z0MvWh6BHPWH4PCruGLz4rhH7758lcvl"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <AppContext>
        <App />
      </AppContext>
    </React.StrictMode>
  </Auth0Provider>
);
