import viteLogo from "/vite.svg";
import "./App.css";
import DiaryEntry from "./components/DiaryEntry/DiaryEntry";
function App() {
  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <DiaryEntry
          buttonTitle="Add title"
          label="Describe an event from today."
        />
      </div>
    </>
  );
}

export default App;
