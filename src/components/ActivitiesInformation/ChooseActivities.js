import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { findActivities } from '../../services/activitiesApi';
import { LateralActivities } from './LateralActivities';
import { PrincipalActivities } from './PrincipalActivities';
import { WorkShopeRoom } from './WorkShopeRoom';

export default function ChooseActivitie() {
  const { userData } = useContext(UserContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await findActivities(userData.token);
      setActivities(response);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <AuditorioPrincipal>
        <h1>Auditório Principal</h1>
        <AuditorioSeparation>{activities.map((a, i) => <PrincipalActivities a = {a} key = {a.id} i = {i}/>)}</AuditorioSeparation>
      </AuditorioPrincipal>
      <AuditorioLateral>
        <h1>Auditório Lateral</h1>
        <AuditorioSeparation>{activities.map((a) => <LateralActivities a = {a} key = {a.id} />)}</AuditorioSeparation>
      </AuditorioLateral>
      <WorkShope>
        <h1>Sala de WorkShope</h1>
        <AuditorioSeparation>{activities.map((a) => <WorkShopeRoom a = {a} key = {a.id}/>)}</AuditorioSeparation>
      </WorkShope>
      {/* <Information>
        {activities.map((a) => <Activities a = {a} key = {a.id}/>)}
      </Information>
      <Line></Line>
      <Availability>
        <h2><ion-icon name="enter-outline"></ion-icon></h2>
        <h3>27 vagas</h3>
      </Availability> */}
    </Container>
  );
};

const AuditorioPrincipal = styled.div`
`;

const AuditorioSeparation = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 300px;
  height: 450px;  
  border: 1px solid #CFCFCF;
`;

const AuditorioLateral = styled.div`
`;

const WorkShope = styled.div`
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  h1{
    margin-top: 70px;
    display: flex;
    margin-bottom:13px;
    justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 17px;
color: #7B7B7B;
  }
`;

const Information = styled.div `
h2 {
  margin-top: 10px;
  margin-left: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
}
 h3{
  margin-top: 5px;
  margin-left: 10px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 12px;
 line-height: 14px;
 color: #343434;
 }`;

