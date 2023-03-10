import api from './api';

export async function findBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createBooking(roomId, token) {
  const response = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
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
 
export async function updateBooking(bookingId, roomId, token) {
  const response = await api.put(`/booking/${bookingId}`, { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
