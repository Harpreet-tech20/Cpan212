import { useEffect, useState } from 'react';

const Education = () => {
  const [edu, setEdu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(res => res.json())
      .then(setEdu);
  }, []);

  return (
    <div className="p-3">
      <h2>Education</h2>
      <ul>
        {edu.map((e, i) => (
          <li key={i}>{e.degree} - {e.school} ({e.year})</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
