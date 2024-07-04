const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request.headers['user-agent']); // 获取请求头的 ua

    // 返回文本内容
    //response.write('hello world!');

    // 返回 html 的输入框
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('<input />');

    // 根据请求地址返回不同的内容
    // switch (request.url) {
    //     case '/':
    //         response.write('hello ~');
    //         break;
    //     case '/posts':
    //         response.write('posts');
    //         break;
    //     case '/signup':
    //         response.write('signup');
    //         break;
    //     default:
    //         response.writeHead(404);
    //         response.write('404');
    // }

    // 返回 JSON 格式的数据
    const data = {
        id: 1,
        title: '关山月',
        content: '明月出天山，苍茫云海间。'
    }
    const jsonData = JSON.stringify(data);
    response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    response.write(jsonData);
    response.end();
});

server.listen(3000, () => {
    console.log('🚀 服务已启动！');
});