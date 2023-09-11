const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const salt = bcrypt.genSaltSync(10);

exports.handler = async (event, context) => {
  // try {
  //   const { username, password } = JSON.parse(event.body);

   
  //   await mongoose.connect(process.env.MONGODB_URI);

    
  //   const userDoc = await User.create({
  //     username,
  //     password: bcrypt.hashSync(password, salt), 
  //   });

    
  //   await mongoose.connection.close();

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(userDoc),
  //   };
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ error: 'An error occurred' }),
  //   };
  // }
  return{
    statusCode: 200,
    body: JSON.stringify({ error: 'An error occurred' }),
  };
};
