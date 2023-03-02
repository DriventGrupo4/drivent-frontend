import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function PersonalInformationTickets() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledText>Primeiro, escolha sua modalidade de ingresso</StyledText>
      <StyledContainer>
        <StyledBox>
          <h1>Presencial</h1>
          <h2>R$250</h2>
        </StyledBox>
        <StyledBox>
          <h1>Online</h1>
          <h2>R$100</h2>
        </StyledBox>
      </StyledContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`; 

const StyledText = styled.h1`
  margin-top: 10px !important;
  color: #8E8E8E;
  font-size: 20px;
`;
const StyledContainer = styled.div`
 width: 310px;
 display: flex;
 justify-content: space-between;
`;
const StyledBox = styled.div`
  margin-top: 13px !important;
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;

  h1 {
    font-size: 16px;
    color: #454545;
    text-align: center;
    margin-top: 50px;
  }

  h2 {
    font-size: 14px;
    color: #898989;
    text-align: center;
    margin-top: 10px;
  }
`;

