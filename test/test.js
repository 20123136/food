/**
 * Created by ZhangNa on 2018/7/17.
 */
test = {hello:"hello"};//global variable
var test1={hello:"hello"};//local variable
console.log(exports == module.exports); // true:exports和module.exports指向相同的地址
global.setTimeout(function(){
    process.exit();
},1000);
try{
    throw global.TypeError('must be an object')
}
catch(e){
    console.error(e)
}
module.exports={test:'test'};
console.log(process.mainModule);







