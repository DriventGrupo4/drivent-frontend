import { useEffect, useState } from 'react';
import PersonalInformationAccommodation from '../../../components/PersonalInformationPayment/Custom.accommodation';
import PersonalInformationTickets from '../../../components/PersonalInformationPayment/CustomTicket';
import TicketOnline from '../../../components/PersonalInformationPayment/CustomTicketOnline';
import CreditCardInformation from '../../../components/CreditCardInformation';
import { getTicket, getTicketStatus } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';
import styled from 'styled-components';

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
      setFinalTicket(response);
    };
    fetchData();
  }, []);
  if (finalTicket?.status === 'PAID') {
    return (<Warning><h5>Pagamento confirmado, prossiga para a escolha da hopedagem</h5></Warning>);
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
const Warning = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    text-align: center;
    width: 30rem;
    height: 2.5rem;
    font-size: 20px;
    color: #8e8e8e;
  }
`;
