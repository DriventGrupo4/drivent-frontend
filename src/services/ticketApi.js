import useToken from '../hooks/useToken';
import api from './api';

export async function getTicketType() {
  const token = useToken();
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const tickets = response.data;
  return tickets;
};
