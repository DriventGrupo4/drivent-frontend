import styled from 'styled-components';

export default function Rooms({ r }) {
  return (
    <>
      {r.capacity === 1 ? <Name>Single,</Name> :
        r.capacity === 2 ? <Name>Double,</Name> :
          r.capacity === 3? <Name>Triple,</Name> : ''
      }
    </>
  );
};

const Name = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3C3C3C;
  margin-top: 10px;
`;
