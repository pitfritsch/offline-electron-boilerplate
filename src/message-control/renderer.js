const electron = window.require('electron');
const { ipcRenderer } = electron;

export function sendAsync(message) {
  console.log({ message })
  return new Promise((resolve) => {
    ipcRenderer.once('asynchronous-reply', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('asynchronous-message', message);
  });
}

export function sendTeste(message) {
  console.log({ message })
  return new Promise((resolve) => {
    ipcRenderer.once('teste-reply', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('teste', message);
  });
}