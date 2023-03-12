import styled from 'styled-components';

export default function Rooms({ r, i, length }) {
  const empty = '.';
  return (
    <>
      {i === length - 1 && (
        <>
          <Letter>{empty}</Letter>
          <Name> e {r.name} </Name>
        </>
      )}
      {i === length - 2 && <Name>{r.name}</Name>}
      {i < length - 2 && <Name>{r.name}, <Letter>{empty}</Letter></Name>}
    </>
  );
}
const Letter = styled.span`
  visibility:hidden;
`;
const Name = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-top: 10px;
`;
