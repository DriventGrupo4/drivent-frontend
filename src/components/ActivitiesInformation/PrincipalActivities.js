import styled from 'styled-components';

export function PrincipalActivities({ a }) {
  console.log(a.startDateTime);
  return (
    <>
      {a.locationId === 1 ? (
        <><Container>
          <Name><h2>{a.name}</h2></Name>
          <Line></Line>
          {a.capacity > 0 ? (
            <Availability>
              <h2><ion-icon name="enter-outline"></ion-icon></h2>
              <h3>{a.capacity} vagas</h3>
            </Availability>    
          ): 
            <SoldOff>
              <h2><ion-icon name="close-circle-outline"></ion-icon></h2>
              <h3>Esgotado</h3>
            </SoldOff>}
        </Container></>
      ) : '' }
    </>
  );
};

const Container = styled.div `
width: 265px;
height: 79px;
left: 350px;
margin-top: 24px;
margin-bottom: -10px;
background: #F1F1F1;
border-radius: 5px;
display: flex;
border: none;
`;
const Line = styled.div`
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
const Name = styled.div`
 width: 180px;
 height: 30px;
 padding-top: 10px;
 padding-left: 10px;
 display: flex;
 justify-content: flex-start;
 h2{
    font-style: normal;
font-weight: 700;
font-size: 12px;
 }
`;
const SoldOff = styled.div`
h2 {
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 900;
  font-size: 25px;
  color: #CC6666;
}
 h3 {
 margin-left: 16px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 11px;
 line-height: 11px;
 color: #CC6666;
 }
`;

