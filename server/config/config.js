var env = process.env.NODE_ENV || 'development';
console.log(`******${env}******`);

if (env === 'development'){
  process.env.PORT = 3000;
  db = 'mongodb://localhost:27017/Todoapp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  db = 'mongodb://localhost:27017/TodoappTest';
} else if (env === 'production'){
  db = 'mongodb://tanvirul:d9625WGW@ds159024.mlab.com:59024/learning-node';
}
