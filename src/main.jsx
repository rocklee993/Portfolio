import { StrictMode, Suspense } from "react"; // Ajoutez Suspense ici
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Assurez-vous que le chemin vers App.jsx est correct
import "./i18n"; // Import i18n configuration

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot prend l'élément DOM directement

root.render(
  <StrictMode>
    {/* Enveloppez votre App avec Suspense */}
    <Suspense fallback={<div>Loading...</div>}> {/* Vous pouvez personnaliser ce fallback */}
      <App />
    </Suspense>
  </StrictMode>
);