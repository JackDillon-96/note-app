import React from "react";
import ListItem from "./ListItem";

const List = ({items, listItem, setListItem}) => {

    return (
        <div>
            <div className="row-container">
                {items.map((item) => (
                    
                    <ListItem 
                        newNote = {item.newNote} 
                        newNoteTitle = {item.newNoteTitle}
                        setListItem = {setListItem}
                        listItem = {listItem}
                        item = {item}
                    />
                ))}
            </div>
        </div>
    )
}

export default List;