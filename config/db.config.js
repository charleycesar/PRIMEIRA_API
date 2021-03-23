const mongoose = require('mongoose');

const connect = () => {
  const url = 'sua config aqui';

  mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.once('open', async () => {
    console.log('Connected to database');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database  ', err);
  });
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once('close', async () => {
    console.log('Diconnected  to database');
  });
};

module.exports = {
  connect,
  disconnect,
};
