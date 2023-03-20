import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { findActivities } from '../../services/activitiesApi';

export default function ChooseDate({ filteredActivities, setFilteredActivities }) {
  const { userData } = useContext(UserContext);
  const [activities, setActivities] = useState([]);
  const [dates, setDates] = useState([]);
  const [chosenDate, setChoosenDate] = useState('');
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const hash = {};
  useEffect(() => {
    const fetchData = async() => {
      const response = await findActivities(userData.token);
      setActivities(response);
      for(let i=0; i<response.length; i++) {
        const startDateTime = new window.Date(response[i].startDateTime);
        const day = startDateTime.getDay();
        const date = ('0' + startDateTime.getDate()).slice(-2);
        const month = ('0' + startDateTime.getMonth()).slice(-2);
        if(!hash[`${date}${month}`]) {
          hash[`${date}${month}`] = true;
          setDates(dates => [...dates, `${days[day]}, ${date}/${month}`]);
        }
      };
    };
    fetchData();
  }, []);
  function chooseDate(date) {
    setChoosenDate(date);
    setFilteredActivities(activities.filter(activity => 
      ('0' + new window.Date(activity.startDateTime).getDate()).slice(-2)===date.slice(-5, -3) &&
      ('0' + new window.Date(activity.startDateTime).getMonth()).slice(-2)===date.slice(-2)
    ));
  }
  return (
    <Container>
      {dates.map((date, index) => (<DateBox key={index} chosenDate={chosenDate} thisDate={date} onClick={() => chooseDate(date)}>{date}</DateBox>))}
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
  margin-top: 27px;
`;
const DateBox = styled.div`
  height: 37px;
  width: 131px;
  box-shadow: 0px 2px 10px 0px #00000040;
  background-color: ${(props) => (props.chosenDate === props.thisDate ? '#FFD37D' : '#E0E0E0')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px
`;
