import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketTypeApi from '../../services/ticketApi';

export default function useTicketType() {
  const token = useToken();
  
  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType
  } = useAsync(() => ticketTypeApi.getTicketType(token));

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType
  };
}
