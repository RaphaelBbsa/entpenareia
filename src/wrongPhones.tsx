import { useEffect, useState } from 'react'
import './index.css'
import { api } from '../util.ts'
type clientType = {
  id: string,
  localizer: string,
  email: string,
  phone: string,
}

export function WrongPhones() {
  const [user, setUser] = useState([])
  const [checkInUser, setCheckInUser] = useState([])
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  };
  useEffect(() => {
  fetch(`${api}/wrong-phones`, options)
  .then(response => response.json())
  .then(response => {
    setUser(response)
    console.log(response)
  })
  .catch(err => console.error(err));
}, [])

useEffect(() => {
  fetch(`${api}/check-in-wrong-phones`, options)
  .then(response => response.json())
  .then(response => {
    setCheckInUser(response)
    console.log(response)
  })
  .catch(err => console.error(err));
}, [])
  return (
    <main className=' flex flex-col justify-center items-center'>
      <h2 className=' font-semibold text-2xl my-6'>Reservas de hoje</h2>
    {user.length !== 0 ?
    <table>
    <thead>
      <tr className='border'>
       <th>Localizador</th>
       <th>Email</th>
       <th>Phone</th>
      </tr>
    </thead>
    <tbody>
   {user?.map((client:clientType) => (
      <tr key={client.id} className='border'>
        <td className='item'>{client.localizer}</td>
        <td className='item'>{client.email}</td>
        <td className='item'>{client.phone}</td>
      </tr>
   ))}
    </tbody>
  </table> : <h2 className=' text-red-500'>Não há registros</h2>
    }
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200" />
      <h2 className=' font-semibold text-2xl my-6'>Check-in's de hoje</h2>

  { checkInUser.length !== 0 ? 
   <table>
     <thead>
       <tr className='border'>
        <th>Localizador</th>
        <th>Email</th>
        <th>Phone</th>
       </tr>
     </thead>
     <tbody>
   
    {checkInUser?.map((client:clientType) => (
       <tr key={client.id} className='border'>
         <td className='item'>{client.localizer}</td>
         <td className='item'>{client.email}</td>
         <td className='item'>{client.phone}</td>
       </tr>
    ))}
     </tbody>
   </table> : <h2 className=' text-red-500'>Não há registros</h2>  }
  </main>
  )}