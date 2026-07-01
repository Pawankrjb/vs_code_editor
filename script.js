const express= require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use('/monaco-local', express.static(path.join(__dirname, 'node_modules/monaco-editor')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});