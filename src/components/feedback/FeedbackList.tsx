import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import { feedbackItem } from "../../lib/types";

export default function FeedbackList() {
  const { loading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!loading &&
        filteredFeedbackItems.map((item: feedbackItem) => (
          <FeedbackItem key={item.id} feedbackItem={item} />
        ))}
    </ol>
  );
}
