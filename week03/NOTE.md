# 第三周学习笔记  

### 一、js表达式  

#### 1、运算符和表达式

##### 定义：表达式语句实际上就是一个表达式，它是由运算符连接变量或者直接量构成的

###### 1）PrimaryExpression 主要表达式

Primary Expression。它是表达式的最小单位，它所涉及的语法结构也是优先级最高的。

任何表达式加上圆括号，都被认为是 Primary Expression，这个机制使得圆括号成为改变运算优先顺序的手段。

###### 2) MemberExpression 成员表达式

Member Expression 通常是用于访问对象成员的。它有几种形式：
`a.b;`
`a["b"];`
`new.target;`
`super.b;`

###### 3) NewExpression NEW 表达式

Member Expression 加上 new 就是 New Expression（当然，不加 new 也可以构成 New Expression，JavaScript 中默认独立的高优先级表达式都可以构成低优先级表达式）。
不带参数列表的 new 运算优先级更低，不属于 Member Expression。
`new new Cls(1);` 等价于 `new (new Cls(1));`

###### 4) CallExpression 函数调用表达式

除了 New Expression，Member Expression 还能构成 Call Expression。它的基本形式是 Member Expression 后加一个括号里的参数列表，或者我们可以用上 super 关键字代替 Member Expression。
`a.b(c);`
`super();`

###### 5) LeftHandSideExpression 左值表达式

New Expression 和 Call Expression 统称 LeftHandSideExpression，左值表达式。左值表达式就是可以放到等号左边的表达式
`a() = b;`

###### 6) AssignmentExpression 赋值表达式

AssignmentExpression 赋值表达式也有多种形态，最基本的当然是使用等号赋值：
`a = b`
`a = b = c = d` 等价于 `a = (b = (c = d))`
也就是说，先把 d 的结果赋值给 c，再把整个表达式的结果赋值给 b，再赋值给 a。

###### 7) Expression 表达式

赋值表达式可以构成 Expression 表达式的一部分。在 JavaScript 中，表达式就是用逗号运算符连接的赋值表达式。
`a = b, b = 1, null;`


### 二、js语句  

### 三、js结构化

