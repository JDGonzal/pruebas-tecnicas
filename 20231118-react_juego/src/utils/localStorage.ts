/* eslint-disable @typescript-eslint/no-explicit-any */
export const saveGameToStorage = ({ newBoard, newTurn }: { newBoard: []|any, newTurn: string }) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);
}

export const resetGameStorage = ()=>{
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}
