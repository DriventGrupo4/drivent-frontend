import styled from 'styled-components';

export default function Rooms({ rooms }) {
  function renderCapacities(array) {
    const single = array?.find((room) => room.capacity === 1);
    const double = array?.find((room) => room.capacity === 2);
    const triple = array?.find((room) => room.capacity === 3);

    if (single && !double && !triple) {
      return <Name>Single</Name>;
    } else if (double && !single && !triple) {
      return <Name>Double</Name>;
    } else if (triple && !single && !double) {
      return <Name>Triple</Name>;
    } else if (single && double && !triple) {
      return <Name>Single e Double</Name>;
    } else if (single && triple && !double) {
      return <Name>Single e Triple</Name>;
    } else if (double && triple && !single) {
      return <Name>Double e Triple</Name>;
    } else if (double && triple && single) {
      return <Name>Single, Double e Triple</Name>;
    }

    return '';
  }

  return <>{renderCapacities(rooms)}</>;
}

const Name = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-top: 10px;
`;
