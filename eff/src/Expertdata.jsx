import expertsData from "./data";
import Expert from "./Expert";

function Experts1() {
  return (
    <ul>
      {expertsData.map((expert) => (
        <Expert key={expert.id} expert={expert} />
      ))}
    </ul>
  );
}

export default Experts1;
