import styled from 'styled-components';
import React from 'react';
import Hotel from './Hotel';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getHotels } from '../../services/hotelApi';
import { useState } from 'react';

export default function HotelPayment() {
  const hoteis = [1, 2, 3];
  const { userData } = useContext(UserContext);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await getHotels(userData.token);
      setHotels(response);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {hotels.map((h) => <Hotel h = {h} key = {h.id} />)}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
