import { ContainerProps, HeaderProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

export default function Container(
  { loading, errorMessage, feedbackItems }: ContainerProps,
  { handleAddToList }: HeaderProps
) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        loading={loading}
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
      />
    </main>
  );
}
