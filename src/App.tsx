import { useState } from "react";
import Items from "./Components/Items";
import ItemsFilter from "./Components/ItemsFilter";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [item, setItem] = useState([
    { id: 1, description: "Apple", category: "fruits", amount: 20 },
    { id: 2, description: "Brinjal", category: "vegetables", amount: 10 },
    { id: 3, description: "Dhal", category: "groceries", amount: 40 },
    { id: 4, description: "Papaya", category: "fruits", amount: 40 },
    { id: 5, description: "Wheat flour", category: "groceries", amount: 50 },
  ]);

  const [selectedCategory, setCategory] = useState("");
  const visibleItems = selectedCategory
    ? item.filter((i) => i.category === selectedCategory)
    : item;
  return (
    <div>
      <div>
        <ExpenseForm
          onSubmit={(data) =>
            setItem([...item, { ...data, id: item.length + 1 }])
          }
        />
      </div>
      <ItemsFilter
        onSelected={(selectedCategory) => setCategory(selectedCategory)}
      />
      <Items
        expenses={visibleItems}
        onDelete={(id) => setItem(item.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
