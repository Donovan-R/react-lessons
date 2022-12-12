import React, { useState, useEffect } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const getJobs = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setIsLoading(false);
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[index];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>reviews</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              const { company, order } = job;
              return (
                <button
                  className="job-btn"
                  key={order}
                  onClick={() => setIndex(index)}
                >
                  {company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => (
              <div className="job-desc" key={index}>
                <MdOutlineDoubleArrow />
                <p>{duty}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default App;
