const express = require('express');
const app = express();

function isOldEnough(age) {
  return age >= 14;
}

app.get('/ride1', (req, res) => {
  const age = parseInt(req.query.age, 10);

  if (isNaN(age)) {
    return res.json({
      msg: 'Invalid age provided'
    });
  }

  if (isOldEnough(age)) {
    res.json({
      msg: 'You have successfully booked a ride'
    });
    
  } 
  else {
    res.json({
      msg: 'You are not old enough to book a ride'
    });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// clearneer way to do this same is by making global function

const express = require('express');
const app = express();

// Corrected middleware function with correct parameter order
function isOldEnoughMiddleware(req, res, next){
  const age = req.query.age;

  if (age >= 14) {
    next();  // Pass the request to the next handler if age is valid
  } else {
    res.send('You are not old enough');  // Send response if age is invalid
  }
}

// Route handlers, no need to call the middleware again
app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: 'You have successfully booked ride 1'
  });
});

app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: 'You have successfully booked ride 2'
  });
});

app.get('/ride3', isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: 'You have successfully booked ride 3'
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
