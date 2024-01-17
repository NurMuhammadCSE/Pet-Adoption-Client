import { useSearchParams } from "react-router-dom";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./categoriesData";

const Categories = () => {
  const [params] = useSearchParams();
  const category = params.get("category");
  // console.log(category)

  return (
    <div className="pt-4 flex items-center justify-between overflow-x-auto z-40">
      {categories.map((item) => (
        <CategoriesBox
          selected={category}
          key={item.label}
          item={item}
        ></CategoriesBox>
      ))}
    </div>
  );
};

export default Categories;
