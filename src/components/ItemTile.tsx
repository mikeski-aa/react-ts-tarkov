import { SyntheticEvent, useState } from "react";

function ItemTile() {
  const handleDropLogic = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log("drop name:");
      console.log(target.innerText);
    }
  };

  const handleDragStart = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log("start drag name:");
      console.log(target.innerText);
    }
  };

  const [itemName, setItemName] = useState<string>("");

  return (
    <div
      className="dragboxtest"
      draggable
      onDrop={(e) => handleDropLogic(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {itemName}
    </div>
  );
}

export default ItemTile;
