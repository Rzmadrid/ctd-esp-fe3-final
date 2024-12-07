
import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";

const Favs = () => {
  const { state } = useUserStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      </div>
    </>
  );
};

export default Favs;
