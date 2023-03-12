import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getHotelsById } from '../../services/hotelApi';
import Rooms from './Rooms';

export default function Hotel({ h }) {
  const { userData } = useContext(UserContext);
  const [rooms, setRooms] = useState([]);
  const [vacancies, setVacancies] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const response = await getHotelsById(userData.token, h.id);
      setRooms(response.Rooms);
      setVacancies(response.Rooms.length);
    };
    fetchData();
  }, []);
  return (
    <PersonalHotel>
      <HotelImg src={h.image} alt='hotelImg' />
      <HotelInformations>
        <h2>{h.name}</h2>
        <h3>Tipo de acomadação
        </h3>
        <div>{rooms.map((r, index) => <Rooms r = { r } key = { r.id } i = { index }/>)}</div>
        <h3>Vagas disponíveis:
        </h3>
        <div><p>{vacancies}</p></div>
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
display: flex;
color: #3C3C3C;
p{
    font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
}
}
div{
  display: flex;
  margin-left: 15px;
}
p{
    font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
}
`;

