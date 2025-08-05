const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: '1234567890' }, 'supersecret');
console.log(token);
