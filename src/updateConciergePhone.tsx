import { useForm, SubmitHandler } from "react-hook-form"
type concierge = {
  id: string,
  created_at: string,
  concierge_name: string,
  concierge_phone: string,
}

export function UpdateConcierge() {
  function createConcierge(concierge:concierge){
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        phone: concierge.concierge_phone,
        id: concierge.id
      })
    };
 
    fetch(`https://lokatur.com.br/concierge/update`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
   }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<concierge>()
  const onSubmit: SubmitHandler<concierge> = (data) => {console.log(data), createConcierge(data)}

 return (  
    <form
    className="flex flex-col gap-4 justify-center items-center h-screen"
    onSubmit={handleSubmit(onSubmit)}>
      <p className=" font-sans text-3xl">Atualizar portaria</p>
      <p>Id da portaria consta na coluna id</p>
      <label htmlFor="">Id</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="Id da portaria" 
      {...register("id", { required: true })} />
      {errors.id && <span className=" text-red-500">This field is required</span>}
      <label htmlFor="">Telefone</label>
      <input
      type="phone"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="558399999999"
      {...register("concierge_phone", { required: true })} />
      {errors.concierge_phone && <span className=" text-red-500">This field is required</span>}
      <input className=" bg-blue-500 rounded-md px-12 py-2 cursor-pointer" type="submit" />
    </form>
  )}