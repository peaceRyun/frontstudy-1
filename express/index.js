const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

// 정적 파일 제공
app.use(express.static('public'));

// 1. 로깅 미들웨어 - 어떤 요청이 왔는지 확인
app.use((req, res, next) => {
    console.log('-------------------');
    console.log('새로운 요청이 왔어요!');
    console.log('요청 종류:', req.method);
    console.log('요청 주소:', req.url);
    console.log('-------------------');
    next(); //
});

// get() 메서드 사용해서 라우팅 설정
app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/about.html');
});

// posts 경로에서 블로그 글 목록을 가져오는 API
app.get('/posts', (req, res) => {
    res.send('블로그 글 목록');
});

// posts 경로에서 블로그 글을 생성하는 API
app.post('/posts/write', (req, res) => {
    res.send('블로그 글 생성');
});

// 특정 게시글 조회
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(id + '번 글 조회');
});

// 특정 게시글 삭제
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(id + '번 글 삭제');
});

// posts 경로에서 블로그 글을 수정하는 API
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(id + '번 글 수정');
});

app.listen(app.get('port'), () => {
    console.log('Server is running on http://localhost:8080');
});
