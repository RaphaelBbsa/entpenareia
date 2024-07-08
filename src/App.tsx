import { useState } from 'react'
import './index.css'
type clientType = {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  booking_date: string,
  check_in: string,
  check_out: string,
  booking_status: string,
  check_in_message: string,
  check_out_message: string,
  concierge_message: string,
  new_booking_message: string,
  subscriber_id: string,
  checked: boolean
}
function App() {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')

  function getUser(localizer:string){
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
 
    fetch(`https://lokatur.com.br/users/${localizer}`, options)
    .then(response => response.json())
    .then(response => {
      setUser(response)
      console.log(response)
    })
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
      
      <button 
      className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      type="submit" name='Procurar'>Procurar reserva</button>
    </form>
      <div>
      {user.map((client:clientType) => (
        <div key={client.id} className=" flex flex-row  ">
          <div>
          Nome
          <p className=' w-fit border border-white px-2 py-1'>{client.first_name} {client.last_name}</p>
          </div>
          <div>
          BotConversa
          <p className=' w-fit border border-white px-2 py-1'> {client.subscriber_id}</p>
          </div>
          <div>
          status
          <p className=' w-fit border border-white px-2 py-1'> {client.checked}</p>
          </div>
          <div>
          Email
          <p className=' w-fit border border-white px-2 py-1'>{client.email}</p>
          </div>
          <div>
          Phone
          <p className=' w-fit border border-white px-2 py-1'>{client.phone}</p>
          </div>
          <div>
          Booking status
          <p className=' w-full border border-white px-2 py-1'>{client.booking_status}</p>
          </div>
          <div>
          Booking date
          <p className=' w-full border border-white px-2 py-1'>{client.booking_date}</p>
          </div>
          <div>
          Checkin
          <p className=' w-full border border-white px-2 py-1'>{client.check_in}</p>
          </div>
          <div>
          Checkout
          <p className=' w-full border border-white px-2 py-1'>{client.check_out}</p>
          </div>
          <div>
          Checkin message
          <p className=' w-full border border-white px-2 py-1'>{client.check_in_message}</p>
          </div>
          <div>
          Checkout message
          <p className=' w-full border border-white px-2 py-1'>{client.check_out_message}</p>
          </div>
          <div>
          Concierge message
          <p className=' w-full border border-white px-2 py-1'>{client.concierge_message}</p>
          </div>
          <div>
          New booking message
          <p className=' w-full border border-white px-2 py-1'>{client.new_booking_message}</p>
          </div>
          <div>

          </div>
        </div>
      ))}
      </div>
    </main>
  )
}

export default App
