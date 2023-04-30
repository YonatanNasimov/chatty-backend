import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';
import { redisConnection } from '@service/redis/redis.connection';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('mongo connect...');
        redisConnection.connect();
      })
      .catch((error) => {
        log.error('Error connecting to the database', error);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
