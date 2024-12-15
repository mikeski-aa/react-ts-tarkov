import { Dispatch, SetStateAction, useState } from "react";
import { ITraderItem } from "../interfaces";
import PlaceholderWeapon from "../assets/placeholders/weaponplaceholder.png";

function IndividualTraderItem({
  item,
  currency,
  flipBox,
  setActiveItem,
}: {
  item: ITraderItem;
  currency: string;
  flipBox: boolean;
  setActiveItem: Dispatch<SetStateAction<ITraderItem>>;
}) {
  const [mouseOverVisible, setMouseOverVisible] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setMouseOverVisible(true);
  };

  const handleMouseLeave = () => {
    setMouseOverVisible(false);
  };

  const handleOnClick = () => {
    setActiveItem(item);
  };

  return (
    <div
      className="individualItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {mouseOverVisible ? (
        <div className={flipBox ? "mouseOverBox flipped" : "mouseOverBox"}>
          <div className="mouseOverHeading">{item.name}</div>
          <div className="mouseOverPicture">
            <img src={PlaceholderWeapon} className="weaponImage"></img>
          </div>
          <div className="mouseOverDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            ipsa facilis optio? Nesciunt numquam fugit accusantium consectetur
            aliquam libero accusamus necessitatibus voluptatem et maxime,
            officia adipisci similique ut cumque animi assumenda eum dolorum,
            itaque pariatur debitis laudantium. Debitis, doloremque porro!
            Perspiciatis praesentium incidunt sapiente sint quam sit voluptate
            quas non!
          </div>
        </div>
      ) : null}
      <div className="individualItemName">{item.name}</div>
      <div className="bottomPart">
        <div className="individualItemPrice">
          {currency}
          {item.price}
        </div>
        <div className="individualItemQuant">{item.quantity}</div>
      </div>
    </div>
  );
}

export default IndividualTraderItem;
