import React, { useState, useEffect } from "react";
import List from "./List";
import Search from "./Search";
import "./App.css"


function App() {
  const [note, setNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [listItem, setListItem] = useState([]);
 
  const handleSubmit = (event) => {
      event.preventDefault();
      const newItem = { 
        id: Math.floor(Math.random() * 1000), 
        newNote: note, newNoteTitle: noteTitle};
      setListItem([...listItem, newItem]);
      setNote("");
      setNoteTitle("");
    }

    useEffect(() => {
      const listItem = JSON.parse(localStorage.getItem('listItem'));
      if (listItem) {
        setListItem(listItem);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('listItem', JSON.stringify(listItem));
    }, [listItem]);

    return (
      <main> 
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <h3>Notes App</h3>
          <div className="title-container">
            <input 
              className="title"
              type="text"
              placeholder="title"
              value={noteTitle}
              onChange={(event) => setNoteTitle(event.target.value)}
            />
          </div>
          <div className="note-container">
            <input
              className="note"
              type="text"
              placeholder="main text"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button type="submit">
              submit
            </button>
          </div>
        </form>
          <div>
            <List 
              items = {listItem} 
              listItem = {listItem}
              setListItem = {setListItem}
            />
          </div>
      </div>
      </main>
    );
  };

export default App;

// const [searchTerm, setSearchTerm] = useState("");
// const [searchResults, setSearchResults] = useState([]);

// useEffect(() => {
//   const results = newNoteTitle.filter(item =>
//   item.toLowerCase().includes(searchTerm)
//   );
//   setSearchResults(results);
// }, [searchTerm]);

{/* <div>
<input
  type="text"
  placeholder="Search"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
 <ul>
  {searchResults.map(item => (
    <li>{item}</li>
  ))}
 </ul>
</div>  */}