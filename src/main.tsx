import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import FunnelFormStep1 from "./components/FunnelForm/FunnelFormStep1.tsx";
import FunnelFormStep2 from "./components/FunnelForm/FunnelFormStep2.tsx";
import "./index.css";
import { store } from "./components/store/store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route
            path="/form-step1"
            element={<FunnelFormStep1 buttonTitle={"Submit"} />}
          />
          <Route path="/form-step2" element={<FunnelFormStep2 />} />
          <Route path="/" element={<App />} />
          <Route path="/cool" element={<p>Cool page bro...</p>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
