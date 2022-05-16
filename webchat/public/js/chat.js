const socket = window.io();

const nicknameDisplayer = document.getElementById('userNickname');
const nicknameInput = document.getElementById('nicknameInput');
const messageBox = document.getElementById('messageBox');
const messageForm = document.getElementById('messageForm');
const nicknameForm = document.getElementById('nicknameForm');
const usersUl = document.getElementById('onlineUsers');

const setNickname = (nickname) => {
  nicknameDisplayer.innerText = nickname;
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

nicknameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentNickname = nicknameDisplayer.innerText;
  const newNickname = nicknameInput.value;
  sessionStorage.setItem(currentNickname, newNickname);
  setNickname(sessionStorage.getItem(currentNickname));
  socket.emit('updateUserNickname', { currentNickname, newNickname });
  nicknameInput.value = '';
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const chatMessage = messageBox.value;
  const nickname = nicknameDisplayer.innerText;
  socket.emit('message', { chatMessage, nickname });
  messageBox.value = '';
  return false;
});

socket.on('newConnection', (socketId) => {
  if (sessionStorage.getItem(socketId)) {
    return setNickname(sessionStorage.getItem(socketId));
  }

  sessionStorage.setItem(socketId, socketId);

  setNickname(socketId);
});

socket.on('message', (message) => {
  const messagesUl = document.getElementById('messages');
  const li = document.createElement('li');
  li.innerText = message;
  li.setAttribute('data-testid', 'message');
  messagesUl.appendChild(li);
});

const createUserLi = (value) => {
  const lis = document.createElement('li');
  lis.innerText = value;
  lis.setAttribute('data-testid', 'online-user');
  usersUl.appendChild(lis);
};

const createCurrentUserLi = () => {
  const li = document.createElement('li');
  li.innerText = nicknameDisplayer.innerText;
  usersUl.appendChild(li);
};

socket.on('usersOnline', (users) => {
  removeAllChildNodes(usersUl);
  createCurrentUserLi();
  users.forEach(({ id, name }) => {
    const validId = id !== nicknameDisplayer.innerText;
    const validName = name !== nicknameDisplayer.innerText;
    if (validId && validName) createUserLi(name || id);
  });
});
