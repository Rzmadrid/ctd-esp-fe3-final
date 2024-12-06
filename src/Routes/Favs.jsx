
import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useUserStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      </div>
    </>
  );
};

export default Favs;
