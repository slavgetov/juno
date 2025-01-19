import { useState } from "react";
import { Button } from "@mui/base/Button";
import "./DiaryEntry.css";

type DiaryEntryProps = {
  buttonTitle: string;
  label: string;
};

const DiaryEntry = ({ buttonTitle, label }: DiaryEntryProps) => {
  const [entry, setEntry] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const handleClick = () => {
    setIsEntered(true);
  };

  return (
    <section className="diaryEntryContainer">
      {isEntered ? (
        <p>Thank you for sharing that.</p>
      ) : (
        <>
          <label htmlFor="diaryEntry">{label}</label>
          <textarea
            id="diaryEntry"
            name="diaryEntry"
            rows={8}
            cols={70}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <Button className="diaryEntryButton" onClick={handleClick}>
            {buttonTitle}
          </Button>
        </>
      )}
    </section>
  );
};

export default DiaryEntry;
