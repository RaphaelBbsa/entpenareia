import { useState } from 'react'
import './index.css'
type clientType = {
  id: string,
  first_name: string,
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
}
export function NewBookings() {
  const [user, setUser] = useState([])

    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
 
    fetch(`https://lokatur.com.br/users/new`, options)
    .then(response => response.json())
    .then(response => {
      setUser(response)
      console.log(response)
    })
    .catch(err => console.error(err));

  

  
  return (
    <main className=' flex flex-col justify-center items-center'>
      <table>
       <thead>
         <tr className='border'>
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
      {user.map((client:clientType) => (
         <tr key={client.created_at} className='border'>
           <td className='border'>{client.first_name} {client.last_name}</td>
           <td className='border'>{client.email}</td>
           <td className='border'>{client.phone}</td>
           <td className='border'>{client.booking_status}</td>
           <td className='border'>{client.booking_date}</td>
           <td className='border'>{client.check_in}</td>
           <td className='border'>{client.check_out}</td>
           <td className='border'>{client.check_in_message}</td>
           <td className='border'>{client.check_out_message}</td>
           <td className='border'>{client.concierge_message}</td>
           <td className='border'>{client.new_booking_message}</td>
         </tr>
      ))}
       </tbody>
     </table>
    </main>
  )
}

