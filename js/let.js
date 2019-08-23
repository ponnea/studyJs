// let:块级作用域；声明“局部变量” 
// var:声明“全局变量”
// 变量提升：当在声明之前使用var声明的变量为undifined，
//          说明当程序运行的一开始var就已经声明好了只是没有赋值。
console.log(i);
var i = 5;
for(let i = 0; i<3; i++) {
    document.write('let有效区域',i,'<br>');
}
console.log('let无效区域',i);
// 在声明全局变量tmp后又在区域内声明了一个局部变量tmp，
// 在块级作用域中局部变量优先于全局变量，输出tmp Uncaught ReferenceError。
// 在块级作用域中若先于定义就使用将会报错。（暂时性死区）

// var tmp = 123;

// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// x=y,y还没有赋值，所以
// function bar(x = y, y = 2) {
//     return [x, y];
//   }
  
//   bar();
