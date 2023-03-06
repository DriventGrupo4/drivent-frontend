import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketContainer from './TicketContainer';

export default function PersonalInformationTickets({ setIsRemote, setPrice, setDisplay }) {
  const { enrollment } = useEnrollment();
  if (!enrollment) {
    return (
      <>
        <Title>Ingressos e pagamentos</Title>
        <Warning>
          <h5>Você precisa completar sua inscrição antes
            de prosseguir pra escolha de ingresso</h5>
        </Warning>
      </>
    );
  }

  return <>
    <Title>Ingresso e pagamentos</Title>
    <Subtile>Primeiro, escolha sua modalidade de ingresso</Subtile>
    <TicketContainer setIsRemote = { setIsRemote } setPrice = { setPrice } setDisplay = { setDisplay } />
  </>;
}

const Title = styled.h1`
width: 600px;
height: 40px;
left: 341px;
top: 206px;

font-weight: 400;
font-size: 34px;
line-height: 40px;

color: #000000;
`;

const Subtile = styled.h2`
width: 600px;
height: 23px;
left: 341px;
margin-top: 37px;

font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #8E8E8E;
`;

const Warning = styled.div`
   width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h5{
    text-align: center;
    width: 30rem;
    height: 2.5rem;
    font-size: 20px;
    color: #8E8E8E;
  }
`;
