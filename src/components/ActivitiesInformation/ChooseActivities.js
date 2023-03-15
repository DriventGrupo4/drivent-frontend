import styled from 'styled-components';

export default function ChooseActivitie() {
  return (
    <Container>
      <Information>
        <h2>Minecraft: montando o PC ideal</h2>
        <h3>09:00 - 10:00</h3>
      </Information>
      <Line></Line>
      <Availability>
        <h2><ion-icon name="enter-outline"></ion-icon></h2>
        <h3>27 vagas</h3>
      </Availability>
    </Container>
  );
}

const Container = styled.div `
width: 265px;
height: 79px;
left: 350px;
margin-top: 125px;
background: #F1F1F1;
border-radius: 5px;
display: flex;
`;
const Information = styled.div `
h2 {
  margin-top: 10px;
  margin-left: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
}
 h3{
  margin-top: 5px;
  margin-left: 10px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 12px;
 line-height: 14px;
 color: #343434;
`;
const Line = styled.div `
margin-top: 10px;
margin-left: 15px;
height: 60px;
border-left: 1px solid #CFCFCF
`;
const Availability = styled.div `
h2 {
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 900;
  font-size: 25px;
  color: #078632;
}
 h3 {
 margin-left: 16px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 11px;
 line-height: 11px;
 color: #078632;
 }
`;
