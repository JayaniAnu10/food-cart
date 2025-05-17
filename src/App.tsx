import { useState } from "react";
import Items from "./Items";

function App() {
  const list = ["Fruits", "Vegetables", "Groceries"];
  const [item, setItem] = useState([
    { id: 1, description: "Apple", category: "fruits", amount: 20 },
    { id: 2, description: "Brinjal", category: "vegetables", amount: 10 },
    { id: 3, description: "Dhal", category: "groceries", amount: 40 },
    { id: 4, description: "Papaya", category: "fruits", amount: 40 },
    { id: 5, description: "Wheat flour", category: "groceries", amount: 50 },
  ]);

  return (
    <>
      <Items
        expenses={item}
        onDelete={(id) => setItem(item.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
