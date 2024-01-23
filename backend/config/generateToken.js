const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET not set in environment variables');
  }

  return jwt.sign({ userId }, secret, {
    expiresIn: '30d', // You can customize the expiration time
  });
};

console.log(process.env.JWT_SECRET);

module.exports = generateToken;
