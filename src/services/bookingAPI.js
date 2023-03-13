import api from './api';

export async function createBooking(roomId, token) {
  const response = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getBookingsByRoom(roomId, token) {
  const response = await api.get(`/booking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
