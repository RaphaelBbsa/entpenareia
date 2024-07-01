import { useEffect, useState } from 'react'
import './index.css'
import { api } from '../util.ts'
type clientType = {
  id: string,
  localizer: string,
  email: string,
  phone: string,
  booking_date:string,
  subscriber_id:string,
  check_in:string,
  new_booking_message?: string,
  check_in_message?: string
}

export function WrongPhones() {
  const [user, setUser] = useState([])
  const [pastUsers, setPastUsers] = useState([])
  const [checkInUser, setCheckInUser] = useState([])
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  };
  useEffect(() => {
    fetch(`${api}/past-wrong-phones`, options)
    .then(response => response.json())
    .then(response => {
      setPastUsers(response)
      console.log(response)
    })
    .catch(err => console.error(err));
  }, [])
  const sortedPastUsers = [...pastUsers].sort((a:clientType, b:clientType) => {
    // Convertendo as datas para objetos Date para compará-las
    const dateA = new Date(a.booking_date);
    const dateB = new Date(b.booking_date);
    return dateA.getTime() - dateB.getTime(); // Ordene em ordem crescente, para ordem decrescente, basta trocar para 'dateB.getTime() - dateA.getTime()'
  });

  useEffect(() => {
  fetch(`${api}/wrong-phones`, options)
  .then(response => response.json())
  .then(response => {
    setUser(response)
    console.log(response)
  })
  .catch(err => console.error(err));
}, [])
const sortedUsers = [...user].sort((a:clientType, b:clientType) => {
  // Convertendo as datas para objetos Date para compará-las
  const dateA = new Date(a.booking_date);
  const dateB = new Date(b.booking_date);
  return dateA.getTime() - dateB.getTime(); // Ordene em ordem crescente, para ordem decrescente, basta trocar para 'dateB.getTime() - dateA.getTime()'
});

useEffect(() => {
  fetch(`${api}/check-in-wrong-phones`, options)
  .then(response => response.json())
  .then(response => {
    setCheckInUser(response)
    console.log(response)
  })
  .catch(err => console.error(err));
}, [])
const sortedUsersCheckin = [...checkInUser].sort((a:clientType, b:clientType) => {
  // Convertendo as datas para objetos Date para compará-las
  const dateA = new Date(a.check_in);
  const dateB = new Date(b.check_in);
  return dateA.getTime() - dateB.getTime(); // Ordene em ordem crescente, para ordem decrescente, basta trocar para 'dateB.getTime() - dateA.getTime()'
});
  return (
    <main className=' flex flex-col justify-center items-center'>   
      <h2 className=' font-semibold text-2xl my-6'>Reservas antigas</h2>
      {pastUsers.length !== 0 ?
    <table>
    <thead>
      <tr className='border'>
      <th>Mensagem</th>
      <th>BotConversa ID</th>
      <th>Booking Date</th>
      {/* <th>Check-in Date</th> */}
      <th>Localizador</th>
      <th>Email</th>
      <th>Phone</th>
      </tr>
    </thead>
    <tbody>
   {sortedPastUsers?.map((client:clientType) => (
      <tr key={client.id} className='border'>
        <td className='item'>{client.new_booking_message ? <p>✅</p> : <p>❌</p>}</td>
        <td className='item'>{client.subscriber_id}</td>
        <td className='item'>{client.booking_date}</td>
        {/* <td className='item'>{client.check_in}</td> */}
        <td className='item'>{client.localizer}</td>
        <td className='item'>{client.email}</td>
        <td className='item'>{client.phone}</td>
      </tr>
   ))}
    </tbody>
  </table> : <h2 className=' text-red-500'>Não há registros</h2>
    }
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200" />
      <h2 className=' font-semibold text-2xl my-6'>Reservas de hoje</h2>
    {user.length !== 0 ?
    <table>
    <thead>
      <tr className='border'>
      <th>Mensagem</th>
      <th>BotConversa ID</th>
      <th>Booking Date</th>
      {/* <th>Check-in Date</th> */}
      <th>Localizador</th>
      <th>Email</th>
      <th>Phone</th>
      </tr>
    </thead>
    <tbody>
   {sortedUsers?.map((client:clientType) => (
      <tr key={client.id} className='border'>
        <td className='item'>{client.new_booking_message ? <p>✅</p> : <p>❌</p>}</td>
        <td className='item'>{client.subscriber_id}</td>
        <td className='item'>{client.booking_date}</td>
        {/* <td className='item'>{client.check_in}</td> */}
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

  { sortedUsersCheckin.length !== 0 ? 
   <table>
     <thead>
       <tr className='border'>
        <th>Mensagem</th>
        <th>BotConversa ID</th>
        {/* <th>Booking Date</th> */}
        <th>Check-in</th>
        <th>Localizador</th>
        <th>Email</th>
        <th>Phone</th>
       </tr>
     </thead>
     <tbody>
   
    {sortedUsersCheckin?.map((client:clientType) => (
       <tr key={client.id} className='border'>
        <td className='item'>{client.check_in_message ? <p>✅</p> : <p>❌</p>}</td>
        <td className='item'>{client.subscriber_id}</td>
        {/* <td className='item'>{client.booking_date}</td> */}
        <td className='item'>{client.check_in}</td>
        <td className='item'>{client.localizer}</td>
        <td className='item'>{client.email}</td>
        <td className='item'>{client.phone}</td>
       </tr>
    ))}
     </tbody>
   </table> : <h2 className=' text-red-500'>Não há registros</h2>  }
  </main>
  )}