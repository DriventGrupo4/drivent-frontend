import styled from 'styled-components';
import TicketContainer from './TicketContainer';

export default function ChosenTicket({ setIsRemote, setPrice, setDisplay }) {
  const ticketTypeId =2;
  return <>
    <Title>Ingresso escolhido</Title>
    <TicketType>
      <h3>{ticketTypeId===1 ? 'Presencial + Com Hotel' : ticketTypeId===2 ? 'Presencial + Sem Hotel' : 'Online'}</h3>
      <h4>Aqui falo o total</h4>
    </TicketType>
  </>;
}

const Title = styled.h2`
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

const TicketType = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 290px;
    height: 145px;
    left: 341px;
    margin-top: 17px;
    background-color: #FFEED2;
    border: 1px solid #CECECE;
    border-radius: 20px;
    h3{
        width: 75px;
        height: 19px;
        left: 376px;
        top: 376px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #454545;
    }
    h4{
    width: 44px;
        height: 16px;
        left: 392px;
        margin-top: 3px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #898989;
    }
`;
