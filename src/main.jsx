import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a81x8jc6cv4otkcu.us.auth0.com"
      clientId="6ODnzwyMHQFv33H5PJLjR0UMqcaXZQE0"
      redirectUri={window.location.origin}
      audience="http://localhost:8000"
      scope="openId profile email"
      responseType="token id_token" // Aquí es donde cambias el valor del parámetro responseType
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
