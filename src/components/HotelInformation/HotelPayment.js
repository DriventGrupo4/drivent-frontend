import styled from 'styled-components';
import React from 'react';
import Hotel from './Hotel';

export default function HotelPayment() {
  const hoteis = [1, 2, 3];
  return (
    <Container>
      {hoteis.map((h, index) => <Hotel/>)}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
