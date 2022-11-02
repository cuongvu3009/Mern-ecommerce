import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('/users');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Click to fetch users</button>
      Test
    </div>
  );
};

export default Test;
