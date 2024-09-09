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
      setPhones(response)
    })
    .catch(err => console.error(err));
  }, [])

  function deleteConcierge(e:any){
    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      id: e
      })
    };
 
    fetch(`https://lokatur.com.br/concierge/delete`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
   }
  async function deleteInstance(e:concierge){
    
    if (confirm(`Deseja deletar a instancia ${e.concierge_name}?`) === true ){
    await deleteConcierge(e.id)
    alert('Portaria deletada')
    location.replace('/concierges')
  }else{
    alert('Operação cancelada')
  }
  }
  return (
    <main className=' flex flex-col justify-center items-center'>
      <table>
       <thead>
         <tr className='border'>
          <th>delete</th>
           <th>Id</th>
           <th>Nome</th>
           <th>Phone</th>
         </tr>
       </thead>
       <tbody>
      {phones.map((concierge:concierge) => (
          <tr key={concierge.id} className='border'>
          <td  className='bg-red-400 text-white px-2 py-1 border-[#202020] border-8 cursor-pointer hover:bg-red-700' onClick={() => deleteInstance(concierge)}>Delete</td>
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

