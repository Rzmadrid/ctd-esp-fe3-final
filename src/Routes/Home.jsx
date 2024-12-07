
import Card from '../Components/Card'
import { useUserStates } from '../Context/Context';

const Home = () => {
  const { state } = useUserStates();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      </div>
    </main>
  )
}

export default Home