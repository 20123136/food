/**
 * Created by ZhangNa on 2018/7/20.
 */

var stripJsonComments  = require('strip-json-comments');//扒光json中的注解
var fs = require('fs'); // file system

var config = JSON.parse(stripJsonComments(fs.readFileSync('../config/configWithComments.json').toString()));
console.log(config);
