import React, { useEffect, useState } from 'react';

const Demo = () => {
  const [data, setData] = useState({ name: '', age: 0 });

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Empty dependencies array to run the effect only once on component mount

  useEffect(() => {
    // Update localStorage when data changes
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]); // Run the effect whenever the 'data' state changes

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={handleChange}
      />
    </div>
  );
};

export default Demo;
