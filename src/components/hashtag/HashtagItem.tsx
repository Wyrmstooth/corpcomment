import { HashTagItemProps } from "../../lib/types";

export default function HashtagItem({
  company,
  handleSelectCompany,
}: HashTagItemProps) {
  return (
    <li key={company}>
      <button
        onClick={() => {
          handleSelectCompany(company);
        }}
      >
        #{company}
      </button>
    </li>
  );
}
