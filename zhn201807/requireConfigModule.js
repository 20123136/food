/**
 * Created by ZhangNa on 2018/7/24.
 */

var config = require('config');
console.log(config);
console.log(config.global.desc);
console.log(config.get('global.desc'));
console.log(config.has('global.desc'));

