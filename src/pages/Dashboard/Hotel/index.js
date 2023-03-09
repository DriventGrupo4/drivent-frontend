import styled from 'styled-components';
import HotelPayment from '../../../components/HotelInformation/HotelPayment';
import { useState, useEffect } from 'react';
import { getTicket } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const response = await getTicket(userData.token);
      setPayment(response);
    };
    fetchData();
  }, []);
  if (!payment) {
    return (
      <>
        <Title>Escolha de hotel e quarto</Title>
        <Warning>
          <h5>Você precisa ter confirmado a inscrição e pagamento antes de fazer a escolha de hospedagem</h5>
        </Warning>
        ;
      </>
    );
  }
  return (
    <>
      {payment?.status === 'PAID' && payment?.ticketTypeId === 1 ? (
        <>
          <Title>Escolha de hotel e quarto</Title>
          <HotelPayment />
        </>
      ) : (
        <>
          <Warning>
            {payment?.ticketTypeId !== 1 ? (
              <h5>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</h5>
            ) : (
              <h5>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</h5>
            )}
          </Warning>
        </>
      )}
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
