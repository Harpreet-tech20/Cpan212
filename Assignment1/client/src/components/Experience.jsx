import { useEffect, useState } from 'react';

const Experience = () => {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then(res => res.json())
      .then(setExp);
  }, []);

  return (
    <div className="p-3">
      <h2>Experience</h2>
      <ul>
        {exp.map((e, i) => (
          <li key={i}>{e.title} at {e.company} ({e.years})</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
