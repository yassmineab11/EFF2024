import React, { useState, useEffect } from 'react';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedExperts = [
      {
        id: 1,
        nom_complet: "Dupont Jean",
        événements: [
          {
            thème: "Développement Web",
            date_debut: "2024-03-01",
            date_fin: "2024-03-06",
            description: "Introduction au développement web moderne",
            cout_journalier: 400,
            durée: 7
          },
          {
            thème: "Applications Mobiles",
            date_debut: "2024-04-01",
            date_fin: "2024-04-04",
            description: "Conception et développement d’applications mobiles",
            cout_journalier: 600,
            durée: 4
          }
        ]
      },
      {
        id: 2,
        nom_complet: "Martin Sophie",
        événements: [
          {
            thème: "Sécurité informatique",
            date_debut: "2024-03-10",
            date_fin: "2024-03-12",
            description: "Ateliers avancés sur la sécurité informatique",
            cout_journalier: 600,
            durée: 3
          },
          {
            thème: "Big Data Analytics",
            date_debut: "2024-05-01",
            date_fin: "2024-05-02",
            description: "Analyse de données massives avec les technologies Big Data",
            cout_journalier: 800,
            durée: 2
          }
        ]
      }
    ];
    setExperts(fetchedExperts);
  }, []);

  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Liste des Experts et leurs Événements</h2>
      <ul className="list-group">
        {experts.map(expert => (
          <li key={expert.id} className="list-group-item">
            <h5>{expert.nom_complet}</h5>
            <ul className="list-group">
              {expert.événements.map((événement, index) => (
                <li key={index} className="list-group-item">
                  <h6>Thème : {événement.thème}</h6>
                  <p><strong>Date de début :</strong> {événement.date_debut}</p>
                  <p><strong>Date de fin :</strong> {événement.date_fin}</p>
                  <p><strong>Description :</strong> {événement.description}</p>
                  <p><strong>Coût journalier :</strong> {événement.cout_journalier} €</p>
                  <p><strong>Durée :</strong> {événement.durée} jours</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts2;
