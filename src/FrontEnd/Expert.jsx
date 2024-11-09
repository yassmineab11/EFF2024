import React from 'react';
import Evenement from './Evenement';

const Expert = ({ expert }) => {
  return (
    <div className="expert-section mb-4">
      <h2 className="mb-3">{expert.nom_complet}</h2>
      <Evenement evenements={expert.événements} />
    </div>
  );
};

export default Expert;
