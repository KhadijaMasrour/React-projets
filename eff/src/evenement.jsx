
function Evenements({ evenements }) {
  let total = 0;

  evenements.forEach((e) => {
    total += e.cout_journalier * e.durée;
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Description</th>
          <th>Coût journalier</th>
          <th>Durée</th>
          <th>Coût total</th>
        </tr>
      </thead>

      <tbody>
        {evenements.map((e, i) => (
          <tr key={i}>
            <td>{e.thème}</td>
            <td>{e.date_debut}</td>
            <td>{e.date_fin}</td>
            <td>{e.description}</td>
            <td>{e.cout_journalier} DH</td>
            <td>{e.durée}</td>
            <td>{e.cout_journalier * e.durée} DH</td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="7">
            Total des coûts : {total} DH
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenements;
