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
  const [phone, setPhone] = useState('')
  const [localizer, setLocalizer] = useState('')

  function updateUser(){
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      localizer: localizer,
      phone: phone
      })
    };
 
    fetch(`https://lokatur.com.br/users/phone`, options)
    .then(response => response.json())
    .then(response => setUser(response))
    .catch(err => console.error(err));
   }
  
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUser()
  }
  
  return (
    <main className=' flex flex-col justify-center items-center h-screen'>
    <form onSubmit={handleSubmit} 
    className=' mb-8 w-auto flex flex-row gap-2 justify-center items-center'>
      <label className='flex flex-row gap-1 '>Localizador 
        <input 
          className='border border-white px-1 rounded bg-slate-700 w-[200px] h-8'
          type="text" 
          value={localizer}
          onChange={(e) => setLocalizer(e.target.value)}
        />
      </label>
      <label className='flex flex-row gap-1 '>Telefone 
        <input 
          className='border border-white px-1 rounded bg-slate-700 w-[200px] h-8'
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button 
      className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      type="submit" name='Procurar'>Procurar reserva</button>
    </form>
      <div>
      {user.map((client:clientType) => (
        <div key={client.id} className=" flex flex-row  ">
          <p className=' w-fit border border-white px-1'>{client.phone}</p>
        </div>
      ))}
      </div>
    </main>
  )
}

export default App
