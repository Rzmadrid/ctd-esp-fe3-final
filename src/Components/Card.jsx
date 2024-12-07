import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Card = ({ user } ) => {
  const { dispatch, state } = useUserStates();
  const findFav = state.favs.find((fav) => fav.id === user.id);

  const toggleFav = ()=>{   
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: user });
  }

  return (
    <div className="card">
        <Link to={`/detail/${user.id}`}>
          <img src="/images/doctor.jpg" alt='doctor' className='imgHome'/> 
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.id}</h3>
        </Link>
        <button onClick={toggleFav} className="favButton">{ findFav ? "⭐" : "Add fav ✩"}</button>
    </div>
  );
};

export default Card;