// 常量，不支持重新赋值
const hello = 'Hello World!';
console.log(hello);

// 变量，支持重新赋值
let page = 1;
console.log(page);
page = 2;
console.log(page);

// 字符串
const title = '小白兔的开发之路';
console.log(title);
console.log(typeof title);
console.log(title.length);
const titleAlias = title.replace('开发', '发财');
console.log(titleAlias);
console.log(title);

// 数字
const price = 39.9;
console.log(price);
console.log(typeof price);
console.log(price.toString());
console.log(price.toFixed());
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
};
console.log(book);
console.log(book.title);
console.log(book.price);
console.log(book.chapters);

// 布尔值
let speed = 100,
  limit = 120;
console.log(speed > limit);
console.log(speed === limit);
console.log(speed < limit);
console.log(!(speed > limit));
console.log(speed < limit && limit > 100);
console.log(speed < limit && limit > 120);
console.log(speed < limit || limit > 120);

// 字符模板
const title1 = '小白兔的开发之路';
const author = 'w12lz';
const description = `《 ${title1} 》，作者：${author}`;
console.log(description);

// 函数
function log() {
  console.log('LOG::');
}

log();

// 箭头函数
const log1 = () => {
  console.log('LOG::');
};
log1();

// 函数参数
const log2 = (message) => {
  console.log('LOG::', message);
};
log2('hello');
log2('你好');

// 多个参数
const log3 = (prefix, message) => {
  console.log(prefix, message);
};
log3('LOG::', 'hello');
log3('日志::', '你好');

// 返回结果
const greet = (name) => {
  return 'Hello: ' + name;
};
const greeting = greet('w2lz');
console.log(greeting);
// 函数返回部分只有一行的可以简写，入参只有一个参数括号也能省略
const greet1 = (name) => 'Hello: ' + name;
const greeting1 = greet1('w2lz');
console.log(greeting1);

// 方法

const book1 = {
  title: '小白兔的开发之路',
  toString() {
    return `《${this.title}》`;
  },
};
console.log(book1.toString());

// 解构对象
const book2 = {
  title2: '小白兔的开发之路',
  author2: 'w2lz',
};
const { title2, author2 } = book2;
console.log(title2);
console.log(author2);

const { title2: title2Alias, author2: authorAlias } = book2;
console.log(title2Alias);
console.log(authorAlias);

// 解构数组
const fruits = ['苹果', '香蕉', '桔子'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruits);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 展开数组
const vegetables = ['土豆', '茄子', '辣椒'];
const food = [...fruits, ...vegetables];
console.log(food);

// 展开对象
const data = {
  title: '小白兔的开发之路',
};

const author1 = {
  name: 'w2lz',
};

const book3 = {
  ...data,
  author1,
};
console.log(book3);

// if
let speed1 = 100;
speed1 = 125;
if (speed1 > 120) {
  console.log('您已超速');
} else {
  console.log('车速正常～');
}

// switch
let gear = 'P';
gear = 'D';
switch (gear) {
  case 'P':
    console.log('停车');
    break;
  case 'R':
    console.log('倒车');
    break;
  case 'D':
    console.log('开车');
    break;
  case 'N':
    console.log('空档');
    break;
  default:
    console.log('档位异常！');
    break;
}

// throw
const drive = () => {
  throw new Error('没油了！');
};
// drive();

// try...catch
const getGasoline = () => {
  return true;
};

const drive1 = () => {
  const gasoline = getGasoline();

  if (!gasoline) {
    throw new Error('没油了！');
  }
  console.log('呜呜呜');
};

try {
  drive1();
} catch (error) {
  console.log(error.message);
}

// 类
class Car {
  engine;

  drive() {
    console.log('呜呜呜~~');
  }
}

const c1 = new Car();
c1.drive();
console.log(c1);

// 构造方法
class NewCar {
  engine;

  constructor() {
    console.log('一辆崭新的汽车');
  }

  drive() {
    console.log('呜呜呜~~');
  }
}

const c2 = new NewCar();
c2.drive();
console.log(c2);

// this
class NewCarByEngine {
  engine;

  constructor(engine) {
    this.engine = engine;
    console.log('一辆崭新的汽车');
  }

  drive() {
    console.log('呜呜呜~~');
  }
}

const c3 = new NewCarByEngine('V8');
const c4 = new NewCarByEngine('V12');
console.log(c3, c4);

// 继承
class PickupTruck extends NewCarByEngine {}

const p1 = new PickupTruck('V8');
p1.drive();
console.log(p1);

// filter
const data1 = [
  {
    title: '肖申克的救赎',
    rating: 9.7,
  },
  {
    title: '霸王别姬',
    rating: 9.6,
  },
  {
    title: '蝴蝶效应',
    rating: 8.8,
  },
];
const results = data1.filter((item) => item.rating > 9);
const results1 = data1.filter((item) => {
  return item.rating > 9;
});
console.log(results);
console.log(results1);

// 回调函数
const nature = (callback) => {
  const data = '🌲';
  callback(data);
};

nature((data) => {
  console.log(data);
});

// 处理一步动作 Promise（承诺）
const nature1 = () => {
  console.log('...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🦕');
    }, 2000);
  });
};

nature1().then((result) => {
  console.log(result);
});

// 异步函数：async await

const demo = async () => {
  const data = await nature1();
  console.log(data);
};

demo();
