import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Card = ({ user } ) => {
  const { setFavs } = useUserStates();
 
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((favs) => [...favs, user]);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${user.id}`}>
          {/* <img src="./images/doctor.jpg" alt={user.name} /> */}
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.id}</h3>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;

{/*  */}