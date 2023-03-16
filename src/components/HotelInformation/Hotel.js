import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getBookingsByRoom } from '../../services/bookingAPI';
import { getHotelsById } from '../../services/hotelApi';
import Rooms from './Rooms';

export default function Hotel({ h, setChosenHotel, setChosenHotelRooms, chosenHotel, setHotelActive, index }) {
  const { userData } = useContext(UserContext);
  const [rooms, setRooms] = useState([]);
  const [vacancies, setVacancies] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const hotel = await getHotelsById(userData.token, h.id);
      setRooms(hotel.Rooms);
      let bookingsInThisHotel = 0;
      for (let i = 0; i < hotel.Rooms.length; i++) {
        const bookingsInThisRoom = await getBookingsByRoom(hotel.Rooms[i].id, userData.token);
        bookingsInThisHotel += bookingsInThisRoom.length;
      }
      setVacancies(
        hotel.Rooms.reduce((accumulator, currentRoom) => accumulator + currentRoom.capacity, -bookingsInThisHotel)
      );
    };
    fetchData();
  }, []);

  return (
    <PersonalHotel
      onClick={() => {
        setChosenHotel(h);
        setChosenHotelRooms(rooms);
      }}
      chosenHotelId={chosenHotel.id}
      thisHotelId={h.id}
    >
      <HotelImg src={h.image} alt="hotelImg" />
      <HotelInformations>
        <h2>{h.name}</h2>
        <h3>Tipo de acomadação</h3>
        <div>
          <Rooms rooms={rooms} />
        </div>
        <h3>Vagas disponíveis:</h3>
        <div>
          <p>{vacancies}</p>
        </div>
      </HotelInformations>
    </PersonalHotel>
  );
}

const PersonalHotel = styled.div`
  width: 196px;
  height: 264px;
  margin-right: 19px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.chosenHotelId === props.thisHotelId ? '#FFEED2' : '#EBEBEB')};
  border-radius: 10px;
  margin-bottom: 52px;
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
  h2 {
    margin-left: 15px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    color: #3c3c3c;
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
    }
  }
  div {
    display: flex;
    margin-left: 15px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
`;
