import React from 'react';
import expertsData from './data';
import Evenement from './Evenement';

const ExpertDetails = ({ expertId }) => {
  const expert = expertsData.find((exp) => exp.id === expertId);

  if (!expert) {
    return <p>Expert non trouvé.</p>;
  }

  return (
    <div>
      <Evenement evenements={expert.événements} />
    </div>
  );
};

export default ExpertDetails;
