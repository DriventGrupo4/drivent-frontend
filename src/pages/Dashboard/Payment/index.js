import { useState } from 'react';
import PersonalInformationAccommodation from '../../../components/PersonalInformationPayment/Custom.accommodation';
import PersonalInformationTickets from '../../../components/PersonalInformationPayment/CustomTicket';
import TicketOnline from '../../../components/PersonalInformationPayment/CustomTicketOnline';
import CreditCardInformation from '../../../components/CreditCardInformation';
export default function Payment({ ticketId }) {
  const [isRemote, setIsRemote] = useState(false);
  const [accommodation, setAccommodation] = useState();
  const [displayFinish, setDisplayFinish] = useState('none');
  const [price, setPrice] = useState(0);
  const [display, setDisplay] = useState('none');

  return (
    <>
      <PersonalInformationTickets setAccommodation={setAccommodation} setIsRemote={setIsRemote} setPrice={setPrice} setDisplay={setDisplay} />
      <PersonalInformationAccommodation accommodation={accommodation} setAccommodation={setAccommodation} setPrice={setPrice} setDisplayFinish={setDisplayFinish} display={display} />
      <TicketOnline accommodation={accommodation} displayFinish={displayFinish} setDisplayFinish={setDisplayFinish} display={display} price={price} />
      {/* <CreditCardInformation/> */}
    </>
  );
}
