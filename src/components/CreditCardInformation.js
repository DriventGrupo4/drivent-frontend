import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';

export default function CrediCardInformation() {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCardData({ ...cardData, [name]: value });
  };

  const handleInputFocus = (event) => {
    setCardData({ ...cardData, focus: event.target.name });
  };

  return (
    <div id="PaymentForm">
      <PaymentSection>
        <Cards
          number={cardData.cardNumber}
          expiry={cardData.expiry}
          cvc={cardData.cvc}
          name={cardData.name}
          focused={cardData.focus}
        />
        <InputPayment>
          <form>
            <input
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              value={cardData.cardNumber}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={cardData.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <ValidData>
              <input
                type="number"
                name="expiry"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={cardData.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </ValidData>
          </form>
        </InputPayment>
      </PaymentSection>
    </div>
  );
}
const PaymentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 225px;
  margin-left: 50px;
  width: 45%;
`;
const InputPayment = styled.div`
  display: flex;
  align-items: center;
  height: 225px;
  width: 50%;
  input {
    height: 47px;
    border-radius: 7px;
    border-width: 2px;
    border-style: solid;
    border-color: #E5E5E5;
    margin: 10px;
  }

  input:nth-child(1) {
    width: 335px;
    margin-bottom:15px;
  }
  input:nth-child(2) {
    width: 335px;
    margin-bottom:15px;
  }
`;
const ValidData = styled.div`
  width: 356px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input{
    height: 46px;
  }
  input:nth-child(1) {
    width: 280px;
  }
  input:nth-child(2) {
    width: 76px;
  }
`;
