import GridLine from "./GridLine";

function InventoryGrid() {
  const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="gridHolder">
      {array.map((item, index) => (
        <GridLine number={item} key={index} />
      ))}
    </div>
  );
}

export default InventoryGrid;
