import PersonalInformationAccommodation from '../../../components/PersonalInformationPayment/Custom.accommodation';
import PersonalInformationTickets from '../../../components/PersonalInformationPayment/CustomTicket';
import TicketOnline from '../../../components/PersonalInformationPayment/CustomTicketOnline';

export default function Payment() {
  return (
    <> 
      <PersonalInformationTickets />
      <PersonalInformationAccommodation/>
      <TicketOnline/>
    </>
  );
};
