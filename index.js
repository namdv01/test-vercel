const app = require('express')();
app.get('/', (req, res) => {
  return res.send('ok');
})

app.listen(3000);