const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const mongoURI = `mongodb+srv://${process.env.BACKEND_NAME}:${process.env.BACKEND_PASSWORD}@ibook.8vqxeuj.mongodb.net/ibook`
// const mongoURI = `mongodb://localhost:27017/Inotebook`

const connectTomongoose = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected to mongodb succesfullly"))
}

module.exports = connectTomongoose