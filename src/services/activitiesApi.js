import api from './api';

export async function findActivities(token) {
  const response = await api.get('http://localhost:4000/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postActivity(activityId, token) {
  try {
    const response = await api.post(
      `/activities/${activityId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch {
    alert('Você já possui uma inscrição nesse mesmo horário');
  }
}
