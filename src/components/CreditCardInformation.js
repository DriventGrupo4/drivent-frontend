import React, { useState, useContext } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';
import { getCardType } from 'react-credit-cards-2/lib/utils/cardHelpers';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import dayjs from 'dayjs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import InputMask from 'react-input-mask';

export default function CreditCardInformation({ ticketId }) {
  const { userData } = useContext(UserContext);
  const [success, setSuccess] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expirationDate: '',
    cvc: '',
    issuer: '',
  });

  const [focus, setFocus] = useState('');
  console.log(cardData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number') {
      return setCardData({ ...cardData, [name]: value, issuer: getCardType(cardData.number) });
    }
    setCardData({ ...cardData, [name]: value });
  };

  const handleInputFocus = (event) => {
    setFocus(event.target.name);
  };

  function postDataCreditCard(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_BASE_URL}/payments/process`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const request = axios.post(
      URL,
      {
        ticketId: 6,
        cardData: {
          issuer: cardData.issuer,
          number: +cardData.number,
          name: cardData.name,
          expirationDate: dayjs(cardData.expirationDate, 'MMYY').toDate(),
          cvv: +cardData.cvc,
        },
      },
      config
    );
    request.then((res) => {
      setSuccess(true);
    });
    request.catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      {success ? (
        <>
          <Paragraph>Pagamento</Paragraph>
          <ContainerCheck>
            <BsFillCheckCircleFill style={{ color: '#59C332', fontSize: '44px' }} />
            <div>
              <p>
                <strong>Pagamento confirmado!</strong>
              </p>
              <p>Prossiga para escolha de hospedagem e atividades</p>
            </div>
          </ContainerCheck>
        </>
      ) : (
        <div id="PaymentForm">
          <PaymentSection>
            <Cards
              number={cardData.number}
              expiry={cardData.expirationDate}
              cvc={cardData.cvc}
              name={cardData.name}
              issuer={cardData.issuer}
              focused={focus}
            />
            <InputPayment>
              <form>
                <input
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  size={16}
                  maxLength={16}
                  required
                  value={cardData.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  maxLength={17}
                  minLength={7}
                  required
                  value={cardData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <ValidData>
                  <input
                    type="text"
                    name="expirationDate"
                    placeholder="Valid Thru"
                    mask="MM/YY"
                    pattern="\d\d/\d\d"
                    size={4}
                    maxLength={4}
                    required
                    value={cardData.expirationDate}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    size={3}
                    maxLength={3}
                    required
                    value={cardData.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </ValidData>

                <button onClick={postDataCreditCard} type="submit">
                  <h3>
                    <strong>FINALIZAR PAGAMENTO</strong>
                  </h3>
                </button>
              </form>
            </InputPayment>
          </PaymentSection>
        </div>
      )}
    </>
  );
}
const PaymentSection = styled.section`
  position: absolute;
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
  padding-top: 45px;
  padding-left: 20px;
  input {
    text-indent: 10px;
    height: 47px;
    border-radius: 7px;
    border-width: 2px;
    border-style: solid;
    border-color: #e5e5e5;
    margin: 10px;
    cursor:pointer;
  }

  input:nth-child(1) {
    width: 335px;
    margin-bottom: 15px;
  }
  input:nth-child(2) {
    width: 335px;
    margin-bottom: 15px;
  }
  button {
    position: relative;
    top: 60px;
    left: -310px;
    widdth: 180px;
    height: 46px;
    border: 2px solid #e5e5e5;
    border-radius: 7px;
    box-shadow: 3px 3px 4px 4px lightgray;
    cursor:pointer;
    :hover{
      opacity: 0.5; 
      transition:0.4s;
    };
  }
`;
const ValidData = styled.div`
  width: 356px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 46px;
  }
  input:nth-child(1) {
    width: 260px;
  }
  input:nth-child(2) {
    width: 96px;
  }
`;

const ContainerCheck = styled.div`
  margin-top: 20px;
  display: flex;
  align-itens: center;
  div {
    margin-left: 18px;
    p:nth-child(1) {
      font-height: 700;
      padding-bottom: 5px;
    }
  }
`;
const Paragraph = styled.h1`
  font-weight: 500;
  color: gray;
  font-size: 20px;
  cursor:pointer;
`;
