import { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getSkills')
      .then(res => res.json())
      .then(setSkills);
  }, []);

  return (
    <div className="p-3">
      <h2>Skills</h2>
      <ul className="list-inline">
        {skills.map((skill, i) => (
          <li className="list-inline-item badge bg-primary m-1" key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
