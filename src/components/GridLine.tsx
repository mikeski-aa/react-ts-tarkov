import "../styles/inventoryGrid.css";
function GridLine({ number }: { number: number }) {
  return (
    <div className={`gridLine ${number}`}>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
      <div className="gridItem"></div>
    </div>
  );
}

export default GridLine;
