const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const timeoutId = setTimeout(() => {
    res.send('Hello!');
  }, 5000);

  req.on('close', () => {
    clearTimeout(timeoutId);
  });

  res.on('finish', () => {
    clearTimeout(timeoutId);
  });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});