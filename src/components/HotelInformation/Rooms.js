import styled from 'styled-components';

export default function Rooms({ r }) {
  return (
    <>
      <Name>{r.name},</Name>
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
