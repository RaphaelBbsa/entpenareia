import { useState } from 'react'
import './index.css'
// type clientType = {
//   id: string,
//   first_name: string,
//   last_name: string,
//   email: string,
//   phone: string,
//   created_at: string,
//   booking_date: string
// }
export function CheckBooking() {
  const [user, setUser] = useState()
  const [phone, setPhone] = useState(false)
  const [localizer, setLocalizer] = useState('')

 
  function updateUser(){
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      id: localizer,
      check: phone
      })
    };
 console.log(options)
    fetch(`https://lokatur.com.br/users/checksub`, options)
    .then(response => response.json())
    .then(response => setUser(response))
    .catch(err => console.error(err));
   }
   
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUser()
  }
  if (user === 1){
    return (
    <div>
    {user && <div  className=" flex flex-row justify-center items-center h-screen w-screen">
        <p className=' w-fit text-xl px-1'>Status atualizado</p>
      </div>
    }
  </div>
    )
  } else {
  return (
    <main className=' flex flex-col justify-center items-center h-screen'>
    <form onSubmit={handleSubmit} 
    className=' mb-8 w-auto flex flex-row gap-2 justify-center items-center'>
     <div className=' flex flex-col gap-4 justify-center items-center'>
     <label className='flex flex-col gap-1 '>
     Id BotConversa 
        <input 
          className='border border-white px-1 rounded bg-slate-700 w-max h-8'
          type="text" 
          placeholder='Ex: 8763945'
          value={localizer}
          onChange={(e) => setLocalizer(e.target.value)}
        />
      </label>
      
      <label
      className='flex justify-center items-center gap-2'
      > Marcar reserva como concluída
      <input 
       className='border border-white px-1 rounded bg-slate-700 w-4 h-8'
      type="checkbox" 
      id="phone" 
      name="phone" 
      value={phone ? 0: 1}
      onChange={(e) => setPhone(e.target.checked)}
      />
      </label>
    
      <button 
      className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      type="submit" name='Procurar'>Atualizar</button>
     </div>
 
    </form>
    </main>
  )
  }
}

