import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card shadow p-4">
          <h2 className="mb-3 text-primary">About JobLogix</h2>
          <p>
            <strong>JobLogix</strong> is your personal job application tracker,
            designed to help you stay organized, focused, and efficient during
            your job search journey.
          </p>
          <ul>
            <li>
              <strong>Add, edit, and delete</strong> job applications
              effortlessly.
            </li>
            <li>
              Track important details like{" "}
              <strong>company, job title, status, location, and source</strong>.
            </li>
            <li>
              Stay updated with <strong>real-time application status</strong>{" "}
              and offer tracking.
            </li>
            <li>
              Clean, responsive UI built with{" "}
              <strong>React and Bootstrap</strong>.
            </li>
            <li>
              Data stored securely via a{" "}
              <strong>Node.js & MongoDB backend</strong>.
            </li>
          </ul>
          <p>
            Whether you're applying for internships, full-time jobs, or
            freelance gigs, JobLogix helps you stay on top of your career goals.
          </p>
          <p className="text-muted">
            Made with ❤️ by Ayush Kumbhalkar — for developers, by a developer.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
