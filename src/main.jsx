import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { VenueProvider } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <VenueProvider>
    <App />
  </VenueProvider>
);
