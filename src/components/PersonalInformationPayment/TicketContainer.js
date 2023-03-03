import { useState } from 'react';
import styled from 'styled-components';

export default function TicketContainer({ setIsRemote, setPrice, setDisplay }) {
  const [clickedPresencial, setClickedP] = useState(false);
  const [clickedRemote, setClickedR] = useState(false);

  function Ispresincial() {
    setPrice(250);
    setIsRemote(false);
    setDisplay('');
    if (clickedRemote === true) {
      setClickedR(false);
    }
    if (clickedPresencial === false) {
      return setClickedP(true);
    }
  }

  function Isremote() {
    setPrice(100);
    setIsRemote(true);
    setDisplay('none');
    if (clickedPresencial === true) {
      setClickedP(false);
    }
    if (clickedRemote === false) {
      return setClickedR(true);
    }
  }

  return (
    <Container>
      <Presencial onClick={Ispresincial} clickedPresencial={clickedPresencial}>
        <h3>Presencial</h3>
        <h4>R$250</h4>
      </Presencial><Remote onClick={Isremote} clickedRemote={clickedRemote}>
        <h3>Online</h3>
        <h4>R$100</h4>
      </Remote>
    </Container>
  );
};

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
:hover {
    background: #FFEED2;
  }
  :active {
    background: #FFEED2;
  }
h3{
  width: 75px;
height: 19px;
left: 376px;
top: 376px;


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
:hover {
    background: #FFEED2;
  }
  :active {
    background: #FFEED2;
  }
h3{
  width: 75px;
height: 19px;
left: 376px;
top: 376px;

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

font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;

color: #898989;
}
`;

const Container = styled.div`
display: flex;
`;
