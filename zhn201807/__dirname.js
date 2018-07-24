/**
 * Created by ZhangNa on 2018/7/17.
 */
console.log('----------------------------');
console.log(__dirname);//该行代码执行所在的目录
console.log(__filename);//该行代码执行所在的文件路径
console.log('----------------------------');

var path = require('path');
console.log(path.resolve(), path.resolve(''));//两者含义一样，都是输出当前node命令执行时所在的目录

console.log('----------------------------');
console.log(path.resolve('./'), path.resolve('../'));//1.输出当前node命令执行的绝对路径；2.输出当前node命令执行的上级目录

console.log('----------------------------');
console.log(path.resolve('./zhn201807/__dirname.js'), path.resolve('zhn201807/__dirname.js'));//当前node命令执行的路径和参数中的相对路径的拼接结果
console.log(path.resolve('../zhn201807/__dirname.js'), path.resolve('../config/config.js'));//当前node命令执行的路径的上级目录和参数中的相对路径的拼接结果
console.log('----------------------------');

console.log(path.resolve(__dirname, 'aaa/bbb'));// 第一个参数(该行代码执行所在的目录)和第二个参数的拼接
console.log(path.resolve('zhn201807', 'aaa/bbb')); // 第一个参数(该行代码执行所在的目录)和第二个参数的拼接
console.log(path.resolve('./zhn201807', 'aaa/bbb')); // 第一个参数(该行代码执行所在的目录)和第二个参数的拼接
console.log(path.resolve('../zhn201807', 'aaa/bbb')); // 第一个参数(该行代码执行所在的路径的上级目录)和第二个参数的拼接
console.log('----------------------------');
console.log(path.join(__dirname, 'aaa/bbb')); // 第一个参数(该行代码执行所在的目录)和第二个参数的拼接
console.log(path.join('zhn201807', 'aaa/bbb')); // 纯字符串的拼接
console.log(path.join('./zhn201807', 'aaa/bbb')); // 纯字符串(去掉./)的拼接
console.log(path.join('../zhn201807', 'aaa/bbb')); // 纯字符串的拼接

console.log('----------------------------');
console.log(path.join(), path.join(''));// 都输出一个点：.

console.log('----------------------------');
console.log(path.join('./'), path.join('../')); //完整的纯字符串输出

console.log('----------------------------');
console.log(path.join('./zhn201807/__dirname.js'), path.join('zhn201807/__dirname.js')); // 输出结果一致，去掉./后的纯字符串输出

console.log('----------------------------');
console.log(path.join('../zhn201807/__dirname.js')); // 完整的纯字符串输出








