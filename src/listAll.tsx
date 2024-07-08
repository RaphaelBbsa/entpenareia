import { useEffect, useState } from 'react'
import './index.css'
import { Booking } from './components/booking'
export type clientType = {
  checked:boolean,
  id: string,
  localizer: string,
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
export function ListCheckins() {
  const [user, setUser] = useState([])
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    useEffect(() => {
    fetch(`https://lokatur.com.br/users/checkin`, options)
    .then(response => response.json())
    .then(response => {
      setUser(response)
    
    })
    .catch(err => console.error(err));
  }, [])
  const sortedUsers = [...user].sort((a:clientType, b:clientType) => {
    // Convertendo as datas para objetos Date para compará-las
    const dateA = new Date(a.check_in);
    const dateB = new Date(b.check_in);
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
      {sortedUsers.map((client:clientType) => (
          <Booking key={client.id} client={client}/>
      ))}
       </tbody>
     </table>
    </main>
  )
}

