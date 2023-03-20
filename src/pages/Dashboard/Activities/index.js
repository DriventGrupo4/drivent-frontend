import styled from 'styled-components';
import ChooseActivitie from '../../../components/ActivitiesInformation/ChooseActivities';
import { useState, useEffect } from 'react';
import { getTicket } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';
import ChooseDate from '../../../components/ActivitiesInformation/ChooseDate';

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState();
  const [activityId, setActivityId] = useState('');
  const [filteredActivities, setFilteredActivities] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await getTicket(userData.token);
      setPayment(response);
    };
    fetchData();
  }, []);

  return (
    <>
      {payment?.status === 'PAID' && payment?.ticketTypeId !== 3 ? (
        <>
          <Title>Escolha de atividades</Title>
          <ChooseDate filteredActivities={filteredActivities} setFilteredActivities={setFilteredActivities}/>
          {filteredActivities!==''? <ChooseActivitie setActivityId={setActivityId} filteredActivities={filteredActivities} /> : ''}
        </>
      ) : (
        <Warning>
          {payment !== undefined && payment?.ticketTypeId === 3 ? (
            <h5>
              Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
            </h5>
          ) : (
            <h5>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h5>
          )}
        </Warning>
      )}
    </>
  );
}

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
const Warning = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    text-align: center;
    width: 30rem;
    height: 2.5rem;
    font-size: 20px;
    color: #8e8e8e;
  }
`;
