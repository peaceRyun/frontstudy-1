const http = require('http');
const url = require('url');
const querystring = require('querystring');

// http://localhost:8080/search?category=shoes&color=black&size=260

const server = http.createServer((req, res) => {
    // url 문자열을 파싱하여 URL 객체로 변환
    const parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    // 위에서 만든 객체 중 query 부분을 querysting모듈로 객체로 변환
    const query = querystring.parse(parsedUrl.query);
    console.log(query);
    // query = { category: 'shoes', color: 'black', size: '260' }

    // 상품 검색 처리
    if (query.category || query.color || query.size) {
        let searchMessage = '<h2>검색 결과</h2>';
        if (query.category) {
            searchMessage += `<p>카테고리: ${query.category}</p>`;
        }
        if (query.color) {
            searchMessage += `<p>색상: ${query.color}</p>`;
        }
        if (query.size) {
            searchMessage += `<p>사이즈: ${query.size}</p>`;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(searchMessage);
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
