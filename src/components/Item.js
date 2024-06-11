export default function Item({ key, item, onDeleteItems, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onClick={(e) => onCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
