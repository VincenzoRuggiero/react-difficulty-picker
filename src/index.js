// Import some React tools
import ReactDOM from "react-dom/client";

// Import our first component: App
import { App } from "./App";

// Target the root div
const rootDiv = document.getElementById("root");

// Transform the root div into React node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the React node
reactRoot.render(<App />);
