import { useState } from 'react'
import './index.css'
type clientType = {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  created_at: string,
  booking_date: string
}
function App() {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')

  function getUser(localizer:string){
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
 
    fetch(`http://0.0.0.0:8000/users/${localizer}`, options)
    .then(response => response.json())
    .then(response => setUser(response))
    .catch(err => console.error(err));
   }
  
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getUser(search)
  }
  
  return (
    <main className=' flex flex-col justify-center items-center h-screen'>
    <form onSubmit={handleSubmit} 
    className=' mb-8 w-auto flex flex-row gap-2 justify-center items-center'>
      <label className='flex flex-row gap-1 '>Localizador 
        <input 
          className='border border-white px-1 rounded bg-slate-700 w-[200px] h-8'
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      Procurar
      <input type="submit" name='Procurar'/>
    </form>
      <div>
      {user.map((client:clientType) => (
        <div key={client.id} className=" flex flex-row  ">
          <p className=' w-fit border border-white px-1'>{client.first_name} {client.last_name}</p>
          <p className=' w-fit border border-white px-1'>{client.email}</p>
          <p className=' w-fit border border-white px-1'>{client.phone}</p>
          <p className=' w-fit border border-white px-1'>{client.created_at}</p>
          <p className=' w-fit border border-white px-1'>{client.booking_date}</p>
        </div>
      ))}
      </div>
    </main>
  )
}

export default App
