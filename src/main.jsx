import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WaterBlob from "./WaterBlob"; // Add this import
import "./styles/tailwind.css";

const Root = () => (
  <StrictMode>
    <div>
    <App /> {/* Main App component */}
      <WaterBlob /> {/* WaterBlob component */}
      
    </div>
  </StrictMode>
);

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
