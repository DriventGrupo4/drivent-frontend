import api from './api';

export async function getMatriculationsByActivity(token, activityId) {
  const response = await api.get(`http://localhost:4000/matriculations/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
