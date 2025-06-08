import React, { useRef, useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Newadd = (props) => {
  const ref = useRef(null);
  const refClose = useRef(null);
  const context = useContext(noteContext);
  const { addNote } = context;

  const AddClick = () => {
    ref.current.click();
  };

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
    company: "",
    jobLink: "",
    location: "",
    status: "",
    source: "",
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    refClose.current.click();
    e.preventDefault();

    addNote(
      note.title,
      note.description,
      note.tag,
      note.company,
      note.jobLink,
      note.location,
      note.status,
      note.source
    );
    setNote({
      title: "",
      description: "",
      tag: "",
      company: "",
      location: "",
      jobLink: "",
      status: "",
      source: "",
    });
    props.showAlert("Added Successfully", "success");
  };
  return (
    <>
      <div className="container d-flex justify-content-end">
        <button type="button" className="btn btn-primary" onClick={AddClick}>
          New Job Entry
        </button>
      </div>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Application
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-2" id="jobForm" onSubmit={handleClick}>
                <div className="mb-2">
                  <label htmlFor="tag" className="form-label">
                    Title / Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    placeholder="Dream Role"
                    onChange={onChange}
                    value={note.tag}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    onChange={onChange}
                    value={note.company}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={onChange}
                    value={note.title}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    placeholder="City / Remote / Hybrid"
                    onChange={onChange}
                    value={note.location}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="jobLink" className="form-label">
                    Job Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobLink"
                    placeholder="URL"
                    name="jobLink"
                    onChange={onChange}
                    value={note.jobLink}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="form-select"
                    onChange={onChange}
                    value={note.status}
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
                    id="source"
                    name="source"
                    placeholder="LinkedIn, referral, etc."
                    onChange={onChange}
                    value={note.source}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Notes / Description / Salary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={onChange}
                    value={note.description}
                    required
                    minLength={6}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                form="jobForm"
                // onClick={handleClick}
                // disabled={note.title.length < 5 || note.description.length < 6}
              >
                Save Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newadd;
