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

