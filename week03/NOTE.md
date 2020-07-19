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


##### 能够出现在赋值表达式右边的叫做：右值表达式（RightHandSideExpression），而在 JavaScript 标准中，规定了在等号右边表达式叫做条件表达式（ConditionalExpression），不过，在 JavaScript 标准中，从未出现过右值表达式字样

###### 8) 更新表达式 UpdateExpression

左值表达式搭配 ++ -- 运算符，可以形成更新表达式。

`-- a;`
`++ a;`
`a --`
`a ++`

###### 9) 一元运算表达式 UnaryExpression

`delete a.b;`
`void a;`
`typeof a;`
`- a;`
`~ a;`
`! a;`
`await a;`

###### 10) 乘方表达式 ExponentiationExpression

乘方表达式也是由更新表达式构成的。它使用**号。

`++i ** 30`
`2 ** 30 //正确`
`-2 ** 30 //报错`
`(-2) ** 30 //正确`
`4 ** 3 ** 2` 等价于 `4 ** (3 ** 2)`

###### 11) 乘法表达式 MultiplicativeExpression

乘法表达式有三种运算符
`*`
`/`
`%`

###### 12) 加法表达式 AdditiveExpression

加法表达式是由乘法表达式用加号或者减号连接构成的
`a + b * c`
加法表达式有加号和减号两种运算符。
`+` 
`-`

###### 13) 移位表达式 ShiftExpression

`<< 向左移位`
`>> 向右移位`
`>>> 无符号向右移位`

###### 14) 关系表达式 RelationalExpression

移位表达式可以构成关系表达式，这里的关系表达式就是大于、小于、大于等于、小于等于等运算符号连接，统称为关系运算。
`<=`
`>=`
`<`
`>`
`instanceof`
`in`

###### 15) 相等表达式 EqualityExpression

`==`
`!=`
`===`
`!==`

虽然标准中写的==十分复杂，但是归根结底，类型不同的变量比较时==运算只有三条规则：

1. undefined 与 null 相等；
2. 字符串和 bool 都转为数字再比较；
3. 对象转换成 primitive 类型再比较。

###### 16) 位运算表达式

位运算表达式含有三种：

1. 按位与表达式 BitwiseANDExpression
2. 按位异或表达式 BitwiseANDExpression
3. 按位或表达式 BitwiseORExpression。

###### 17) 逻辑与表达式和逻辑或表达式

`&&`
`||`
逻辑表达式具有短路的特性
`true || foo();` 这里的 foo 将不会被执行，这种中断后面表达式执行的特性就叫做短路。

###### 18) 条件表达式 ConditionalExpression

条件表达式由逻辑或表达式和条件运算符构成，条件运算符又称三目运算符，它有三个部分，由两个运算符?和:配合使用。

`condition ? branch1 : branch2`

###### 优先级由高到低以及结合性

1. ()
2. ./[] 左
3. new MemberExpression Arguments
4. new MemberExpression 右
5. () 函数调用 左
6. ++/--
7. +/-/~/!/delete/typeof/void/await 右
8. ** 右
9. *///% 左
10. +/- 左
11. << >> >>> 左
12. < > <= >= instance of in 左
13. == === != !== 左
14. & 左
15. ^ 左
16. | 左
17. && 左
18. || 左
19. ?: 右
20. = 右
21. , 左

#### 2、类型转换

##### StringToNunber

多数情况下，Number 是比 parseInt 和 parseFloat 更好的选择。

##### NumberToString

String 优于 toString

##### 装箱转换

每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。

装箱机制会频繁产生临时对象，在一些对性能要求较高的场景下，我们应该尽量避免对基本类型做装箱转换。

Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。

##### 拆箱转换

在 JavaScript 标准中，规定了 ToPrimitive 函数，它是对象类型到基本类型的转换（即，拆箱转换）。
对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number。

### 二、js语句  

在 JavaScript 标准中，把语句分成了两种：声明和语句

##### 普通语句

###### 语句快

###### 空语句

###### 表达式语句

###### if语句

###### switch语句

###### 循环语句

for循环，for in 循环，for of 循环， for await of 循环，while 循环，do while 循环

###### return语句

###### break语句

###### continue语句

###### with语句

###### throw语句

###### try语句

###### debugger语句

##### 声明语句

###### var语句

###### let语句

###### const语句

let 和 const 声明虽然看上去是执行到了才会生效，但是实际上，它们还是会被预处理。不允许在变量声明之前提前访问，访问变量的值会报错。

###### class语句

class 最基本的用法只需要 class 关键字、名称和一对大括号。它的声明特征跟 const 和 let 类似，都是作用于块级作用域，预处理阶段则会屏蔽外部变量。

###### 函数声明

普通函数声明，async函数声明，generator函数声明，async generator函数声明

##### Completion Record

Completion Record 表示一个语句执行完之后的结果，它有三个字段：

1. `[[type]]` 表示完成的类型，有 break continue return throw 和 normal 几种类型；
2. `[[value]]` 表示语句的返回值，如果语句没有，则是 empty；
3. `[[target]]` 表示语句的目标，通常是一个 JavaScript 标签。

JavaScript 正是依靠语句的 Completion Record 类型，方才可以在语句的复杂嵌套结构中，实现各种控制。
普通语句执行后，会得到 [[type]] 为 normal 的 Completion Record，JavaScript 引擎遇到这样的 Completion Record，会继续执行下一条语句。

### 三、js结构化

