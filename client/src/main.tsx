import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

// Retry connection if failed
const retryConnection = () => {
  const maxRetries = 5;
  let retries = 0;

  const tryConnect = () => {
    if (retries >= maxRetries) {
      console.error('Failed to connect after', maxRetries, 'retries');
      return;
    }
    retries++;
    setTimeout(() => {
      console.log('Attempting to reconnect...');
      tryConnect();
    }, 2000);
  };

  window.addEventListener('unload', () => tryConnect());
};

retryConnection();
createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
