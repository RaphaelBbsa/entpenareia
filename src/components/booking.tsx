import { useState } from 'react'
import '../index.css'

export function Booking({client}: any) {
  const [bookingStatus, setBookingStatus] = useState<boolean>( )

async function selectForm(e:any){
   await setBookingStatus(e)
   console.log(bookingStatus)
 }
  function CheckBooking(e:any){
    selectForm(e)
  const options = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    id: client.subscriber_id,
    check: e === 'false' ? false : true
    })
  };

  fetch(`https://lokatur.com.br/users/checksub`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 }
  return (
         <tr key={client.id} className='border'>
          <td className='item'>
            <select 
            className=' text-black' 
            name="check_booking" 
            id="change_status"
             
            onChange={(e) => CheckBooking(e.target.value)}
          >
            {client.checked? 
            <>
              <option value="true" selected>Completa</option>
              <option value="false">Não completa</option>
              </>
            : 
            <>
            <option value="true">Completa</option>
            <option value="false" selected>Não completa</option>
            </>
            }   
            </select>
          </td>
          <td className='border'>{client.localizer}</td>
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
  )
}

