import styled from 'styled-components';
import React from 'react';
import Hotel from './Hotel';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getHotels } from '../../services/hotelApi';
import { useState } from 'react';
import DisplayRooms from './DisplayRooms';

export default function HotelPayment() {
  const { userData } = useContext(UserContext);
  const [hotels, setHotels] = useState([]);
  const [chosenHotel, setChosenHotel] = useState('');
  const [chosenHotelRooms, setChosenHotelRooms] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await getHotels(userData.token);
      setHotels(response);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div>Primeiro, escolha seu hotel</div>
      <Hotels>
        {hotels.map((h) => <Hotel h = {h} key = {h.id} setChosenHotel={setChosenHotel} setChosenHotelRooms={setChosenHotelRooms}/>)}
      </Hotels>
      {chosenHotel==='' ? '' : <>
        <div>Ótima pedida! Agora escolha seu quarto:</div>
        <DisplayRooms chosenHotel={chosenHotel} chosenHotelRooms={chosenHotelRooms}/>
      </>}
      
    </Container>
  );
}

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
