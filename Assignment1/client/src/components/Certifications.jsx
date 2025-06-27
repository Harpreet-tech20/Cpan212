import { useEffect, useState } from 'react';

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getCerts')
      .then(res => res.json())
      .then(setCerts);
  }, []);

  return (
    <div className="p-3">
      <h2>Certifications</h2>
      <ul>
        {certs.map((c, i) => (
          <li key={i}>{c.name} ({c.year})</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
