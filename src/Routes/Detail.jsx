import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
 
  const [user, setUser] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      
      setUser(res.data);
    });
  }, []);

  return (
    <div className="detalle">
      <h1>Detalle Dentista: {user.id} </h1>
      <h2>{user.name}</h2>
      <img src="/images/doctor.jpg" alt='Doctor' className='imgDetail'/> 
      <h4> {user.email}</h4>
      <h4>{user.phone}</h4>
      <h4>{user.website}</h4>
    </div>
  )
}

export default Detail