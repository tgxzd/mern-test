import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUser')
      .then((response) => {
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    
    <div className='center'>
      <h2>MERN APP (EXPRESS , MONGO , REACT , NODE)</h2>
      {
        users.map(user => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default App;
