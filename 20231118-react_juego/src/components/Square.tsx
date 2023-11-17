/* eslint-disable @typescript-eslint/no-explicit-any */

// Creamos un cuadrado
const Square = ({ children, isSelected, updateBoard, index }:
  { children: any, isSelected: false, updateBoard: () => void, index: number }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default Square;
