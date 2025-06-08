import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  let history = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    ecompany: "",
    ejobLink: "",
    elocation: "",
    estatus: "",
    esource: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      ecompany: currentNote.company,
      ejobLink: currentNote.jobLink,
      elocation: currentNote.location,
      estatus: currentNote.status,
      esource: currentNote.source,
    });
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    editNote(
      note.id,
      note.etitle,
      note.edescription,
      note.etag,
      note.ecompany,
      note.ejobLink,
      note.elocation,
      note.estatus,
      note.esource
    );
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Application
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-2" id="jobForm1" onSubmit={handleClick1}>
                <div className="mb-2">
                  <label htmlFor="tag" className="form-label">
                    Title / Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="Dream Role"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ecompany"
                    name="ecompany"
                    onChange={onChange}
                    value={note.ecompany}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="elocation"
                    name="elocation"
                    placeholder="City / Remote / Hybrid"
                    onChange={onChange}
                    value={note.elocation}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="jobLink" className="form-label">
                    Job Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ejobLink"
                    placeholder="URL"
                    name="ejobLink"
                    onChange={onChange}
                    value={note.ejobLink}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    id="estatus"
                    name="estatus"
                    className="form-select"
                    onChange={onChange}
                    value={note.estatus}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="source" className="form-label">
                    Source
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="esource"
                    name="esource"
                    placeholder="LinkedIn, referral, etc."
                    onChange={onChange}
                    value={note.esource}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Notes / Description / Salary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    required
                    minLength={6}
                  />
                </div>
                {/* <div className="mb-2">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                form="jobForm1"
                // onClick={handleClick}
                // disabled={
                //   note.etitle.length < 5 || note.edescription.length < 6
                // }
              >
                Update Job
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 " id="adjust">
        <h2 className="my-4" style={{ fontFamily: "Georgia" }}>
          Application Tracker
        </h2>
        <div className="container">
          {notes.length === 0 && "No job entries found. Start tracking now!"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              note={note}
              updateNote={updateNote}
              key={note._id}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
