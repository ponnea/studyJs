// 数据类型转换
// 数值，数组，对象，undifine,字符串，布尔，null，函数

// null 表示为空， undifined 表示未定义
var a = undefined;
var b = null;
console.log(a == b);//true == 相等运算符，自动类型转换
console.log(a === b);//false ===严格运算符，不做类型转换

//布尔：除undifined、null、false、0、NaN、空字符串以外的所有值都可转为true
a = Math.pow(2, 53)
//Math.pow(2, 53)表示2^53
// javascript 最多准确显示绝对值小于2^53的整数
var value = parseInt(a).toString(2);
document.write(value);
//parsetInt里面是要转换的数字，toString里面是要转换的进制，
//08 ,八进制
//0x8 ，十六进制
//0b11，二进制
//

//特殊数
// +0与-0
document.write((1 / +0) === (1 / -0))// false
// NaN（not a number）
// infinity 无穷

//类型转换
//parseInt方法用于将字符串转为整数。
//parseFloat方法用于将一个字符串转为浮点数。

//字符串数组，可以使用但无法修改
var str =  'asdfghjkl'
str[0]='e'
console.log(str[0])

//****************对象****************
//属性可以动态创建，不必在对象声明时就指定。
var obj = {};
obj.foo = 123;
obj.foo // 123

var o1 = {}
var o2 = {}
o2 = o1 //绑定地址
o1.a = 5
console.log(o2.a)//5
o2.a = 10
console.log(o1.a)//10
//这种绑定只有对象可以
var x = 2, y;
y = x;
y = 3;
console.log(x)//2

//如果没有圆括号，eval将其理解为一个代码块；加上圆括号以后，就理解成一个对象。
console.log(eval('{foo: 123}'))// 123
console.log(eval('({foo: 123})'))// {foo: 123}
 
//读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符
//(使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理)。
//方括号中可以使用表达式
var foo = 'bar';
var obj = {
  foo: 1,
  bar: 2
};
console.log(obj.foo) // 1
console.log(obj[foo])// 2

//查看一个对象本身的所有属性，可以使用Object.keys方法。

var obj = {
    key1: 1,
    key2: 2
  };
console.log(Object.keys(obj))
//使用in 判断对象中是否存在属性
console.log('key1' in obj)
//使用 for + in 遍历对象中的属性 
// 继承的tostring属性不可遍历
var obj = {a: 1, b: 2, c: 3};
for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
//使用with操作对象的多个属性


//递归
function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
  }
  
  console.log(fib(6)) // 8

//利用函数中的注释实现多行字符串
function multiline(fn) {
    var arr = fn.toString().split('\n');//split() 方法用于把一个字符串分割成字符串数组。
    console.log(arr)
    return arr.slice(2, arr.length - 2).join('\n');//alice可从已有的数组中截取选中的元素 join可以合并数组中的元素并插入分隔符
  };
  
function f() {
    /*
    这是一个
    多行注释
  */
 }
  
console.log(multiline(f))
  // " 这是一个
  //   多行注释"

//   var test = ['asds','tyuio','fghkii']
//   console.log(test.slice(0,length-1).join('\n'))

//eval 接受一个字符串并将字符串当语句使用
eval('console.log(multiline(f))')
// " 这是一个
//   多行注释"
console.log(eval(1516))//1516

var arr = [];
arr.p = 'tasdfg'
console.log(arr['p'])

var a = [1, 2, 3];
a.foo = true

for (var key in a) {
  console.log(a[key]);
}