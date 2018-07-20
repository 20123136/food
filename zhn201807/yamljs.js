/**
 * Created by ZhangNa on 2018/7/20.
 */

var yaml = require('yamljs');
var fs = require('fs');

var config = yaml.parse(fs.readFileSync("../config/config.yaml").toString());
console.log(config);

