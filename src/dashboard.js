// Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [visible, setVisible] = useState(true);
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(30);
  const [link, setLink] = useState('');

  const handleToggleVisibility = () => {
    setVisible(!visible);
    axios.post('/api/banner/visibility', { visible });
  };

  const handleUpdateDescription = (e) => {
    setDescription(e.target.value);
    axios.post('/api/banner/description', { description });
  };

  const handleUpdateTimer = (e) => {
    setTimer(e.target.value);
    axios.post('/api/banner/timer', { timer });
  };

  const handleUpdateLink = (e) => {
    setLink(e.target.value);
    axios.post('/api/banner/link', { link });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <label>
        <input
          type="checkbox"
          checked={visible}
          onChange={handleToggleVisibility}
        />
        Toggle banner visibility
      </label>
      <br />
      <label>
        Banner description:
        <input
          type="text"
          value={description}
          onChange={handleUpdateDescription}
        />
      </label>
      <br />
      <label>
        Banner timer (seconds):
        <input
          type="number"
          value={timer}
          onChange={handleUpdateTimer}
        />
      </label>
      <br />
      <label>
        Banner link:
        <input
          type="text"
          value={link}
          onChange={handleUpdateLink}
        />
      </label>
    </div>
  );
};

export default Dashboard;