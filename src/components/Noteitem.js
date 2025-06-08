import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import image from "./image.png";
import logo from "./main.gif";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="card mb-3 shadow-sm " style={{ maxWidth: "600px" }}>
        <div className="my-1 align-self-end">
          <i
            className="fa-regular fa-trash-can mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Successfully", "success");
            }}
          ></i>
          <i
            className="fa-regular fa-pen-to-square mx-3"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
        <div className="row g-0">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <img src={logo} className="img-fluid rounded-start p-2" alt="Job" />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              {note.title && (
                <h5
                  className="card-title fw-bold"
                  style={{ fontFamily: "Georgia" }}
                >
                  {" "}
                  {note.title}
                </h5>
              )}
              {note.company && (
                <h6 className="text-muted mb-1">
                  <strong>Company : </strong> {note.company} — {note.location}
                </h6>
              )}
              <p className="card-text mb-2">{note.description}</p>

              <div className="mb-2">
                <span className="badge bg-info me-2">{note.tag}</span>
                <span
                  className={`badge ${
                    note.status === "Offer"
                      ? "bg-success"
                      : note.status === "Rejected"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {note.status}
                </span>
              </div>

              {note.source && (
                <p className="mb-1">
                  <strong>Source:</strong> {note.source}
                </p>
              )}
              {note.jobLink && (
                <a
                  href={note.jobLink}
                  className="btn btn-sm btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Job
                </a>
              )}
              <p className="card-text mt-2">
                <small className="text-body-secondary">
                  Applied on: {new Date(note.date).toLocaleDateString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
