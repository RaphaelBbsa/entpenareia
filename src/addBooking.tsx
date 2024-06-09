import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  firstName             :string
  lastName              :string
  email?                :string
  phone                 :string
  language              :string
  country               :string
  localizer             :string
  bookingStatus         :string
  checkIn               :string
  checkOut              :string
  accommodationCode     :string
  bookingValue          :string
  bookingValueCurrency  :string
  bookingDate           :string
  checkInMessage?       :boolean
  subId?                :string
  newUserMessage?       :boolean
  checkOutMessage?      :boolean
  adultsOccupants?      :string
  childsOccupants?      :string
  conciergeMessage?     :string
}

export function AddBooking() {
  function createUser(client:Inputs){
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      localizer: client.localizer ,
      phone: client.phone
      })
    };
 
    fetch(`https://lokatur.com.br/users/new`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
   }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data), createUser(data)}

 
  
 return (
  
    <form
    className="flex flex-col gap-4 justify-center items-center h-screen"
    onSubmit={handleSubmit(onSubmit)}>
      <p>Cadastrar reserva</p>
      <label htmlFor="">Nome</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="first name" 
      {...register("firstName", { required: true })} />
      {errors.localizer && <span>This field is required</span>}
      
      <label htmlFor="">Sobrenome</label> 
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="last name"
      {...register("lastName", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Email</label>
      <input
      type="email"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="email"
      {...register("email", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Telefone</label>
      <input
      type="phone"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="phone"
      {...register("phone", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Idioma</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="language"
      {...register("language", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">País</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="country"
      {...register("country", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Localizador</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="localizer"
      {...register("localizer", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Status da reserva</label>
      <select
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      defaultValue="CONFIRMADA"
      {...register("bookingStatus", { required: true })}>
        <option value="PAID">PAID</option>
        <option value="CONFIRMADA">CONFIRMADA</option>
        <option value="UNPAID">UNPAID</option>
      </select>
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Data de checkin</label>
      <input
      type="text"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="check in"
      {...register("checkIn", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Data de checkout</label>
      <input
      type="text"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="check out"
      {...register("checkOut", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Código da accommodação</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="accommodation code"
      {...register("accommodationCode", { required: true })} />
      {errors.localizer && <span>This field is required</span>}
      
      <label htmlFor="">Valor da reserva</label>
      <input
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="booking value"
      type="text"
      {...register("bookingValue", { required: true })} />
      {errors.localizer && <span>This field is required</span>}
      
      <label htmlFor="">Moeda da reserva</label>
      <input
      type="text"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="booking value currency"
      {...register("bookingValueCurrency", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Data da reserva</label>
      <input
      type="text"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="booking date"
      {...register("bookingDate", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Mensagem de check-in</label>
      <input
      type="checkbox"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="check in message"
      {...register("checkInMessage", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Botconversa id</label>
      <input
      type="text"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="botconversa id"
      {...register("subId", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">Mensagem de novo usuário</label>
      <input
      type="checkbox"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="new user message"
      {...register("newUserMessage", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="">mensagem de checkout</label>
      <input
      type="checkbox"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="check out message"
      {...register("checkOutMessage", { required: true })} />
      {errors.localizer && <span>This field is required</span>}
      
      <label htmlFor="adultsOccupants">Ocupantes adultos</label>
      <input
      type="number"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="adults occupants"
      {...register("adultsOccupants", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="childsOccupants">Ocupantes crianças</label>
      <input
      type="number"
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="childs occupants"
      {...register("childsOccupants", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      <label htmlFor="conciergeMessage">Mensagem do concierge</label>
      <input
      type="checkbox "
      className='border border-white px-1 rounded bg-slate-700 w-max h-8'
      placeholder="concierge message"
      {...register("conciergeMessage", { required: true })} />
      {errors.localizer && <span>This field is required</span>}

      
      <input type="submit" />
    </form>
  )}