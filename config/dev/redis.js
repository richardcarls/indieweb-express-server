module.exports = {
  uri: 'redis://' + (process.env.REDIS_HOST || '127.0.0.1')
    + ':' + (process.env.REDIS_PORT || '6379')
    + '/' + (process.env.REDIS_DB || '0'),
};
