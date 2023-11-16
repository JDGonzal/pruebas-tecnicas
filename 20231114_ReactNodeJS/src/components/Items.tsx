import { ItemId } from "../models/items.model";

function Items({ id, text, handleClick}:
  { id: ItemId, text: string, handleClick: () => void}) {
  return (
    <li id={id} >
      {text}
      <button onClick={handleClick} className='delete-button' >
        🗑️
      </button>
    </li>
  )
}

export default Items;