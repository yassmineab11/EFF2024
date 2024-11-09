import React from 'react';
import expertsData from './data';
import Expert from './Expert';

const ExpertsList = () => {
  return (
    <div className="container mt-4">
      <ul>
        {expertsData.map((expert) => (
          <li key={expert.id}>
            <Expert expert={expert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertsList;
