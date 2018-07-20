/**
 * Created by ZhangNa on 2018/7/20.
 */

var fs = require('fs'); // file system
var config = JSON.parse(fs.readFileSync('../config/configWithoutComments.json').toString());
console.log(config);
