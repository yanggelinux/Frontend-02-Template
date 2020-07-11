// 找出 JavaScript 标准里面所有具有特殊行为的对象
// 特殊行为的对象
// 1、Array：Array的length属性根据最大的下标自动发生变化。
// 2、Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
// 3、String：为了支持下标运算，String的正整数属性访问会去字符串里查找。
// 4、Arguments：arguments的非负整数型下标属性跟对应的变量联动。
// 5、模块的namespace对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于import吧。
// 6、类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
// 7、bind后的function：跟原来的函数相关联。
