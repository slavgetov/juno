import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DiaryEntry from "./components/DiaryEntry/DiaryEntry";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <DiaryEntry buttonTitle="Add title" />
      </div>
    </>
  );
}

export default App;
