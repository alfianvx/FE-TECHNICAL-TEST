const STORAGE_KEY = "users";

function addUser(data) {
  const oldData = getUsers();
  const newData = [...oldData, data];
  saveData(newData);
  dispatchStorageEvent();
}

function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function deleteUser(id) {
  const oldData = getUsers();
  const newData = oldData.filter((data) => data.id !== id);
  saveData(newData);
  dispatchStorageEvent();
}

function editUser(id, data) {
  const oldData = getUsers();
  const newData = oldData.map((item) => {
    if (item.id === id) {
      return { ...item, ...data };
    }
    return item;
  });
  saveData(newData);
  dispatchStorageEvent();
}

function getUserById(id) {
  const data = getUsers();
  return data.find((item) => item.id === id);
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function dispatchStorageEvent() {
  const storageEvent = new Event("storage");
  window.dispatchEvent(storageEvent);
}

function getProfile() {
  return JSON.parse(localStorage.getItem("credential_auth"));
}

function updateProfile(data) {
  const oldData = getProfile();
  const newData = { ...oldData, ...data };
  saveProfile(newData);
}

function saveProfile(data) {
  localStorage.setItem("credential_auth", JSON.stringify(data));
}

export {
  addUser,
  getUsers,
  deleteUser,
  editUser,
  getUserById,
  getProfile,
  updateProfile,
};
