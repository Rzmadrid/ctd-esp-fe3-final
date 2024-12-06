import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  return (
    <div className="detalle">
      <h1>Detalle Dentista: {user.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{user.name}</h2>
      <img src="/public/images/doctor.jpg" alt='Doctor' className='imgDetail'/> 
      <h4> {user.email}</h4>
      <h4>{user.phone}</h4>
      <h4>{user.website}</h4>
    </div>
  )
}

export default Detail