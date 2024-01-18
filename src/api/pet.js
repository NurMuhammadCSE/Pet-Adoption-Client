import axiosSecure from ".";

// Fetch all rooms from db
export const getAllPets = async () => {
  const { data } = await axiosSecure("/pets");
  return data;
};

// Fetch all pets for host
export const getHostPets = async (email) => {
  const { data } = await axiosSecure(`/pets/${email}`);
  console.log(data);
  return data;
};

// Fetch single room data from db
export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/pet/${id}`);
  return data;
};

// Save a room data in db
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/pets`, roomData);
  return data;
};
