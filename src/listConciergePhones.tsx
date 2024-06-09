import { useEffect, useState } from 'react'
import './index.css'
type concierge = {
  id: string,
  created_at: string,
  concierge_name: string,
  concierge_phone: string,
}
export function ListConciergePhones() {
  const [phones, setPhones] = useState([])

    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    useEffect(() => {
    fetch(`https://lokatur.com.br/concierge/phones`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setPhones(response)
    })
    .catch(err => console.error(err));
  }, [])

  return (
    <main className=' flex flex-col justify-center items-center'>
      <table>
       <thead>
         <tr className='border'>
           <th>Id</th>
           <th>Nome</th>
           <th>Phone</th>
         </tr>
       </thead>
       <tbody>
      {phones.map((concierge:concierge) => (
         <tr key={concierge.id} className='border'>
           <td className='border'>{concierge.id}</td>
           <td className='border'>{concierge.concierge_name}</td>
        
           <td className='border'>{concierge.concierge_phone}</td>
          
         </tr>
      ))}
       </tbody>
     </table>
    </main>
  )
}

