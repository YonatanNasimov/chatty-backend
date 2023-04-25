import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('mongo connect...');
      })
      .catch((error) => {
        log.error('Error connecting to the database', error);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
