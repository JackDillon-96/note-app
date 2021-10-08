import React, {useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Button from '@material-ui/core/Button';

const ListItem = ({ newNote, newNoteTitle, item, listItem, setListItem }) => {

  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
      setShowMore(prev => !prev)
      console.log("clicked")
  }

  const deleteItem = () => {
    setListItem(listItem.filter((element) => element.id !== item.id))
    console.log(newNoteTitle)
  }

  return ( 
      <div className="single-note">
        <div className="single-note-title">{newNoteTitle}</div>
        <div className="single-note-note">
          {showMore ? newNote: `${newNote.substring(0, 0)}`}
        </div>
        <Button variant="outlined"
          style={{
            color: "white",
            fontSize: "12px",
          }}
          onClick={showMoreHandler}
        >
         {showMore ? "show less" : "show more"}
        </Button>
        <FaTrashAlt 
          className="delete-btn"
          onClick={deleteItem}
        />
      </div>
  );
};

export default ListItem;

