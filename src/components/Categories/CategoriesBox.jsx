/* eslint-disable react/prop-types */
import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoriesBox = ({ item, selected }) => {
  const { label, icon: Icon } = item;
  //   console.log(selected, label, selected === label);
  const borderCategory = selected === label;
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log(label);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      // console.log(currentQuery)
    }
    const updateQuery = { ...currentQuery, category: label };
    // console.log(updateQuery,{ category: label})

    const url = qs.stringifyUrl({
      url: "/",
      query: updateQuery,
    });

    navigate(url);
  };

  params.get("category");

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        borderCategory ? "border-neutral-800" : ""
      }`}
    >
      <Icon size={33}></Icon>

      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoriesBox;
