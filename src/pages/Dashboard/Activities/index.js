import styled from 'styled-components';
import ChooseActivitie from '../../../components/ActivitiesInformation/ChooseActivities';

export default function Activities() {
  return (
    <>
      <Title>Escolha de atividades</Title>
      <ChooseActivitie></ChooseActivitie>
    </>
  );
}

const Title = styled.h1 `
width: 600px;
height: 40px;
left: 341px;
top: 206px;

font-weight: 400;
font-size: 34px;
line-height: 40px;

color: #000000;

`;
