import styled from 'styled-components';
import React from 'react';
import Hotel from './Hotel';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getHotels } from '../../services/hotelApi';
import { useState } from 'react';
import DisplayRooms from './DisplayRooms';
import { createBooking, findBooking } from '../../services/bookingAPI';
import { updateBooking } from '../../services/bookingAPI';

export default function HotelPayment( { setBookingId, setDisplay, display, setDisplay2 }) {
  const { userData } = useContext(UserContext);
  const [hotels, setHotels] = useState([]);
  const [chosenHotel, setChosenHotel] = useState('');
  const [chosenHotelRooms, setChosenHotelRooms] = useState([]);
  const [chosenRoom, setChosenRoom] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await getHotels(userData.token);
      setHotels(response);
    };
    fetchData();
  }, []);
  
  async function bookRoom() {
    try {
      const booking = await findBooking(userData.token);
      const newBooking = await updateBooking(booking.id, chosenRoom.id, userData.token,);
      setBookingId(newBooking);
      setDisplay('none');
      setDisplay2('');
      window.location.reload();
    } catch(err) {
      if (!err.response || err.response.status !== 404) {
        throw err;
      }

      const response = await createBooking(chosenRoom.id, userData.token);
      setBookingId(response);
      setDisplay('none');
      setDisplay2('');
      window.location.reload();
    }
  }
  
  return (
    <Box display={display}>
      <Container>
        <div>Primeiro, escolha seu hotel</div>
        <Hotels>
          {hotels.map((h) => <Hotel h={h} key={h.id} chosenHotel={chosenHotel} setChosenHotel={setChosenHotel} setChosenHotelRooms={setChosenHotelRooms}/>)}
        </Hotels>
        {chosenHotel==='' ? '' : <>
          <div>Ótima pedida! Agora escolha seu quarto:</div>
          <DisplayRooms chosenHotelRooms={chosenHotelRooms} chosenRoom={chosenRoom} setChosenRoom={setChosenRoom}/>
        </>}
        {chosenRoom==='' ? '' : <BookingButtom onClick={bookRoom}>RESERVAR QUARTO</BookingButtom>}
      </Container>
    </Box>
  );
}
const Box = styled.div`
display: ${(prop) => prop.display};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #8E8E8E;
  font-size: 20px;
  box-sizing: border-box;
  padding-top: 36px;

`;
const Hotels = styled.div`
  display: flex;
`;
const BookingButtom = styled.button`
width: 182px;
height: 37px;
background-color: #E0E0E0;
border-radius: 4px;
margin-top: 46px;
font-weight: 400;
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 2px 10px 0px #00000040;
`;
