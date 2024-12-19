const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    // 성공
    try {
        // 파일 읽기
        if (req.url === '/') {
            const data = await fs.promises.readFile('./index.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } else if (req.url === '/about') {
            const data = await fs.promises.readFile('./about.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>404 요청 페이지를 찾을 수 없습니다.</h1>');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(error.message);
    }
});

server.listen(8080, () => {
    console.log('8080 서버 실행중...');
});
