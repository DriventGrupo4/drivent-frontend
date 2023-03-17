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
    </Container>
  );
};

const AuditorioPrincipal = styled.div`
z-index: 10;
`;

const AuditorioSeparation = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
  width: 300px;
  height: 450px;  
  border: 1px solid #CFCFCF;
  overflow: scroll;
  overflow-x: hidden;
`;

const AuditorioLateral = styled.div`

z-index: 10;
`;

const WorkShope = styled.div`

z-index: 10;
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

