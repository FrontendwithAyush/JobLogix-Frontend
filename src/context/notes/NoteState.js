// import { data } from "react-router-dom";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const host = "http://localhost:5000";
  const host = "https://notes-backend-2kxn.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // get all  notes
  const getNotes = async () => {
    const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await responce.json();
    setNotes(json);
  };
  // add a note
  const addNote = async (
    title,
    description,
    tag,
    company,
    jobLink,
    location,
    status,
    source
  ) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        tag,
        company,
        jobLink,
        location,
        status,
        source,
      }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //delete a note
  const deleteNote = async (id) => {
    const responce = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await responce.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (
    id,
    title,
    description,
    tag,
    company,
    jobLink,
    location,
    status,
    source
  ) => {
    const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        tag,
        company,
        jobLink,
        location,
        status,
        source,
      }),
    });
    const json = await responce.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        newNotes[index].company = company;
        newNotes[index].jobLink = jobLink;
        newNotes[index].location = location;
        newNotes[index].status = status;
        newNotes[index].source = source;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
