const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    // 성공
    try {
        // 파일 읽기
        const data = await fs.promises.readFile('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(error.message);
    }
});

server.listen(8080, () => {
    console.log('8080 서버 실행중...');
});
