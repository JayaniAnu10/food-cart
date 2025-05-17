import categories from "../Components/categories";

interface Props {
  onSelected: (category: string) => void;
}
const ItemsFilter = ({ onSelected }: Props) => {
  return (
    <div className="mx-3">
      <select
        className="form-select "
        onChange={(event) => onSelected(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value="category">{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ItemsFilter;
