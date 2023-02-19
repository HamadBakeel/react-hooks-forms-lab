import React, {useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import item from "./Item";

function ShoppingList({items, setItems}) {

    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchValue, setSearchValue] = useState("")


    const handleSearchValue = (e) => setSearchValue(e.target.value)
    const handleSelectedCategory = (e) => setSelectedCategory(e.target.value)


    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    }).filter((item) => {
        return item.name.includes(searchValue)
    });

    const handleNewItem = (newItem) =>{
        setItems(
            [newItem,...items]
        )
    }


    return (
        <div className="ShoppingList">
            <ItemForm onItemFormSubmit={handleNewItem}/>
            <Filter
                onSearchChange={handleSearchValue}
                onCategoryChange={handleSelectedCategory}
                search={searchValue}
            />
            <ul className="Items">
                {itemsToDisplay.map((item) => (
                    <Item key={item.id} name={item.name} category={item.category}/>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
