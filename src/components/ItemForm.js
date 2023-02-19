import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

    const [newItemForm, setNewItemForm] = useState({
        itemName: "",
        itemCategory: "Dessert",
    })


    function addNewItem(e) {
        setNewItemForm({
            ...newItemForm,
            [e.target.id]: e.target.value
        })
    }
    function submitNewItem(e){
        e.preventDefault();
        const newItem = {
            id: uuid(), // the `uuid` library can be used to generate a unique id
            name: newItemForm.itemName,
            category: newItemForm.itemCategory,
        };
        onItemFormSubmit(newItem)
        setNewItemForm({
            itemName: "",
            itemCategory: "Dessert",
        })
    }

  return (
    <form className="NewItem" onSubmit={submitNewItem}>
      <label>
        Name:
        <input type="text" name="name" id="itemName" onChange={addNewItem}/>
      </label>

      <label>
        Category:
        <select name="category" id="itemCategory" onChange={addNewItem}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
