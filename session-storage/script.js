/* eslint-disable prefer-destructuring */
const form = document.querySelector('form');
const sessionStorageList = document.querySelector('#session-storage-list');

const deleteSessionStorageItem = (event) => {
  const { currentTarget } = event;
  const key = currentTarget.parentElement.id;
  sessionStorage.removeItem(key);
  currentTarget.removeEventListener('click', deleteSessionStorageItem);
  currentTarget.parentElement.parentElement.removeChild(currentTarget.parentElement);
};

const appendKeyValueToSessionStorageList = (key) => {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(`${key} : ${sessionStorage.getItem(key)}`));
  listItem.setAttribute('id', key);

  const deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('delete'));
  deleteButton.addEventListener('click', deleteSessionStorageItem);
  listItem.appendChild(deleteButton);

  sessionStorageList.appendChild(listItem);
};

const populateSessionStorageList = () => {
  for (const key of Object.keys(sessionStorage)) {
    appendKeyValueToSessionStorageList(key);
  }
};

populateSessionStorageList();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const key = event.path[0].key.value || 'world';
  const value = event.path[0].value.value;

  sessionStorage.setItem(key, value);

  appendKeyValueToSessionStorageList(key);
});
