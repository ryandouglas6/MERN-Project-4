import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://127.0.0.1:27017/nikeapp'// < replace with your database name!

);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});