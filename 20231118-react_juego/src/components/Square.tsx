/* eslint-disable @typescript-eslint/no-explicit-any */

// Creamos un cuadrado
const Square = ({ children, isSelected, updateBoard, index }:
  { children: any, isSelected?: boolean, updateBoard?: () => void, index?: number }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () =>{
    if(!updateBoard) return;
    updateBoard();
  }
  console.log(index);
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
export default Square;
