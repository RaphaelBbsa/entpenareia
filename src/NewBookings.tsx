import { useEffect, useState } from 'react'
import './index.css'
type clientType = {
  id: string,
  first_name: string,
  localizer: string,
  last_name: string,
  email: string,
  phone: string,
  created_at:string,
  booking_date: string,
  check_in: string,
  check_out: string,
  booking_status: string,
  check_in_message: string,
  check_out_message: string,
  concierge_message: string,
  new_booking_message: string,
  checked: boolean
}
export function NewBookings() {
  const [user, setUser] = useState([])

    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
 
    useEffect(() => {
    fetch(`https://lokatur.com.br/users/new`, options)
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

  return (
    <main className=' flex flex-col justify-center items-center'>
      <table>
       <thead>
         <tr className='border'>
           <th>checked</th>
           <th>Localizador</th>
           <th>Nome</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Booking Status</th>
           <th>Booking Date</th>
           <th>Checkin</th>
           <th>Checkout</th>
           <th>Checkin Message</th>
           <th>Checkout Message</th>
           <th>Concierge Message</th>
           <th>New Booking Message</th>
         </tr>
       </thead>
       <tbody>
      {sortedUsers?.map((client:clientType) => (
         <tr key={client.created_at} className='border'>
           <td className='item'>{client.checked}</td>
           <td className='item'>{client.localizer}</td>
           <td className='item'>{client.first_name} {client.last_name}</td>
           <td className='item'>{client.email}</td>
           <td className='item'>{client.phone}</td>
           <td className='item'>{client.booking_status}</td>
           <td className='item'>{client.booking_date}</td>
           <td className='item'>{client.check_in}</td>
           <td className='item'>{client.check_out}</td>
           <td className='item'>{client.check_in_message}</td>
           <td className='item'>{client.check_out_message}</td>
           <td className='item'>{client.concierge_message}</td>
           <td className='item'>{client.new_booking_message}</td>
         </tr>
      ))}
       </tbody>
     </table>
    </main>
  )
}

