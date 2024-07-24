import { TriangleUpIcon } from "@radix-ui/react-icons";
import { feedbackItem } from "../../lib/types";
import { useState } from "react";

type feedbackItemProps = { feedbackItem: feedbackItem };

export default function FeedbackItem({ feedbackItem }: feedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}  `}
      onClick={() => setOpen((prev) => !prev)}
    >
      <button
        onClick={(e) => {
          setUpvoteCount((prev) => prev + 1);
          e.currentTarget.disabled = true;
          e.stopPropagation();
        }}
      >
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
