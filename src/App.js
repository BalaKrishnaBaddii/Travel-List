import { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Watch", quantity: 2, packed: false },
  { id: 4, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const conformed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (conformed) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckItem={handleCheckBox}
        OnClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
