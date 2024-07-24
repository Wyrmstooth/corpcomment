import { HashTagListProps } from "../../lib/types";
import HashtagItem from "./HashtagItem";

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashTagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          company={company}
          handleSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}
