import { ContainerProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

export default function Container({
  loading,
  errorMessage,
  feedbackItems,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        loading={loading}
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
    </main>
  );
}
