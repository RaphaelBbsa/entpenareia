
export interface clientType{
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
  function createUser(client:clientType){
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
  
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const client = ''
    await createUser(client)
  }
  return (
    <p>oi</p>
  )}