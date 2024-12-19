const express = require('express');
const app = express();

// get() 메서드 사용해서 라우팅 설정
app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/about.html');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
