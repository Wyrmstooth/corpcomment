export type feedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
  id: number;
};

export type ContainerProps = {
  loading: boolean;
  feedbackItems: feedbackItem[];
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export type feedbackFormProps = {
  handleAddToList: (text: string) => void;
};

export type HashTagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export type HashTagItemProps = {
  company: string;
  handleSelectCompany: (company: string) => void;
};
