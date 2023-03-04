import { useState } from 'react';
import PersonalInformationAccommodation from '../../../components/PersonalInformationPayment/Custom.accommodation';
import PersonalInformationTickets from '../../../components/PersonalInformationPayment/CustomTicket';
import TicketOnline from '../../../components/PersonalInformationPayment/CustomTicketOnline';
import CreditCardInformation from '../../../components/CreditCardInformation';
export default function Payment({ ticketId }) {
  const [isRemote, setIsRemote] = useState(false);
  const [price, setPrice] = useState(0);
  const [display, setDisplay] = useState('none');

  return (
    <>
      <PersonalInformationTickets setIsRemote={setIsRemote} setPrice={setPrice} setDisplay={setDisplay} />
      <PersonalInformationAccommodation display={display} />
      <TicketOnline display={display} price={price} />
    </>
  );
}
