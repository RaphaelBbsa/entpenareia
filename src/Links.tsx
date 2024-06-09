

export function Links() {
  return (
    <div className=" text-2xl h-screen w-screen flex flex-col justify-center items-center gap-2">
      <a className=" underline" href='/'>Home</a>
      <a className="underline" href='/reserva'>Buscar reserva</a>
      <a className="underline" href='/phoneUpdate'>Atualizar telefone</a>
      <a className="underline" href='/checkins'>Listar checkins</a>
      <a className="underline" href='/newbookings'>Listar novas reservas</a>
      <a className="underline" href='/addbooking'>Adicionar reserva</a>
      <a className="underline" href='/wrongphones'>Listar telefones errados</a>
      <a className="underline" href='/checkbooking'>Marcar reserva concluida</a>
      <a className="underline" href='/concierges'>Listar portarias</a>
      <a className="underline" href='/addconcierge'>adicionar portaria</a>
    </div>
  )
}
