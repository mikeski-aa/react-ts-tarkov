import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

function ItemTile({
  val,
  itemDragged,
  itemReplaced,
  setItemDragged,
  setItemReplaced,
  setSucDrop,
  sucDrop,
}: {
  val: string;
  itemDragged: string;
  itemReplaced: string;
  setItemDragged: Dispatch<SetStateAction<string>>;
  setItemReplaced: Dispatch<SetStateAction<string>>;
  setSucDrop: Dispatch<SetStateAction<boolean>>;
  sucDrop: boolean;
}) {
  const [itemName, setItemName] = useState<string>(val);

  const handleDropLogic = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.innerText === "") {
        console.log("drop name:");
        console.log(target.innerText);
        setItemReplaced(target.innerText);
        setItemName(itemDragged);
        setSucDrop(true);
      }
    }
  };

  const handleDragStart = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log("start drag name:");
      console.log(target.innerText);
      setItemDragged(target.innerText);
    }
  };

  // handle resetting previous to null value
  const handleDragEnd = () => {
    if (sucDrop) {
      setItemName("");
      setSucDrop(false);
    }
  };

  return (
    <div
      className="dragboxtest"
      draggable
      onDrop={(e) => handleDropLogic(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={() => handleDragEnd()}
    >
      {itemName}
    </div>
  );
}

export default ItemTile;
