import { useEffect, useMemo, useState } from "react";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import { feedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<feedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: feedbackItem = {
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      id: feedbackItems.length + 1,
    };

    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        const data = await res.json();
        console.log(data);
        setFeedbackItems(data.feedbacks);
        setLoading(false);
      } catch (error) {
        setErorMessage("Error fetching data");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        loading={loading}
        feedbackItems={filteredFeedbackItems}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        handleSelectCompany={handleSelectCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
