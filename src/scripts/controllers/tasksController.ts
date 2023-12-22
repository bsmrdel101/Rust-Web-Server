import api from "../config/axios";


// === GET routes === //

export const getTasks = async () => {
  try {
    const res = await api.get('/api/tasks');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// === POST routes === //

export const addTask = async (task: Task) => {
  try {
    await api.post('/api/tasks', task);
  } catch (err) {
    console.log(err);
  }
};