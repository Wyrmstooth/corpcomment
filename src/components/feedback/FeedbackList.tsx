import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { ContainerProps } from "../../lib/types";

export default function FeedbackList({
  loading,
  errorMessage,
  feedbackItems,
}: ContainerProps) {
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!loading &&
        feedbackItems.map((item) => (
          <FeedbackItem key={item.id} feedbackItem={item} />
        ))}
    </ol>
  );
}
