import React, { useState } from "react";

interface Props {
  onSelected: (category: string) => void;
}
const ItemsFilter = ({ onSelected }: Props) => {
  return (
    <select
      className="form-select mb-5"
      onChange={(event) => onSelected(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="fruits">Fruits</option>
      <option value="vegetables">Vegetables</option>
      <option value="groceries">Groceries</option>
    </select>
  );
};

export default ItemsFilter;
