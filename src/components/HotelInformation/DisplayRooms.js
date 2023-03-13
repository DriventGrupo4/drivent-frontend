import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getBookingsByRoom } from '../../services/bookingAPI';

export default function DisplayRooms({ chosenHotelRooms, chosenRoom, setChosenRoom }) {
  return (
    <RoomsContainer>
      {chosenHotelRooms.map((r) => <DisplayRoom room={r} key={r.id} chosenRoom={chosenRoom} setChosenRoom={setChosenRoom}/>)}
    </RoomsContainer>
  );
};
function DisplayRoom({ room, chosenRoom, setChosenRoom }) {
  const { userData } = useContext(UserContext);
  const [peopleInRoom, setPeopleInRoom] = useState(0);
  const capacityIcons = [];

  if(room.capacity===peopleInRoom) {
    for(let i=1; i<=peopleInRoom; i++) {
      capacityIcons.push(<ion-icon name="person" key={i}></ion-icon>);
    }
  } else if(room.capacity-peopleInRoom===1) {
    chosenRoom.id===room.id? capacityIcons.push(<ion-icon name="person" key={1} class="chosen-room"></ion-icon>):
      capacityIcons.push(<ion-icon name="person-outline" key={1} ></ion-icon>);
    for(let i=1; i<=peopleInRoom; i++) {
      capacityIcons.push(<ion-icon name="person" key={1+ i}></ion-icon>);
    }
  } else{
    for(let i=1; i<=room.capacity-peopleInRoom-1; i++) {
      capacityIcons.push(<ion-icon name="person-outline" key={i}></ion-icon>);
    }
    chosenRoom.id===room.id? capacityIcons.push(<ion-icon name="person" key={room.capacity-peopleInRoom} class="chosen-room"></ion-icon>):
      capacityIcons.push(<ion-icon name="person-outline" key={room.capacity-peopleInRoom} ></ion-icon>);
    for(let i=1; i<=peopleInRoom; i++) {
      capacityIcons.push(<ion-icon name="person" key={room.capacity-peopleInRoom + i}></ion-icon>);
    }
  }

  useEffect(() => {
    const fetchData = async() => {
      const response = await getBookingsByRoom( room.id, userData.token);
      setPeopleInRoom(response.length);
    };
    fetchData();
  }, []);

  return(
    <>
      {room.capacity===peopleInRoom? 
        <RoomContainer chosenRoomId={chosenRoom.id} thisRoomId={room.id} fullRoom={true}>
          {room.name}
          <div>
            {capacityIcons}
          </div>
        </RoomContainer>  : 
        <RoomContainer onClick={() => {setChosenRoom(room);} } chosenRoomId={chosenRoom.id} thisRoomId={room.id}>
          {room.name}
          <div>
            {capacityIcons}
          </div>
        </RoomContainer>
      }
    </>
  );
}
const RoomsContainer = styled.div`
  box-sizing: border-box;
  padding-top: 33px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 15px
`;
const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 13.38px;
  border-style: solid;
  border-width: 1px;
  border-color: #CECECE;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.fullRoom? '#9D9D9D' : '#454545'} ;
  background-color: ${props => props.fullRoom? '#E9E9E9' : props.chosenRoomId === props.thisRoomId ? '#FFEED2' : 'FFFFFF'};
  .chosen-room{
    color: #FF4791;
    visibility: visible;
  }
  ion-icon {
  color: ${props => props.fullRoom? '#8C8C8C' : '#000000'};
  visibility: visible;
}
`;
