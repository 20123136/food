/**
 * Created by ZhangNa on 2018/7/17.
 */

console.log(__dirname);//该行代码执行所在的目录
console.log(__filename);//该行代码执行所在的文件路径

var path = require('path');

console.log(path.resolve(), path.resolve(''));//两者含义一样，都是输出当前node命令执行时所在的目录
console.log(path.resolve('./zhn201807/__dirname.js'), path.resolve('zhn201807/__dirname.js'), path.resolve('config/config.js'));//当node命令在 D:\gitrepo\github\food> 目录下执行时

console.log(path.resolve(__dirname, 'aaa/bbb'));

console.log(path.join(__dirname, 'aaa/bbb')); // 第一个参数和第二个参数的拼接
console.log(path.join(), path.join(''), path.join('./'), path.join('../'));
console.log(path.join('./zhn201807/__dirname.js'));








