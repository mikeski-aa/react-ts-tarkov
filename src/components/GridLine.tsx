import "../styles/inventoryGrid.css";
function GridLine({ number, value }: { number: number; value: any }) {
  return (
    <div className={`gridLine ${number}`}>
      <div className={`gridItem 0 ${number}`}></div>
      <div className={`gridItem 1 ${number}`}></div>
      <div className={`gridItem 2 ${number}`}></div>
      <div className={`gridItem 3 ${number}`}></div>
      <div className={`gridItem 4 ${number}`}></div>
      <div className={`gridItem 5 ${number}`}></div>
      <div className={`gridItem 6 ${number}`}></div>
      <div className={`gridItem 7 ${number}`}></div>
      <div className={`gridItem 8 ${number}`}></div>
      <div className={`gridItem 9 ${number}`}></div>
    </div>
  );
}

export default GridLine;
