import api from './api';

export async function findActivities(token) {
  const response = await api.get('http://localhost:4000/activities', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return response.data;
}
