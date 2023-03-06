import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import { saveTicket } from '../../services/ticketApi';
import { toast } from 'react-toastify';

export default function TicketOnline({ setFinalTicket, display, price, displayFinish, setDisplayFinish, accommodation }) {
  const { enrollment } = useEnrollment();
  const token = useToken();
  useEffect(() => {
    if (display === 'none' || accommodation !== undefined) {
      setDisplayFinish('');
    } else {
      setDisplayFinish('none');
    }
  });
  if (price === 0) {
    return <>
    </>;
  }
  async function createOnlineTicket() {
    let ticketTypeNumber;
    if (price === 100) {
      ticketTypeNumber = 3;
    }
    else if (price === 250) {
      ticketTypeNumber = 2;
    }
    else if (price === 600) {
      ticketTypeNumber = 1;
    };
    const body = {
      enrollmentId: enrollment.id,
      ticketTypeId: ticketTypeNumber,
      status: 'RESERVED'
    };
    try {
      await saveTicket(body, token);
      setFinalTicket(ticketTypeNumber);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      toast('Não foi possível salvar suas informações!');
    }
  }
  return (
    <FinishContainer displayFinish={displayFinish}>
      <StyledText>Fechado! O total ficou em R$ {price}. Agora é só confirmar:</StyledText>
      <StyledButton onClick={createOnlineTicket}>
        <h1>RESERVAR INGRESSO</h1>
      </StyledButton>
    </FinishContainer>
  );
};

const FinishContainer = styled.div`
  display: ${(prop) => prop.displayFinish};
`;

const StyledText = styled.h1`
  margin-top: 50px !important;
  color: #8E8E8E;
  font-size: 20px;
`;

const StyledButton = styled.button`
 width: 162px;
 height: 37px;
 margin-top: 10px;
 background: #E0E0E0;
 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
 border-radius: 10px;
 border:none;

 h1 {
  font-size: 12px;
  text-align: center;
  color: #000000;
 }
`;
