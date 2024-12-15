import { useState } from "react";
import { ITraderItem } from "../interfaces";

function IndividualTraderItem({
  item,
  currency,
}: {
  item: ITraderItem;
  currency: string;
}) {
  const [mouseOverVisible, setMouseOverVisible] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setMouseOverVisible(true);
  };

  const handleMouseLeave = () => {
    setMouseOverVisible(false);
  };
  return (
    <div
      className="individualItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {mouseOverVisible ? (
        <div className="mouseOverBox">
          <div className="mouseOverHeading">{item.name}</div>
          <div className="mouseOverPicture"></div>
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
