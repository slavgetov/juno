import { useState } from "react";
import { Button } from "@mui/base/Button";
import "./DiaryEntry.css";

type DiaryEntryProps = {
  buttonTitle: string;
};

const DiaryEntry = ({ buttonTitle }: DiaryEntryProps) => {
  const [entry, setEntry] = useState("");

  return (
    <section className="diaryEntryContainer">
      <textarea
        name="diaryEntry"
        rows={8}
        cols={70}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <Button className="diaryEntryButton">{buttonTitle}</Button>
    </section>
  );
};

export default DiaryEntry;
