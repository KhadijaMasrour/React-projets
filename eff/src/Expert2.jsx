
import expertsData from "./data.jsx";
import Expert from "./Expert.jsx";

function Experts2() {
  return (
    <ul>
      {expertsData.map((expert) => (
        <Expert
          key={expert.id}
          expert={expert}
        />
      ))}
    </ul>
  );
}

export default Experts2;
