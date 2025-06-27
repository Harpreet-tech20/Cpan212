import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getProjects')
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="p-3">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div className="card mb-2" key={i}>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
