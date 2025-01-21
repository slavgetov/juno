import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import FunnelFormStep1 from "./components/FunnelForm/FunnelFormStep1.tsx";
import FunnelFormStep2 from "./components/FunnelForm/FunnelFormStep2.tsx";
import {
  FunnelContext,
  FunnelContextProps,
} from "./components/context/funnelContext.ts";
import "./index.css";
import App from "./App.tsx";

const funnelData: FunnelContextProps = {
  firstName: "",
  nickname: "",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <FunnelContext.Provider value={funnelData}>
          <Route
            path="/form-step1"
            element={<FunnelFormStep1 buttonTitle={"Submit"} />}
          />
          <Route path="/form-step2" element={<FunnelFormStep2 />} />
        </FunnelContext.Provider>
        <Route path="/" element={<App />} />
        <Route path="/cool" element={<p>Cool page bro...</p>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
