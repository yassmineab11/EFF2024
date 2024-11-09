import React, { useState } from 'react';

const Formulaire = () => {
  const [theme, setTheme] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [cout, setCout] = useState('');
  const [expert, setExpert] = useState('');
  const [soumettre, setSoumettre] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSoumettre(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Formulaire d'événement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="theme" className="form-label">Thème :</label>
          <input
            type="text"
            className="form-control"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateDebut" className="form-label">Date de début :</label>
          <input
            type="date"
            className="form-control"
            id="dateDebut"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFin" className="form-label">Date de fin :</label>
          <input
            type="date"
            className="form-control"
            id="dateFin"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cout" className="form-label">Coût :</label>
          <input
            type="number"
            className="form-control"
            id="cout"
            value={cout}
            onChange={(e) => setCout(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expert" className="form-label">Expert :</label>
          <input
            type="text"
            className="form-control"
            id="expert"
            value={expert}
            onChange={(e) => setExpert(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Confirmer</button>
      </form>

      {soumettre && (
        <div className="mt-4">
          <h3>Informations saisies :</h3>
          <ul>
            <li><strong>Thème :</strong> {theme}</li>
            <li><strong>Date de début :</strong> {dateDebut}</li>
            <li><strong>Date de fin :</strong> {dateFin}</li>
            <li><strong>Coût :</strong> {cout} €</li>
            <li><strong>Expert :</strong> {expert}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Formulaire;