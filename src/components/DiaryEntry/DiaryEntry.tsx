import { useState } from "react";
import { Button } from "@mui/base/Button";
import "./DiaryEntry.css";

type DiaryEntryProps = {
  buttonTitle: string;
};

const DiaryEntry = ({ buttonTitle }: DiaryEntryProps) => {
  const [entry, setEntry] = useState("");

  return (
    <section>
      <form>
        <textarea
          name="diaryEntry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <Button className="diaryEntryButton">{buttonTitle}</Button>
      </form>
    </section>
  );
};

export default DiaryEntry;
