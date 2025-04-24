const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://mayank:8tADBXshKtz5wYYw@inventory.ts3fk1u.mongodb.net/?retryWrites=true&w=majority&appName=Inventory" 
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
