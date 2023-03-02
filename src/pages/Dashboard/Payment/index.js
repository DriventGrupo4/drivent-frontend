import { useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [clickedPresencial, setClickedP] = useState(false);
  const [clickedRemote, setClickedR] = useState(false);
  
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

  function Ispresincial() {
    if (clickedRemote === true) {
      setClickedR(false);
    }
    if (clickedPresencial === false) {
      return setClickedP(true);
    }
    setClickedP(false);
  }

  function Isremote() {
    if (clickedPresencial === true) {
      setClickedP(false);
    }
    if (clickedRemote === false) {
      return setClickedR(true);
    }
    setClickedR(false);
  }

  return <>
    <Title>Ingressos e pagamentos</Title>
    <Subtile>Primeiro, escolha sua modalidade de ingresso</Subtile>
    <TicketContainer>
      <Presencial onClick={Ispresincial} clickedPresencial={clickedPresencial}>
        <h3>Presencial</h3>
        <h4>R$250</h4>
      </Presencial>
      <Remote onClick={Isremote} clickedRemote={clickedRemote}>
        <h3>Online</h3>
        <h4>R$100</h4>
      </Remote>
    </TicketContainer>
  </>;
}

const Title = styled.h1`
width: 338px;
height: 40px;
left: 341px;
top: 206px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;

color: #000000;
`;

const Subtile = styled.h2`
width: 409px;
height: 23px;
left: 341px;
margin-top: 37px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #8E8E8E;
`;

const Presencial = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 145px;
height: 145px;
left: 341px;
margin-top: 17px;
background-color: ${(prop) => prop.clickedPresencial ? '#FFEED2' : 'transparent'};
border: 1px solid #CECECE;
border-radius: 20px;
cursor: pointer;
h3{
  width: 75px;
height: 19px;
left: 376px;
top: 376px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #454545;
}
h4{
  width: 44px;
height: 16px;
left: 392px;
margin-top: 3px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;

color: #898989;
}
`;

const Remote = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 145px;
height: 145px;
left: 341px;
margin-top: 17px;
margin-left: 24px;
background-color: ${(prop) => prop.clickedRemote ? '#FFEED2' : 'transparent'};
border: 1px solid #CECECE;
border-radius: 20px;
cursor: pointer;
h3{
  width: 75px;
height: 19px;
left: 376px;
top: 376px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #454545;
}
h4{
  width: 44px;
height: 16px;
left: 392px;
margin-top: 3px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;

color: #898989;
}
`;

const TicketContainer = styled.div`
  display: flex;

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
