export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some Items 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPer = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPer === 100
          ? "You got everything to ✈️"
          : `

        💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPer}%)"`}
      </em>
    </footer>
  );
}
