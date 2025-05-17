import { useState } from "react";
import Items from "./Items";

function App() {
  const list = ["Fruits", "Vegetables", "Groceries"];
  const [item, setItem] = useState([
    { id: 1, description: "Apple", category: "fruits", amount: 20 },
    { id: 2, description: "Apple", category: "fruits", amount: 20 },
    { id: 3, description: "Apple", category: "fruits", amount: 20 },
    { id: 4, description: "Apple", category: "fruits", amount: 20 },
    { id: 5, description: "Apple", category: "fruits", amount: 20 },
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
