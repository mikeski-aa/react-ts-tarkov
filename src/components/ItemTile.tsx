import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

function ItemTile({
  val,
  itemDragged,
  itemReplaced,
  setItemDragged,
  setItemReplaced,
}: {
  val: string;
  itemDragged: string;
  itemReplaced: string;
  setItemDragged: Dispatch<SetStateAction<string>>;
  setItemReplaced: Dispatch<SetStateAction<string>>;
}) {
  const [itemName, setItemName] = useState<string>(val);

  const handleDropLogic = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log("drop name:");
      console.log(target.innerText);
      setItemReplaced(target.innerText);
      setItemName(itemDragged);
    }
  };

  const handleDragStart = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log("start drag name:");
      console.log(target.innerText);
      setItemDragged(target.innerText);
      setItemName(itemReplaced);
    }
  };

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
