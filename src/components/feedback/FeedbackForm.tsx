import { useState } from "react";
import { CHARACTER_LIMIT } from "../../lib/constants";
import { feedbackFormProps } from "../../lib/types";

export default function FeedbackForm({ handleAddToList }: feedbackFormProps) {
  const [text, setText] = useState("");
  const count = CHARACTER_LIMIT - text.length;
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (text.length >= CHARACTER_LIMIT) return;
    setText(event.target.value);
  };

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddToList(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <textarea
        className="feedback-textarea"
        spellCheck={false}
        placeholder="What's your feedback?"
        onChange={handleText}
        value={text}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag that company
      </label>
      <div>
        <p className="u-italic">{count}</p>
        <button className="button" type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
