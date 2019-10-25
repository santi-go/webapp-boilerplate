const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.get('/api', (req, res) => {
    res.send(mockResponse);
});
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.listen(port, () => {
    console.log('App listening on port: ' + port);
})
