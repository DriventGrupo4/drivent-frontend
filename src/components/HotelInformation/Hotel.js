import styled from 'styled-components';
import hotelImg from '../../assets/images/hotel.jpg';

export default function Hotel() {
  return (
    <PersonalHotel>
      <HotelImg src={hotelImg} alt='hotelImg' />
      <HotelInformations>
        <h2>Resort Driven</h2>
        <h3>Quarto Reservado
          <p>Single</p>
        </h3>
        <h3>Vagas disponíveis:
          <p>0</p>
        </h3>
      </HotelInformations>
    </PersonalHotel>
  );
};

const PersonalHotel = styled.div`
    width: 196px;
height: 264px;
margin-right: 19px;
margin-top: 14px;
display: flex;
flex-direction: column;
align-items: center;
background: #EBEBEB;
border-radius: 10px;
`;

const HotelImg = styled.img`
margin-top: 16px;
width: 168px;
height: 109px;
left: 369px;
border-radius: 5px;
`;

const HotelInformations = styled.h2`
    width: 200px;
height: 23px;
h2{
margin-left: 15px;
margin-top: 10px;

font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #343434;
}
h3{
font-weight: 700;
font-size: 12px;
line-height: 14px;
margin-left: 15px;
margin-top: 10px;
color: #3C3C3C;
p{
    font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
}
}
`;

