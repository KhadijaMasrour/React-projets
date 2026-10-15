import { useState } from "react";

function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expert, setExpert] = useState("");
  const [resultat, setResultat] = useState(null);

  function confirmer(e) {
    e.preventDefault();

    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    const duree =
      Math.round((fin - debut) / (1000 * 60 * 60 * 24));

    setResultat({
      theme,
      dateDebut,
      dateFin,
      cout,
      expert,
      duree,
      total: Number(cout) * duree
    });
  }

  return (
    <div>
      <h3>Formulaire de l'événement</h3>

      <form onSubmit={confirmer}>
        <label>Thème :</label>
        <input
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />
        <br />

        <label>Date de début :</label>
        <input
          type="date"
          value={dateDebut}
          onChange={(e) => setDateDebut(e.target.value)}
          required
        />
        <br />

        <label>Date de fin :</label>
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
          required
        />
        <br />

        <label>Coût journalier :</label>
        <input
          type="number"
          value={cout}
          onChange={(e) => setCout(e.target.value)}
          required
        />
        <br />

        <label>Expert :</label>
        <input
          value={expert}
          onChange={(e) => setExpert(e.target.value)}
          required
        />
        <br />

        <button type="submit">Confirmer</button>
      </form>

      {resultat && (
        <p>
          L'expert : {resultat.expert} assurera le thème :
          {resultat.theme}, avec un coût journalier de :
          {resultat.cout} DH, pour une durée de :
          {resultat.duree} jours, soit un coût total de :
          {resultat.total} DH.
        </p>
      )}
    </div>
  );
}

export default Formulaire;
