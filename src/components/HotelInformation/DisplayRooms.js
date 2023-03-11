import styled from 'styled-components';

export default function DisplayRooms({ chosenHotel, chosenHotelRooms }) {
  return (
    <RoomsContainer>
      {chosenHotelRooms.map((r) => <DisplayRoom room = {r} key = {r.id}/>)}
    </RoomsContainer>
  );
};
function DisplayRoom({ room }) {
  const capacityIcons = [];
  for (let i=1; i<=room.capacity; i++) {
    capacityIcons.push(<ion-icon name="person-outline"></ion-icon>);
  }
  return(
    <RoomContainer>
      {room.name}
      <div>
        {capacityIcons}
      </div>
    </RoomContainer>
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
`;
