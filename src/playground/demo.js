// 常量，不支持重新赋值
const hello = 'Hello World!';
console.log(hello);

// 变量，支持重新赋值
let page = 1
console.log(page);
page = 2
console.log(page);

// 字符串
const title = '小白兔的开发之路';
console.log(title);
console.log(typeof title);
console.log(title.length);
const titleAlias = title.replace('开发', '发财');
console.log(titleAlias);
console.log(title)

// 数字
const price = 39.9;
console.log(price);
console.log(typeof price);
console.log(price.toString());
console.log(price.toFixed())
console.log(price.toFixed(2));

// 数组
const chapters = ['准备开发', '管理代码', '熟悉语文'];
console.log(chapters);
console.log(chapters.length);
chapters.push('提供服务');
console.log(chapters);
chapters.pop();
console.log(chapters);

// 对象
const book = {
    title: '小白兔的开发之路',
    price: 39.9,
    chapters: ['准备开发', '管理代码', '熟悉语文'],
}
console.log(book);
console.log(book.title);
console.log(book.price);
console.log(book.chapters);

// 布尔值
let speed = 100, limit = 120;
console.log(speed > limit);
console.log(speed === limit);
console.log(speed < limit);
console.log(!(speed > limit));
console.log((speed < limit) && (limit > 100));
console.log((speed < limit) && (limit > 120));
console.log((speed < limit) || (limit > 120));

// 字符模板
const title1 = '小白兔的开发之路';
const author = 'w12lz';
const description = `《 ${title1} 》，作者：${author}`;
console.log(description);

// 函数
function log() {
    console.log('LOG::')
}
log();

// 箭头函数
const log1 = () => {
    console.log('LOG::');
}
log1();

// 函数参数
const log2 = (message) => {
    console.log('LOG::', message);
}
log2("hello");
log2('你好');

// 多个参数
const log3 = (prefix,message) => {
    console.log(prefix, message);
}
log3('LOG::',"hello");
log3('日志::','你好');

// 返回结果
const greet = (name) => {
    return 'Hello: ' + name;
}
const greeting = greet('w2lz');
console.log(greeting);
// 函数返回部分只有一行的可以简写，入参只有一个参数括号也能省略
const greet1 = name => 'Hello: ' + name;
const greeting1 = greet1('w2lz');
console.log(greeting1);

// 方法

const book1 = {
    title: '小白兔的开发之路',
    toString() {
        return `《${this.title}》`;
    }
}
console.log(book1.toString());

// 解构对象
const book2 = {
    title2: '小白兔的开发之路',
    author2: 'w2lz',
}
const {title2, author2} = book2;
console.log(title2);
console.log(author2);

const {title2: title2Alias, author2: authorAlias} = book2;
console.log(title2Alias);
console.log(authorAlias)

// 解构数组
const fruits = ['苹果','香蕉','桔子'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruits);
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)