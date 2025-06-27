import { useEffect, useState } from 'react';

const Overview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-3">
      <h2>About Me</h2>
      {data && (
        <>
          <p><strong>Name:</strong> {data.name}</p>
          <p>{data.about}</p>
        </>
      )}
    </div>
  );
};

export default Overview;
