import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.scss";
import { updateSW } from "./pwa.ts";
import { store } from "@store";
import { Provider } from "react-redux";

updateSW();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
