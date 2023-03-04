import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function TicketOnline({ display, price }) {
  const [displayFinish, setDisplayFinish] = useState('none');
  useEffect(() => {
    if(display === 'none') {
      setDisplayFinish('');
    }else{
      setDisplayFinish('none');
    }
  });
  if(price === 0) {
    return <>
    </>;
  }
  return (
    <FinishContainer displayFinish = { displayFinish }>
      <StyledText>Fechado! O total ficou em R$ {price}. Agora é só confirmar:</StyledText>
      <StyledButton>
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
