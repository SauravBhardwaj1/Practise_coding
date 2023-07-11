import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data'); 
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilter = (filterValue) => {
    const filteredItems = data.filter(item => item.completed === filterValue); 
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <button onClick={() => handleFilter('filterValue')}>Filter Data</button> 
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
