import React, { useState, useContext, useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';
import { getCardType } from 'react-credit-cards-2/lib/utils/cardHelpers';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import dayjs from 'dayjs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { getTicket } from '../services/ticketApi';

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
  const [ticket, setTicket] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await getTicket(userData.token);
      setTicket(response);
      setPrice(response.TicketType.price);
    };
    fetchData();
  }, []);

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
        ticketId: ticketId,
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
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }

  return (
    <>
      {success ? (
        <>
          <Title>Ingresso e pagamento</Title>
          <Subtitle>Ingresso escolhido</Subtitle>
          <ContainerChooseTicket>
            <h3>Modalidade</h3>
            <h4>Preço</h4>
          </ContainerChooseTicket>  
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
          <Title>Ingresso e pagamento</Title>
          <Subtitle>Ingresso escolhido</Subtitle>
          <ContainerChooseTicket>
            <h3>{ticket.ticketTypeId === 1 ? 'Presencial + Com Hotel': ticket.ticketTypeId === 2 ? 'Presencial + Sem Hotel': 'Online'}</h3>
            <h4>R${price}</h4>
          </ContainerChooseTicket>
          <Paragraph>Pagamento</Paragraph>
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
              <form onSubmit={postDataCreditCard}>
                <input
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  size={16}
                  maxLength={16}
                  value={cardData.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  maxLength={17}
                  minLength={7}
                  value={cardData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
                <ValidData>
                  <input
                    type="text"
                    name="expirationDate"
                    placeholder="Valid Thru"
                    mask="MM/YY"
                    size={4}
                    maxLength={4}
                    value={cardData.expirationDate}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    size={3}
                    maxLength={3}
                    value={cardData.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </ValidData>

                <button type="submit">
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
  width: 45%;
  margin-left: 30px;
`;
const InputPayment = styled.div`
  display: flex;
  align-items: center;
  height: 225px;
  width: 50%;
  padding-top: 45px;
  margin-left: 20px;
  input {
    text-indent: 10px;
    height: 47px;
    border-radius: 7px;
    border-width: 2px;
    border-style: solid;
    border-color: #e5e5e5;
    cursor: pointer;
  }

  input:nth-child(1) {
    width: 335px;
    margin-bottom: 25px;
  }
  input:nth-child(2) {
    width: 335px;
    margin-bottom:18px;
  }
  button {
    position: relative;
    top: 60px;
    left: -310px;
    width: 240px;
    height: 30px;
    border: 2px solid #e5e5e5;
    border-radius: 7px;
    box-shadow: 3px 3px 4px 4px lightgray;
    cursor: pointer;
    :hover {
      opacity: 0.5;
      transition: 0.4s;
    }
  }
`;
const ValidData = styled.div`
  width: 356px;
  height: 46px;
  display: flex;
  margin-top:-12px;
  input {
    height: 46px;
  }
  input:nth-child(1) {
    width: 248px;
    margin-right:12px;
  }
  input:nth-child(2) {
    width: 74px;
  }
`;

const ContainerCheck = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  div {
    margin-left: 18px;
    p:nth-child(1) {
      font-weight: 700;
      padding-bottom: 5px;
    }
  }
`;
const Paragraph = styled.h1`
  font-weight: 500;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;
const Title = styled.h1`
  width: 600px;
  height: 40px;
  left: 341px;
  top: 206px;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;
const Subtitle = styled.h2`
  width: 600px;
  height: 23px;
  left: 341px;
  margin-top: 37px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;
`;
const ContainerChooseTicket = styled.section`
  background-color: #ffeed2;
  width: 290px;
  height: 90px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border-radius: 9px;
  margin: 10px 0 30px 0;
  h3 {
    height: 19px;
    left: 376px;
    top: 376px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
  h4 {
    width: 44px;
    height: 16px;
    left: 392px;
    margin-top: 3px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
