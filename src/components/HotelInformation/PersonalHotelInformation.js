import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getBooking } from '../../services/bookingAPI';
import { getHotelsById } from '../../services/hotelApi';
import { Occupation } from './Occupation';

export default function PersonalHotelInformation({ setDisplay, setDisplay2, display2 }) {
  const { userData } = useContext(UserContext);
  const [booking, setBooking] = useState([]);
  const [hotelId, setHotelId] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [hotelImg, setHotelImg] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await getBooking(userData.token);
      setBooking(response.Room.name);
      setHotelId(response.Room.hotelId); 
      setOccupation(response.Room.capacity);  
      const response2 = await getHotelsById(userData.token, hotelId);
      setHotel(response2.name);
      setHotelImg(response2.image);
    };
    fetchData();
  }, [hotel, booking, hotelImg]);
 
  function changeRoom() {
    setDisplay2('none');
    setDisplay('');
  };
  
  return (
    <Container display2={display2}>
      <Title>Você já escolheu seu quarto:</Title>
      <PersonalHotel>
        <HotelImg src={hotelImg} alt='hotelImg' />
        <HotelInformations>
          <h2>{hotel}</h2>
          <h3>Quarto Reservado
            <p>({booking})</p>
          </h3>
          <h3>Pessoas no seu Quarto
            <Occupation occupation = { occupation }/>
          </h3>
        </HotelInformations>
      </PersonalHotel>
      <ChangeRoom onClick={changeRoom}>
        <h5>TROCAR DE QUARTO</h5>
      </ChangeRoom>
    </Container>
  );
};

const Container = styled.div`
display: ${(prop) => prop.display2}
`;

const PersonalHotel = styled.div`
    width: 196px;
height: 264px;
left: 355px;
margin-top: 14px;
display: flex;
flex-direction: column;
align-items: center;
background: #FFEED2;
border-radius: 10px;
`;

const HotelImg = styled.img`
margin-top: 16px;
width: 168px;
height: 109px;
left: 369px;
border-radius: 5px;
`;

const HotelInformations = styled.div`
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

const ChangeRoom = styled.button`
    width: 182px;
height: 37px;
left: 355px;
margin-top: 38px;
border: none;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
h5{
    font-weight: 400;
    color: #000000;
}
`;

const Title = styled.h1`
font-weight: 400;
font-size: 20px;
line-height: 23px;
margin-top:36px;
color: #8E8E8E;
`;
