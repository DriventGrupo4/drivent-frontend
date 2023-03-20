import dayjs from 'dayjs';
import styled from 'styled-components';
import { postActivity } from '../../services/activitiesApi';
import UserContext from '../../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { getMatriculationsByActivity } from '../../services/matriculations';

export function WorkShopeRoom({ a }) {
  const [subscribed, setSubscribed] = useState(0);
  const { userData } = useContext(UserContext);
  const startTime = dayjs(a.startDateTime).format('hh:mm');
  const endTime = dayjs(a.endDateTime).format('hh:mm');
  const start = dayjs(`2023-03-17T${startTime}:00`, 'YYYY-MM-DDTHH:mm:ss');
  const end = dayjs(`2023-03-17T${endTime}:00`, 'YYYY-MM-DDTHH:mm:ss');
  const diffInHours = end.diff(start, 'hour');
  const [vacancies, setVacancies] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const matriculations = await getMatriculationsByActivity(userData.token, a.id);
      setVacancies(a.capacity-matriculations.length);
      for(let i=0; i<matriculations.length; i++) {
        if(matriculations[i].userId===userData.user.id) {
          setSubscribed(a.id);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {a.locationId === 3 ? (
        <>
          <Container
            diffInHours={diffInHours}
            onClick={async() => {
              const response = await postActivity(a.id, userData.token);
              if (response !== undefined) {
                setSubscribed(a.id);
              }
            }}
          >
            {subscribed === a.id ? (
              <>
                <InformationsSubscribed>
                  <Name>
                    <h2>{a.name}</h2>
                  </Name>
                  <Hour>
                    <h2>
                      {startTime} - {endTime}
                    </h2>
                  </Hour>
                </InformationsSubscribed>
                <LineSubscribed></LineSubscribed>
              </>
            ) : (
              <>
                <Informations>
                  <Name>
                    <h2>{a.name}</h2>
                  </Name>
                  <Hour>
                    <h2>
                      {startTime} - {endTime}
                    </h2>
                  </Hour>
                </Informations>
                <Line></Line>
              </>
            )}
            {subscribed === a.id ? (
              <Subscribed>
                <h2>
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </h2>
                <h3>Inscrito</h3>
              </Subscribed>
            ) : a.capacity > 0 ? (
              <Availability>
                <h2>
                  <ion-icon name="enter-outline"></ion-icon>
                </h2>
                <h3>{vacancies} vagas</h3>
              </Availability>
            ) : (
              <SoldOff>
                <h2>
                  <ion-icon name="close-circle-outline"></ion-icon>
                </h2>
                <h3>Esgotado</h3>
              </SoldOff>
            )}
          </Container>
        </>
      ) : (
        ''
      )}
    </>
  );
}

const Container = styled.div`
  width: 265px;
  height: ${(props) => 80 * props.diffInHours}px;
  left: 350px;
  margin-top: 24px;
  margin-bottom: -10px;
  background: #f1f1f1;
  border-radius: 5px;
  display: flex;
  z-index: 100;
`;

const Informations = styled.div``;

const Line = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  height: ${(props) => 60 * props.diffInHours}px;
  border-left: 1px solid #cfcfcf;
`;

const Availability = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin-top: 15px;
    margin-left: 20px;
    font-weight: 900;
    font-size: 25px;
    color: #078632;
  }
  h3 {
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    color: #078632;
  }
`;

const Name = styled.div`
  width: 180px;
  height: 30px;
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
  }
`;
const SoldOff = styled.div`
  h2 {
    margin-top: 15px;
    margin-left: 20px;
    font-weight: 900;
    font-size: 25px;
    color: #cc6666;
  }
  h3 {
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    color: #cc6666;
  }
`;

const Hour = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding-top: 5px;
  padding-left: 10px;
  line-height: 14px;
  color: #343434;
`;
const Subscribed = styled.div`
  background-color: #d0fedb;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 15px;
    font-weight: 900;
    font-size: 25px;
    color: #008000;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #008000;
  }
`;

const InformationsSubscribed = styled.div`
  background-color: #d0fedb;
  width: 75vw;
`;
const LineSubscribed = styled.div`
  background-color: #d0fedb;
  margin-top: 10px;
  height: ${(props) => 60 * props.diffInHours}px;
  border-left: 1px solid #99e8a1;
`;
