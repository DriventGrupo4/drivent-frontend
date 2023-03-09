import { useEffect, useState } from 'react';
import PersonalInformationAccommodation from '../../../components/PersonalInformationPayment/Custom.accommodation';
import PersonalInformationTickets from '../../../components/PersonalInformationPayment/CustomTicket';
import TicketOnline from '../../../components/PersonalInformationPayment/CustomTicketOnline';
import CreditCardInformation from '../../../components/CreditCardInformation';
import { getTicket, getTicketStatus } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function Payment({ ticketId }) {
  const { userData } = useContext(UserContext);
  const [isRemote, setIsRemote] = useState(false);
  const [accommodation, setAccommodation] = useState();
  const [displayFinish, setDisplayFinish] = useState('none');
  const [price, setPrice] = useState(0);
  const [display, setDisplay] = useState('none');
  const [finalTicket, setFinalTicket] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const response = await getTicket(userData.token);
      console.log(response);
      setFinalTicket(response);
    };
    fetchData();
  }, []);
  if (finalTicket?.status === 'PAID') {
    return <h1>Já está Pago</h1>;
  }
  return (
    <>
      {!finalTicket ? (
        <>
          <PersonalInformationTickets
            setAccommodation={setAccommodation}
            setIsRemote={setIsRemote}
            setPrice={setPrice}
            setDisplay={setDisplay}
          />
          <PersonalInformationAccommodation
            accommodation={accommodation}
            setAccommodation={setAccommodation}
            setPrice={setPrice}
            setDisplayFinish={setDisplayFinish}
            display={display}
          />
          <TicketOnline
            setFinalTicket={setFinalTicket}
            accommodation={accommodation}
            displayFinish={displayFinish}
            setDisplayFinish={setDisplayFinish}
            display={display}
            price={price}
          />
        </>
      ) : (
        <CreditCardInformation />
      )}
    </>
  );
}
