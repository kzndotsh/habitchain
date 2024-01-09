import axios from '../axios';

export const markCompletion = async (date) => {
  try {
    const response = await axios.post('/completions/mark', { date });
    return response.data;
  } catch (error) {
    throw new Error('Error marking completion.');
  }
};

export const deleteCompletion = async (id) => {
  try {
    const response = await axios.delete(`/completions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting completion.');
  }
};

export const editCompletion = async (id, date) => {
  try {
    const response = await axios.patch(`/completions/${id}`, { date });
    return response.data;
  } catch (error) {
    throw new Error('Error editing completion.');
  }
};

// import axios from '../axios';

// export const markCompletion = async (date) => {
//   try {
//     const response = await axios.post('/completions', { date });
//     return response.data;
//   } catch (error) {
//     console.error('Error marking completion:', error);
//   }
// };

// export const deleteCompletion = async (id) => {
//   try {
//     await axios.delete(`/completions/${id}`);
//     return true;
//   } catch (error) {
//     console.error('Error deleting completion:', error);
//   }
// };

// export const editCompletion = async (id, date) => {
//   try {
//     await axios.put(`/completions/${id}`, { date });
//     return true;
//   } catch (error) {
//     console.error('Error editing completion:', error);
//   }
// };
