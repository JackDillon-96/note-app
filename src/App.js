import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css"
import { FaArrowRight } from "react-icons/fa";


function App() {
  const [note, setNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [listItem, setListItem] = useState([]);
 
  const handleSubmit = (event) => {
      event.preventDefault();
      const newItem = { 
        id: Math.floor(Math.random() * 1000), 
        newNote: note, 
        newNoteTitle: noteTitle};
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
          <h3 className="app-title">Notes App</h3>
          <div className="title-container">
            <input 
              className="title"
              type="text"
              placeholder="title"
              value={noteTitle}
              onChange={(event) => setNoteTitle(event.target.value)}
            />
          </div>
          <div className="inline-block">
            <div className="note-container">
              <input
                className="note"
                type="text"
                placeholder="main text"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
              <FaArrowRight 
                className="submit-btn"
                onClick={handleSubmit}
              />
            </div>
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

