import styled from 'styled-components';
import HotelPayment from '../../../components/HotelInformation/HotelPayment';
import { useState, useEffect } from 'react';
import { getTicket } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';
import PersonalHotelInformation from '../../../components/HotelInformation/PersonalHotelInformation';
import { getBooking } from '../../../services/bookingAPI';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState();
  const [ bookingId, setBookingId ] = useState('');
  const [display, setDisplay] = useState('');
  const [display2, setDisplay2] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await getTicket(userData.token);
      setPayment(response);
      const booking = await getBooking(userData.token);
      setBookingId(booking.id);
    };
    fetchData();
  }, []);

  return (
    <>
      {payment?.status === 'PAID' && payment?.ticketTypeId === 1 ?(
        <>
          <Title>Escolha de hotel e quarto</Title>
          { display === '' && display2 === 'none' ?
            <HotelPayment setBookingId={setBookingId} setDisplay={setDisplay} display={display} 
              setDisplay2={setDisplay2} /> : ''
          }
          
        </>
      ) : (
        <>
          <Warning>
            {payment !== undefined && payment?.ticketTypeId !== 1 ? (
              <h5>Sua modalidade de ingresso não inclui hospedagem
              Prossiga para a escolha de atividades</h5>
            ) : (
              <h5>Você precisa ter confirmado pagamento antes
              de fazer a escolha de hospedagem</h5>
            )}
          </Warning>
        </>
      )}
      {bookingId? <PersonalHotelInformation setDisplay={setDisplay} display={display}
        setDisplay2={setDisplay2} display2={display2} /> : ''}
      
    </>
  );
}
const Title = styled.h1`
      width: 600px;
      height: 40px;
      left: 321px;
      top: 206px;
      font-weight: 400;
      font-size: 34px;
      line-height: 40px;
      color: #000000;
      `;
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
