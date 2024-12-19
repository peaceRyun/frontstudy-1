// 기본 내장 모듈을 사용하는 방법
const http = require('http');

//서버 생성
// 콜백 함수로 요청(req), 응답(res)을 받음
const server = http.createServer((req, res) => {
    // 요청이 들어오면 응답을 보냄
    // 응답 헤더 설정
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // 응답 본문
    res.write('<h1>Hello Node! 안녕하세요</h1>');
    // 응답 종료
    res.end('<p>노드 공부 중</p>');
});

// 서버에 이벤트 리스너 등록
// 서버가 에러가 발생했을 때 실행할 콜백 함수
server.on('error', (error) => {
    console.error('에러 발생' + error);
});

// listening 이벤트 리스너 등록
// 서버가 특정 포트에서 연결을 받기 시작할 때 실행할 콜백 함수
server.on('listening', () => {
    console.log('8080 포트에서 서버 대기 중입니다.');
});

// 서버 실행
server.listen(8080, () => {
    console.log('8080 서버 실행중...');
});
