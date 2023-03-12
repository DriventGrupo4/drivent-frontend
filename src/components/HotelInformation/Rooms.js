import styled from 'styled-components';

export default function Rooms({ r }) {
  return <Name>{r.Name}</Name>;
}
const Name = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-top: 10px;
`;
