
import Card from '../Components/Card'
import { useUserStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users } = useUserStates();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      </div>
    </main>
  )
}

export default Home