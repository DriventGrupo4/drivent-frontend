import styled from 'styled-components';
import { useState } from 'react';

export default function PersonalInformationAccommodation({ accommodation, display, setDisplayFinish, setPrice, setAccommodation }) {
  function withHotelOrNot(bool) {
    if (bool) {
      setAccommodation(true);
      setPrice(600);
    } else {
      setAccommodation(false);
      setPrice(250);
    }
    setDisplayFinish('');
  }

  return (
    <HotelContainer display={display}>
      <StyledText> Ótimo! Agora escolha sua modalidade de hospedagem</StyledText>
      <StyledContainer>
        <StyledBox accommodation={accommodation} onClick={() => withHotelOrNot(false)}>
          <h1>Sem hotel</h1>
          <h2> + R$ 0</h2>
        </StyledBox>
        <StyledBox2 accommodation={accommodation} onClick={() => withHotelOrNot(true)}>
          <h1>Com hotel</h1>
          <h2>+ R$ 350</h2>
        </StyledBox2>
      </StyledContainer>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
display: ${(prop) => prop.display};
`;

const StyledText = styled.h1`
  margin-top: 50px !important;
  color: #8E8E8E;
  font-size: 20px;
`;

const StyledContainer = styled.div`
 width: 310px;
 display: flex;
 justify-content: space-between;
`;
const StyledBox = styled.div`
  margin-top: 13px !important;
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  background-color: ${(prop) => (prop.accommodation === false) ? '#FFEED2' : 'transparent'};
  cursor: pointer;
  :hover {
    background: #FFEED2;
  }
  :active {
    background: #FFEED2;
  }
  
  h1 {
    font-size: 16px;
    color: #454545;
    text-align: center;
    margin-top: 50px;
  }

  h2 {
    font-size: 14px;
    color: #898989;
    text-align: center;
    margin-top: 10px;
  }
`;
const StyledBox2 = styled.div`
  margin-top: 13px !important;
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  background-color: ${(prop) => (prop.accommodation === true) ? '#FFEED2' : 'transparent'};
  cursor: pointer;
  :hover {
    background: #FFEED2;
  }
  :active {
    background: #FFEED2;
  }
  
  h1 {
    font-size: 16px;
    color: #454545;
    text-align: center;
    margin-top: 50px;
  }

  h2 {
    font-size: 14px;
    color: #898989;
    text-align: center;
    margin-top: 10px;
  }
`;
