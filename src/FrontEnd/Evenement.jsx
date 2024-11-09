import React from 'react';

const Evenement = ({ evenements }) => {
    
  const coutTotal = evenements.reduce(
    (total, evenement) => total + evenement.cout_journalier * evenement.durée,
    0
  );

  return (
    <div>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Thème</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Description</th>
            <th>Coût Journalier (DH)</th>
            <th>Durée (jours)</th>
            <th>Coût Total Event (DH)</th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((evenement, index) => {
            const coutTotalEvent = evenement.cout_journalier * evenement.durée;
            return (
              <tr key={index}>
                <td>{evenement.thème}</td>
                <td>{evenement.date_debut}</td>
                <td>{evenement.date_fin}</td>
                <td>{evenement.description}</td>
                <td>{evenement.cout_journalier}</td>
                <td>{evenement.durée}</td>
                <td>{coutTotalEvent}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-end">Total des coûts des événements assurés est :</td>
            <td className="text-danger">{coutTotal} DH</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Evenement;
