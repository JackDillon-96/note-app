import React, {useState} from "react";


const ListItem = ({ newNote, newNoteTitle, item, listItem, setListItem }) => {

  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
      setShowMore(prev => !prev)
  }

  const deleteItem = () => {
    setListItem(listItem.filter((element) => element.id !== item.id))
  }

  return (
    <div className="single-note">
      <div>{newNoteTitle}</div>
      <div>
        {showMore ? newNote: `${newNote.substring(0, 0)}`}
      </div>
      <button onClick={showMoreHandler}>
        {showMore ? "show less" : "show more"}
      </button>
      <button 
        onClick={deleteItem}
        type="button">
        delete
      </button>
    </div>
  );
};

export default ListItem;

// {
//   title.length > 250 ? showMore ? <p>{title}</p> : `${title.substring(0, 250)}` :
//   title
// }

{/* <div className="single-note">
      {showMore ? <p>{title}</p> : `${title.substring(0, 250)}`}
          <button onClick={showMoreHandler}>
            {showMore ? "show less" : "show more"}
          </button>
    </div> */}

{/* <div className="single-note">
      {
        title.length > 250 ? 
        showMore ? <p>{title}</p> : 
          `${title.substring(0, 250)}...` (<button onClick={showMoreHandler}>
            {showMore ? "show less" : "show more"}
          </button>):
          title      
        }
          
    </div> */}


