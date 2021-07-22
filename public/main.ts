const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database("./db.sqlite3", err => {
  if (err) console.error('Database opening error', err)
})

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg); // prints "ping"
  const sql = arg;
  database.all(sql, (err, rows) => {
    event.reply('asynchronous-reply', (err && err.message) || rows);
  });
}); 

ipcMain.on("teste", (event, arg) => {
  event.reply('teste-reply', [
    {
      nome: arg
    }
  ]);
})